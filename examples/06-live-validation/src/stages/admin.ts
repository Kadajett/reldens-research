/**
 * Admin stage: real HTTP requests against the running admin panel, firing the
 * @reldens/cms admin events. The view/edit routes take the id as a QUERY param
 * (lib/admin-manager/router-contents.js:165,218), save/delete are POSTs on
 * /<entity>/save and /<entity>/delete (lib/admin-manager/router.js:141,158).
 *
 * The stage also performs the one real data change the gameplay side needs: it
 * creates a users_locale row through the admin CRUD (adminBeforeEntitySave /
 * adminAfterEntitySave), which makes the next login of that user run the locale
 * enricher (reldens.afterEnrichPlayerWithLocale). A second row is created and
 * deleted again for adminAfterEntityDelete.
 */

export interface AdminSession {
    get: (path: string) => Promise<Response>;
    post: (path: string, body: Record<string, string>) => Promise<Response>;
}

export async function adminLogin(httpUrl: string): Promise<AdminSession> {
    const loginResponse = await fetch(httpUrl+'/reldens-admin/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({email: 'harness@example.com', password: 'harness-pass-1'}),
        redirect: 'manual'
    });
    const cookie = loginResponse.headers.getSetCookie?.().map((c) => c.split(';')[0]).join('; ') ?? '';
    return {
        get: (path: string) => fetch(httpUrl+'/reldens-admin'+path, {headers: {cookie}, redirect: 'manual'}),
        post: (path: string, body: Record<string, string>) => fetch(httpUrl+'/reldens-admin'+path, {
            method: 'POST',
            headers: {cookie, 'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(body),
            redirect: 'manual'
        })
    };
}

export interface AdminStageContext {
    httpUrl: string;
    /** user id that should receive a users_locale row (locale id 1 = en_US) */
    localeUserId?: number;
    /** a different user id for the create-then-delete round trip */
    throwawayUserId?: number;
}

export async function runAdminStage(ctx: AdminStageContext): Promise<void> {
    const admin = await adminLogin(ctx.httpUrl);

    await admin.get('/');
    // list -> view -> edit: adminBeforeEntityLoad, adminViewPropertiesPopulation,
    // adminBeforeFieldRender, adminBeforeEntityEdit, adminEditPropertiesPopulation
    await admin.get('/config');
    await admin.get('/config/view?id=1');
    await admin.get('/config/edit?id=1');

    if(ctx.localeUserId){
        // adminBefore/AfterEntitySave, plus the row the locale enricher needs
        const saveResponse = await admin.post('/users-locale/save', {
            user_id: String(ctx.localeUserId),
            locale_id: '1'
        });
        const location = saveResponse.headers.get('location') ?? '';
        if(!location.includes('result=success')){
            throw new Error('users_locale save failed: '+location);
        }
    }

    // create-then-delete a row for a different user: adminAfterEntityDelete
    const throwawayResponse = await admin.post('/users-locale/save', {
        user_id: String(ctx.throwawayUserId ?? 1),
        locale_id: '1'
    });
    const throwawayLocation = throwawayResponse.headers.get('location') ?? '';
    if(!throwawayLocation.includes('result=success')){
        throw new Error('throwaway users_locale save failed: '+throwawayLocation);
    }
    // find the created row id from the list page
    const listHtml = await (await admin.get('/users-locale')).text();
    const ids = [...listHtml.matchAll(/users-locale\/view\?id=(\d+)/g)].map((m) => Number(m[1]));
    const deleteId = Math.max(...ids);
    const deleteResponse = await admin.post('/users-locale/delete', {ids: String(deleteId)});
    const deleteLocation = deleteResponse.headers.get('location') ?? '';
    if(!deleteLocation.includes('result=success')){
        throw new Error('users_locale delete failed: '+deleteLocation);
    }
}

/** Save one config row through the real admin CRUD (server-scope rows load at the next boot). */
export async function saveConfigRow(httpUrl: string, id: number, path: string, value: string): Promise<void> {
    const admin = await adminLogin(httpUrl);
    const response = await admin.post('/config/save', {
        id: String(id), scope: 'server', path, type: '2', value
    });
    const location = response.headers.get('location') ?? '';
    if(!location.includes('result=success')){
        throw new Error('config save failed ('+path+'): '+location);
    }
}

/**
 * Edit players/initialState/room_id (config id 335) through the real admin CRUD.
 * Used across the two harness phases to make registration hit a genuinely broken
 * initial state (reldens.playerSceneUnavailable) on the next boot, then restore it.
 */
export function setInitialStateRoomId(httpUrl: string, roomId: number): Promise<void> {
    return saveConfigRow(httpUrl, 335, 'players/initialState/room_id', String(roomId));
}
