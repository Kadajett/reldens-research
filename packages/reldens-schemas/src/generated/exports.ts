/**
 * GENERATED - do not edit by hand.
 *
 * Every module.exports.* in the reldens package, with where it is declared, what it
 * extends, and its method list from the graphify AST graph.
 *
 * "demonstratedInProjectTemplate" marks the nine import paths the platform's own project
 * template and sample plugins use. That is the strongest available evidence of what is
 * intended to be public: everything else is reachable but undocumented.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export interface ReldensExport {
    name: string;
    importPath: string;
    exportedFrom: {file: string; line: number};
    declaredIn: {file: string; line: number} | null;
    /** How the declaration was located: declared-in-file, or resolved through a re-export. */
    resolution: string | null;
    kind: string;
    extends: string | null;
    methods: string[];
    graphInboundEdges: number;
    demonstratedInProjectTemplate: boolean;
}

export const RELDENS_DEMONSTRATED_IMPORT_PATHS = [
    "reldens/client",
    "reldens/lib/chat/constants",
    "reldens/lib/config/client/config-manager",
    "reldens/lib/features/plugin-interface",
    "reldens/lib/game/client/game-client",
    "reldens/lib/game/constants",
    "reldens/lib/objects/client/animation-engine",
    "reldens/lib/objects/server/object/type/npc-object",
    "reldens/server"
] as const;

export const RELDENS_SUBCLASS_COUNTS = {
    "PluginInterface": 29,
    "RepositoriesExtension": 4,
    "RoomLogin": 3,
    "Schema": 3,
    "ConfigProcessor": 2,
    "Receiver": 2,
    "BaseAd": 2,
    "Scene": 2,
    "Battle": 2,
    "BaseObject": 2,
    "NpcObject": 2,
    "AnimationObject": 2,
    "ChatEntity": 1,
    "ChatMessageTypesEntity": 1,
    "RewardsModifiersEntity": 1,
    "RewardsEntity": 1,
    "RewardsEventsEntity": 1,
    "DropsAnimationsEntity": 1,
    "EventHandler": 1,
    "ConfigEntity": 1,
    "ConfigTypesEntity": 1,
    "World": 1,
    "BodyState": 1,
    "Body": 1,
    "PlayerEngine": 1,
    "FeaturesEntity": 1,
    "EntityProperties": 1,
    "PropertiesHandler": 1,
    "AudioEntity": 1,
    "RoomsEntity": 1,
    "Room": 1,
    "UiFactory": 1,
    "Processor": 1,
    "ItemsItemEntity": 1,
    "ItemsInventoryEntity": 1,
    "ItemsGroupEntity": 1,
    "AdsEntity": 1,
    "ClanLevelsModifiersEntity": 1,
    "ClanEntity": 1,
    "Game": 1,
    "Server": 1,
    "ScoresDetailEntity": 1,
    "ScoresEntity": 1,
    "Attack": 1,
    "Effect": 1,
    "PhysicalAttack": 1,
    "PhysicalEffect": 1,
    "SkillsSkillEntity": 1,
    "OperationTypesEntity": 1,
    "SkillsSkillAttackEntity": 1,
    "SkillsSkillAnimationsEntity": 1,
    "SkillsLevelsModifiersEntity": 1,
    "SkillsLevelsSetEntity": 1,
    "SkillsClassPathEntity": 1,
    "SkillsOwnersClassPathEntity": 1,
    "SkillsSkillTargetEffectsEntity": 1,
    "SkillsSkillOwnerEffectsEntity": 1,
    "InteractionArea": 1,
    "ObjectsEntity": 1,
    "PlayersStateEntity": 1,
    "UsersLoginEntity": 1,
    "UsersEntity": 1,
    "PlayersEntity": 1,
    "StatsEntity": 1,
    "PlayersStatsEntity": 1,
    "UsersLocaleEntity": 1,
    "LocaleEntity": 1,
    "SnippetsEntity": 1,
    "RespawnEntity": 1
} as const;

export const RELDENS_EXPORTS: ReldensExport[] = [
    {
        "name": "GameManager",
        "importPath": "reldens/client",
        "exportedFrom": {
            "file": "client.js",
            "line": 13
        },
        "declaredIn": {
            "file": "lib/game/client/game-manager.js",
            "line": 44
        },
        "resolution": "re-export-resolved-by-unique-name",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateResponsiveBehavior()",
            ".beforeStartGame()",
            ".clientStart()",
            ".constructor()",
            ".createRoomEventsInstance()",
            ".currentPlayerName()",
            ".displayFormError()",
            ".emitActivatedRoom()",
            ".emitJoinedRoom()",
            ".getActiveScene()",
            ".getActiveScenePreloader()",
            ".getAnimationByKey()",
            ".getAppServerUrl()",
            ".getCurrentPlayer()",
            ".getCurrentPlayerAnimation()",
            ".getFeature()",
            ".getGameServerUrl()",
            ".getUiElement()",
            ".getUrlFromCurrentReferer()",
            ".handleGameRoomMessages()",
            ".handleLoginError()",
            ".handleLoginSuccess()",
            ".initEngine()",
            ".initializeClient()",
            ".joinFeaturesRooms()",
            ".joinGame()",
            ".mapFormDataToUserData()",
            ".reconnectGameClient()",
            ".setChangingScene()",
            ".setupCustomClientPlugin()",
            ".startGame()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "GameManagerEnricher",
        "importPath": "reldens/lib/actions/client/game-manager-enricher",
        "exportedFrom": {
            "file": "lib/actions/client/game-manager-enricher.js",
            "line": 49
        },
        "declaredIn": {
            "file": "lib/actions/client/game-manager-enricher.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".withReceiver()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesGuard",
        "importPath": "reldens/lib/actions/client/messages-guard",
        "exportedFrom": {
            "file": "lib/actions/client/messages-guard.js",
            "line": 38
        },
        "declaredIn": {
            "file": "lib/actions/client/messages-guard.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesHandler",
        "importPath": "reldens/lib/actions/client/messages-handler",
        "exportedFrom": {
            "file": "lib/actions/client/messages-handler.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/actions/client/messages-handler.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".processOrQueueMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerSelector",
        "importPath": "reldens/lib/actions/client/player-selector",
        "exportedFrom": {
            "file": "lib/actions/client/player-selector.js",
            "line": 121
        },
        "declaredIn": {
            "file": "lib/actions/client/player-selector.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".appendAvatarOnSelector()",
            ".constructor()",
            ".populateClassesSelector()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActionsPlugin",
        "importPath": "reldens/lib/actions/client/plugin",
        "exportedFrom": {
            "file": "lib/actions/client/plugin.js",
            "line": 94
        },
        "declaredIn": {
            "file": "lib/actions/client/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setTranslations()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PreloaderHandler",
        "importPath": "reldens/lib/actions/client/preloader-handler",
        "exportedFrom": {
            "file": "lib/actions/client/preloader-handler.js",
            "line": 342
        },
        "declaredIn": {
            "file": "lib/actions/client/preloader-handler.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createAnimation()",
            ".createAnimations()",
            ".createAvatarsAnimations()",
            ".createWithDirection()",
            ".createWithMultipleDirections()",
            ".getAnimationKey()",
            ".loadContents()",
            ".loopAnimationsAnd()",
            ".preloadAnimation()",
            ".preloadAnimationsInDirections()",
            ".preloadClassPaths()",
            ".preloadSpriteInDirection()",
            ".prepareAnimationData()",
            ".setProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ReceiverWrapper",
        "importPath": "reldens/lib/actions/client/receiver-wrapper",
        "exportedFrom": {
            "file": "lib/actions/client/receiver-wrapper.js",
            "line": 486
        },
        "declaredIn": {
            "file": "lib/actions/client/receiver-wrapper.js",
            "line": 34
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Receiver",
        "methods": [
            ".constructor()",
            ".determineCastKey()",
            ".extractOwnerTargetAndType()",
            ".getLevelUpAnimationKey()",
            ".getPlayDirection()",
            ".onInitClassPathEnd()",
            ".onLevelExperienceAdded()",
            ".onLevelUp()",
            ".onSkillAfterCast()",
            ".onSkillAttackApplyDamage()",
            ".onSkillBeforeCast()",
            ".playAttackOrEffectAnimation()",
            ".playHitAnimation()",
            ".playSkillPlayerAnimation()",
            ".processMessage()",
            ".runHitAnimation()",
            ".setTargetSpriteDepth()",
            ".updateLevelAndExperience()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsUi",
        "importPath": "reldens/lib/actions/client/skills-ui",
        "exportedFrom": {
            "file": "lib/actions/client/skills-ui.js",
            "line": 117
        },
        "declaredIn": {
            "file": "lib/actions/client/skills-ui.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".appendSkills()",
            ".appendToUiContainer()",
            ".constructor()",
            ".createSkillBox()",
            ".createUi()",
            ".createUiBox()",
            ".parseSkillTemplate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActionsConst",
        "importPath": "reldens/lib/actions/constants",
        "exportedFrom": {
            "file": "lib/actions/constants.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClassPathKeyFactory",
        "importPath": "reldens/lib/actions/factories/class-path-key-factory",
        "exportedFrom": {
            "file": "lib/actions/factories/class-path-key-factory.js",
            "line": 23
        },
        "declaredIn": {
            "file": "lib/actions/factories/class-path-key-factory.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fromLabel()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillDataFactory",
        "importPath": "reldens/lib/actions/factories/skill-data-factory",
        "exportedFrom": {
            "file": "lib/actions/factories/skill-data-factory.js",
            "line": 279
        },
        "declaredIn": {
            "file": "lib/actions/factories/skill-data-factory.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".isValid()",
            ".mapAnimations()",
            ".mapClassPaths()",
            ".mapData()",
            ".mapObjects()",
            ".mapOwnerConditions()",
            ".mapOwnerEffects()",
            ".mapTargetEffects()",
            ".skillBaseData()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillSchema",
        "importPath": "reldens/lib/actions/schemas/skill-schema",
        "exportedFrom": {
            "file": "lib/actions/schemas/skill-schema.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Battle",
        "importPath": "reldens/lib/actions/server/battle",
        "exportedFrom": {
            "file": "lib/actions/server/battle.js",
            "line": 244
        },
        "declaredIn": {
            "file": "lib/actions/server/battle.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clientDeathUpdate()",
            ".constructor()",
            ".getCurrentAction()",
            ".revivePlayer()",
            ".runBattle()",
            ".setTimerOn()",
            ".updateTargetClient()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BattleEndAction",
        "importPath": "reldens/lib/actions/server/battle-end-action",
        "exportedFrom": {
            "file": "lib/actions/server/battle-end-action.js",
            "line": 32
        },
        "declaredIn": {
            "file": "lib/actions/server/battle-end-action.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DataLoader",
        "importPath": "reldens/lib/actions/server/data-loader",
        "exportedFrom": {
            "file": "lib/actions/server/data-loader.js",
            "line": 176
        },
        "declaredIn": {
            "file": "lib/actions/server/data-loader.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".appendLevelsAnimations()",
            ".appendSkillsAnimations()",
            ".enrichConfig()",
            ".generateAnimationKey()",
            ".loadClassPathFullList()",
            ".loadGroupsFullList()",
            ".loadSkillsFullList()",
            ".prepareConfigProcessor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/actions/server/entities-config",
        "exportedFrom": {
            "file": "lib/actions/server/entities-config.js",
            "line": 18
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/actions/server/entities-translations",
        "exportedFrom": {
            "file": "lib/actions/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "OperationTypesEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/operation-types-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/operation-types-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/operation-types-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "OperationTypesEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsClassPathEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-class-path-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-class-path-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-class-path-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsClassPathEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsLevelsModifiersEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-levels-modifiers-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-levels-modifiers-entity-override.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-levels-modifiers-entity-override.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsLevelsModifiersEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsLevelsSetEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-levels-set-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-levels-set-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-levels-set-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsLevelsSetEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsOwnersClassPathEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-owners-class-path-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-owners-class-path-entity-override.js",
            "line": 29
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-owners-class-path-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsOwnersClassPathEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsSkillAnimationsEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-skill-animations-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-skill-animations-entity-override.js",
            "line": 29
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-skill-animations-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsSkillAnimationsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsSkillAttackEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-skill-attack-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-skill-attack-entity-override.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-skill-attack-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsSkillAttackEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsSkillEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-skill-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-skill-entity-override.js",
            "line": 40
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-skill-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsSkillEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsSkillOwnerEffectsEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-skill-owner-effects-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-skill-owner-effects-entity-override.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-skill-owner-effects-entity-override.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsSkillOwnerEffectsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsSkillTargetEffectsEntityOverride",
        "importPath": "reldens/lib/actions/server/entities/skills-skill-target-effects-entity-override",
        "exportedFrom": {
            "file": "lib/actions/server/entities/skills-skill-target-effects-entity-override.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/actions/server/entities/skills-skill-target-effects-entity-override.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SkillsSkillTargetEffectsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EventListeners",
        "importPath": "reldens/lib/actions/server/event-listeners",
        "exportedFrom": {
            "file": "lib/actions/server/event-listeners.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/actions/server/event-listeners.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".attachCastMovementEvents()",
            ".validateSkillData()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BattleEndedEvent",
        "importPath": "reldens/lib/actions/server/events/battle-ended-event",
        "exportedFrom": {
            "file": "lib/actions/server/events/battle-ended-event.js",
            "line": 40
        },
        "declaredIn": {
            "file": "lib/actions/server/events/battle-ended-event.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerDeathEvent",
        "importPath": "reldens/lib/actions/server/events/player-death-event",
        "exportedFrom": {
            "file": "lib/actions/server/events/player-death-event.js",
            "line": 42
        },
        "declaredIn": {
            "file": "lib/actions/server/events/player-death-event.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InitialGameDataEnricher",
        "importPath": "reldens/lib/actions/server/initial-game-data-enricher",
        "exportedFrom": {
            "file": "lib/actions/server/initial-game-data-enricher.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/actions/server/initial-game-data-enricher.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".withClassPathLabels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActionsMessageActions",
        "importPath": "reldens/lib/actions/server/message-actions",
        "exportedFrom": {
            "file": "lib/actions/server/message-actions.js",
            "line": 110
        },
        "declaredIn": {
            "file": "lib/actions/server/message-actions.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeMessageActions()",
            ".preparePlayerCurrentAction()",
            ".validateTarget()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ModelsManager",
        "importPath": "reldens/lib/actions/server/models-manager",
        "exportedFrom": {
            "file": "lib/actions/server/models-manager.js",
            "line": 164
        },
        "declaredIn": {
            "file": "lib/actions/server/models-manager.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".generateClassPathInstances()",
            ".generateSkillsDataFromModels()",
            ".getEntity()",
            ".loadOwnerClassPath()",
            ".prepareClassPathData()",
            ".updateExperience()",
            ".updateLevel()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerClassPathHandler",
        "importPath": "reldens/lib/actions/server/player-class-path-handler",
        "exportedFrom": {
            "file": "lib/actions/server/player-class-path-handler.js",
            "line": 41
        },
        "declaredIn": {
            "file": "lib/actions/server/player-class-path-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createFromLoginData()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerEnricher",
        "importPath": "reldens/lib/actions/server/player-enricher",
        "exportedFrom": {
            "file": "lib/actions/server/player-enricher.js",
            "line": 178
        },
        "declaredIn": {
            "file": "lib/actions/server/player-enricher.js",
            "line": 29
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".playerExecutePhysicalSkillCallback()",
            ".withActions()",
            ".withClassPath()",
            ".withSkillsServerAndClassPath()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActionsPlugin",
        "importPath": "reldens/lib/actions/server/plugin",
        "exportedFrom": {
            "file": "lib/actions/server/plugin.js",
            "line": 141
        },
        "declaredIn": {
            "file": "lib/actions/server/plugin.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".appendRoomActions()",
            ".createPlayerClassPath()",
            ".enrichInitialGameDataWithClassPathData()",
            ".enrichPlayerWithSkillsAndActions()",
            ".listenEvents()",
            ".serverReadyDataLoaderEnrichConfig()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Pve",
        "importPath": "reldens/lib/actions/server/pve",
        "exportedFrom": {
            "file": "lib/actions/server/pve.js",
            "line": 368
        },
        "declaredIn": {
            "file": "lib/actions/server/pve.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Battle",
        "methods": [
            ".attackInRange()",
            ".battleEnded()",
            ".chasePlayer()",
            ".constructor()",
            ".leaveBattle()",
            ".moveObjectToOriginPoints()",
            ".pickRandomActionFromObject()",
            ".removeInBattlePlayer()",
            ".runBattle()",
            ".sendBattleEndedActionData()",
            ".setTargetObject()",
            ".startBattleWith()",
            ".startBattleWithDelay()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Pvp",
        "importPath": "reldens/lib/actions/server/pvp",
        "exportedFrom": {
            "file": "lib/actions/server/pvp.js",
            "line": 78
        },
        "declaredIn": {
            "file": "lib/actions/server/pvp.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Battle",
        "methods": [
            ".executeAction()",
            ".runBattle()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsClassPathLoader",
        "importPath": "reldens/lib/actions/server/skills-class-path-loader",
        "exportedFrom": {
            "file": "lib/actions/server/skills-class-path-loader.js",
            "line": 226
        },
        "declaredIn": {
            "file": "lib/actions/server/skills-class-path-loader.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".attachSkillsToLevelSkills()",
            ".constructor()",
            ".extractSkillIds()",
            ".getEntity()",
            ".groupByClassPathId()",
            ".indexById()",
            ".loadClassPathsWithLevelsSet()",
            ".loadFullPathData()",
            ".loadLevelLabelsByClassPathIds()",
            ".loadLevelSkillsByClassPathIds()",
            ".loadSkillsWithRelations()",
            ".mapClassPathData()",
            ".sortLevelSkillsBySkillKey()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsExtraDataMapper",
        "importPath": "reldens/lib/actions/server/skills-extra-data-mapper",
        "exportedFrom": {
            "file": "lib/actions/server/skills-extra-data-mapper.js",
            "line": 64
        },
        "declaredIn": {
            "file": "lib/actions/server/skills-extra-data-mapper.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".extractSkillExtraData()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "StorageObserver",
        "importPath": "reldens/lib/actions/server/storage-observer",
        "exportedFrom": {
            "file": "lib/actions/server/storage-observer.js",
            "line": 126
        },
        "declaredIn": {
            "file": "lib/actions/server/storage-observer.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".registerListeners()",
            ".saveLevelUpData()",
            ".saveOwnerData()",
            ".saveTargetData()",
            ".updateExperience()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClassPathGenerator",
        "importPath": "reldens/lib/actions/server/storage/class-path-generator",
        "exportedFrom": {
            "file": "lib/actions/server/storage/class-path-generator.js",
            "line": 61
        },
        "declaredIn": {
            "file": "lib/actions/server/storage/class-path-generator.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".extractLabelsByLevels()",
            ".fromClassPathModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConditionsGenerator",
        "importPath": "reldens/lib/actions/server/storage/conditions-generator",
        "exportedFrom": {
            "file": "lib/actions/server/storage/conditions-generator.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/actions/server/storage/conditions-generator.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fromConditionsModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LevelsGenerator",
        "importPath": "reldens/lib/actions/server/storage/levels-generator",
        "exportedFrom": {
            "file": "lib/actions/server/storage/levels-generator.js",
            "line": 51
        },
        "declaredIn": {
            "file": "lib/actions/server/storage/levels-generator.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".extractModifiers()",
            ".fromLevelsModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ModifiersGenerator",
        "importPath": "reldens/lib/actions/server/storage/modifiers-generator",
        "exportedFrom": {
            "file": "lib/actions/server/storage/modifiers-generator.js",
            "line": 34
        },
        "declaredIn": {
            "file": "lib/actions/server/storage/modifiers-generator.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fromModifiersModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsGenerator",
        "importPath": "reldens/lib/actions/server/storage/skills-generator",
        "exportedFrom": {
            "file": "lib/actions/server/storage/skills-generator.js",
            "line": 139
        },
        "declaredIn": {
            "file": "lib/actions/server/storage/skills-generator.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".dataFromSkillsModelsWithClasses()",
            ".enrichWithAttackData()",
            ".enrichWithPhysicalData()",
            ".skillsByLevelsFromSkillsModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EntitiesConfigOverrides",
        "importPath": "reldens/lib/admin/server/entities-config-override",
        "exportedFrom": {
            "file": "lib/admin/server/entities-config-override.js",
            "line": 46
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdminPlugin",
        "importPath": "reldens/lib/admin/server/plugin",
        "exportedFrom": {
            "file": "lib/admin/server/plugin.js",
            "line": 135
        },
        "declaredIn": {
            "file": "lib/admin/server/plugin.js",
            "line": 27
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".extendAdminTemplates()",
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomMapTilesetsValidator",
        "importPath": "reldens/lib/admin/server/room-map-tilesets-validator",
        "exportedFrom": {
            "file": "lib/admin/server/room-map-tilesets-validator.js",
            "line": 227
        },
        "declaredIn": {
            "file": "lib/admin/server/room-map-tilesets-validator.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".arraysAreEqual()",
            ".constructor()",
            ".extractTilesetImages()",
            ".extractTilesetImagesFromEntity()",
            ".overrideSceneImages()",
            ".readMapFile()",
            ".validate()",
            ".validateImagesExist()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsFileUploadRenderer",
        "importPath": "reldens/lib/admin/server/rooms-file-upload-renderer",
        "exportedFrom": {
            "file": "lib/admin/server/rooms-file-upload-renderer.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/admin/server/rooms-file-upload-renderer.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".renderFileUploadField()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreateAdminSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/create-admin-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/create-admin-subscriber.js",
            "line": 143
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/create-admin-subscriber.js",
            "line": 26
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateAdmin()",
            ".fetchConfigurations()",
            ".fetchFilesContents()",
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GeneratorsRoutesSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/generators-routes-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/generators-routes-subscriber.js",
            "line": 80
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/generators-routes-subscriber.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".listenEvents()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MapsWizardSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/maps-wizard-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/maps-wizard-subscriber.js",
            "line": 367
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/maps-wizard-subscriber.js",
            "line": 29
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".generateMaps()",
            ".importSelectedMaps()",
            ".listenEvents()",
            ".mapGeneratedMapsDataForImport()",
            ".mapSubMapsData()",
            ".mapsWizardMapsSelection()",
            ".mapsWizardRedirect()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsImporterSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/objects-importer-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/objects-importer-subscriber.js",
            "line": 140
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/objects-importer-subscriber.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".importObjects()",
            ".listenEvents()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsEntitySubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/rooms-entity-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/rooms-entity-subscriber.js",
            "line": 254
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/rooms-entity-subscriber.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".listenEvents()",
            ".populateEditFormTilesetImages()",
            ".roomsEntityExtraData()",
            ".setupRepositories()",
            ".setupRoomsSpecificRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ShutdownSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/shutdown-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/shutdown-subscriber.js",
            "line": 229
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/shutdown-subscriber.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".broadcastShutdownMessage()",
            ".broadcastSystemMessage()",
            ".constructor()",
            ".fetchConfigurations()",
            ".getShuttingDownData()",
            ".listenEvents()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsImporterSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/skills-importer-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/skills-importer-subscriber.js",
            "line": 140
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/skills-importer-subscriber.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".importSkills()",
            ".listenEvents()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ThemeManagerSubscriber",
        "importPath": "reldens/lib/admin/server/subscribers/theme-manager-subscriber",
        "exportedFrom": {
            "file": "lib/admin/server/subscribers/theme-manager-subscriber.js",
            "line": 367
        },
        "declaredIn": {
            "file": "lib/admin/server/subscribers/theme-manager-subscriber.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeCommand()",
            ".getAvailableThemes()",
            ".getCommandsMetadata()",
            ".getTemplateData()",
            ".listenEvents()",
            ".setupRoutes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesList",
        "importPath": "reldens/lib/admin/server/templates-list",
        "exportedFrom": {
            "file": "lib/admin/server/templates-list.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsProvider",
        "importPath": "reldens/lib/ads/client/ads-provider",
        "exportedFrom": {
            "file": "lib/ads/client/ads-provider.js",
            "line": 52
        },
        "declaredIn": {
            "file": "lib/ads/client/ads-provider.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fetchActiveAdsByProviderId()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesListener",
        "importPath": "reldens/lib/ads/client/messages-listener",
        "exportedFrom": {
            "file": "lib/ads/client/messages-listener.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/ads/client/messages-listener.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".listenMessages()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsPlugin",
        "importPath": "reldens/lib/ads/client/plugin",
        "exportedFrom": {
            "file": "lib/ads/client/plugin.js",
            "line": 126
        },
        "declaredIn": {
            "file": "lib/ads/client/plugin.js",
            "line": 27
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".fetchActiveProviders()",
            ".listenEvents()",
            ".setConfig()",
            ".setSkdHandler()",
            ".setTranslations()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ProvidersList",
        "importPath": "reldens/lib/ads/client/providers-list",
        "exportedFrom": {
            "file": "lib/ads/client/providers-list.js",
            "line": 11
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CrazyGames",
        "importPath": "reldens/lib/ads/client/providers/crazy-games",
        "exportedFrom": {
            "file": "lib/ads/client/providers/crazy-games.js",
            "line": 174
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/crazy-games.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activate()",
            ".activateAds()",
            ".constructor()",
            ".fetchActiveAds()",
            ".hasAdblock()",
            ".isEnabled()",
            ".validAdsTypes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BannersHandler",
        "importPath": "reldens/lib/ads/client/providers/crazy-games/banners-handler",
        "exportedFrom": {
            "file": "lib/ads/client/providers/crazy-games/banners-handler.js",
            "line": 298
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/crazy-games/banners-handler.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateAdBanner()",
            ".availableBanners()",
            ".availableResponsiveBanners()",
            ".constructor()",
            ".createBanner()",
            ".createResponsiveBanner()",
            ".handleBannerType()",
            ".mapStylesWithValues()",
            ".validBannerSize()",
            ".validResponsiveBannerSize()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Validator",
        "importPath": "reldens/lib/ads/client/providers/crazy-games/validator",
        "exportedFrom": {
            "file": "lib/ads/client/providers/crazy-games/validator.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/crazy-games/validator.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".canBeActivated()",
            ".validate()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "VideosHandler",
        "importPath": "reldens/lib/ads/client/providers/crazy-games/videos-handler",
        "exportedFrom": {
            "file": "lib/ads/client/providers/crazy-games/videos-handler.js",
            "line": 156
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/crazy-games/videos-handler.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateAdVideo()",
            ".constructor()",
            ".send()",
            ".setConfig()",
            ".tryRePlay()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameMonetize",
        "importPath": "reldens/lib/ads/client/providers/game-monetize",
        "exportedFrom": {
            "file": "lib/ads/client/providers/game-monetize.js",
            "line": 283
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/game-monetize.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activate()",
            ".activateAds()",
            ".adEndedCallback()",
            ".adStartedCallback()",
            ".constructor()",
            ".eventKeys()",
            ".fetchActiveAds()",
            ".sdkReadyCallback()",
            ".send()",
            ".setConfig()",
            ".setSdkOptions()",
            ".tryRePlay()",
            ".validAdsTypes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GoogleAdSense",
        "importPath": "reldens/lib/ads/client/providers/google-ad-sense",
        "exportedFrom": {
            "file": "lib/ads/client/providers/google-ad-sense.js",
            "line": 37
        },
        "declaredIn": {
            "file": "lib/ads/client/providers/google-ad-sense.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SdkHandler",
        "importPath": "reldens/lib/ads/client/sdk-handler",
        "exportedFrom": {
            "file": "lib/ads/client/sdk-handler.js",
            "line": 93
        },
        "declaredIn": {
            "file": "lib/ads/client/sdk-handler.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateSdkInstance()",
            ".appendSdk()",
            ".constructor()",
            ".setupProvidersSdk()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsConst",
        "importPath": "reldens/lib/ads/constants",
        "exportedFrom": {
            "file": "lib/ads/constants.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsStartHandler",
        "importPath": "reldens/lib/ads/server/ads-start-handler",
        "exportedFrom": {
            "file": "lib/ads/server/ads-start-handler.js",
            "line": 144
        },
        "declaredIn": {
            "file": "lib/ads/server/ads-start-handler.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".enrichAds()",
            ".initialize()",
            ".instanceByType()",
            ".loadData()",
            ".mapProviders()",
            ".mapTypes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Banner",
        "importPath": "reldens/lib/ads/server/ads-type/banner",
        "exportedFrom": {
            "file": "lib/ads/server/ads-type/banner.js",
            "line": 69
        },
        "declaredIn": {
            "file": "lib/ads/server/ads-type/banner.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "BaseAd",
        "methods": [
            ".clientData()",
            ".constructor()",
            ".fromModel()",
            ".setBannerDataFromModel()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BaseAd",
        "importPath": "reldens/lib/ads/server/ads-type/base-ad",
        "exportedFrom": {
            "file": "lib/ads/server/ads-type/base-ad.js",
            "line": 92
        },
        "declaredIn": {
            "file": "lib/ads/server/ads-type/base-ad.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clientData()",
            ".constructor()",
            ".fromModel()",
            ".setData()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EventVideo",
        "importPath": "reldens/lib/ads/server/ads-type/event-video",
        "exportedFrom": {
            "file": "lib/ads/server/ads-type/event-video.js",
            "line": 71
        },
        "declaredIn": {
            "file": "lib/ads/server/ads-type/event-video.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "BaseAd",
        "methods": [
            ".clientData()",
            ".constructor()",
            ".fromModel()",
            ".setVideoDataFromModel()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/ads/server/entities-config",
        "exportedFrom": {
            "file": "lib/ads/server/entities-config.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/ads/server/entities-translations",
        "exportedFrom": {
            "file": "lib/ads/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsEntityOverride",
        "importPath": "reldens/lib/ads/server/entities/ads-entity-override",
        "exportedFrom": {
            "file": "lib/ads/server/entities/ads-entity-override.js",
            "line": 34
        },
        "declaredIn": {
            "file": "lib/ads/server/entities/ads-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "AdsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreatePlayerAdsHandler",
        "importPath": "reldens/lib/ads/server/event-handlers/create-player-ads-handler",
        "exportedFrom": {
            "file": "lib/ads/server/event-handlers/create-player-ads-handler.js",
            "line": 59
        },
        "declaredIn": {
            "file": "lib/ads/server/event-handlers/create-player-ads-handler.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".enrichPlayedWithPlayedAds()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsMessageActions",
        "importPath": "reldens/lib/ads/server/message-actions",
        "exportedFrom": {
            "file": "lib/ads/server/message-actions.js",
            "line": 188
        },
        "declaredIn": {
            "file": "lib/ads/server/message-actions.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".adEnded()",
            ".adStart()",
            ".constructor()",
            ".executeMessageActions()",
            ".giveRewardItem()",
            ".loadPlayedAd()",
            ".setRepository()",
            ".upsertPlayedAd()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AdsPlugin",
        "importPath": "reldens/lib/ads/server/plugin",
        "exportedFrom": {
            "file": "lib/ads/server/plugin.js",
            "line": 74
        },
        "declaredIn": {
            "file": "lib/ads/server/plugin.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioUi",
        "importPath": "reldens/lib/audio/client/audio-ui",
        "exportedFrom": {
            "file": "lib/audio/client/audio-ui.js",
            "line": 102
        },
        "declaredIn": {
            "file": "lib/audio/client/audio-ui.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createUi()",
            ".prepareAudioSettingsContent()",
            ".prepareCategoriesRows()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioUpdate",
        "importPath": "reldens/lib/audio/client/audio-update",
        "exportedFrom": {
            "file": "lib/audio/client/audio-update.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/audio/client/audio-update.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioManager",
        "importPath": "reldens/lib/audio/client/manager",
        "exportedFrom": {
            "file": "lib/audio/client/manager.js",
            "line": 555
        },
        "declaredIn": {
            "file": "lib/audio/client/manager.js",
            "line": 26
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".addCategories()",
            ".changeMuteState()",
            ".constructor()",
            ".destroySceneAudios()",
            ".existsFileByXMLHttpRequest()",
            ".findAudio()",
            ".findAudioInObjectKey()",
            ".findGlobalAudio()",
            ".findRoomAudio()",
            ".fireAudioEvents()",
            ".generateAudio()",
            ".loadAudiosInScene()",
            ".loadByKeys()",
            ".loadGlobalAudios()",
            ".muteCategories()",
            ".prepareFiles()",
            ".processDeleteData()",
            ".processUpdateData()",
            ".removeAudiosFromScene()",
            ".removeSceneAudioByAudioKey()",
            ".restoreMute()",
            ".setAudio()",
            ".setAudioForElementChildren()",
            ".setAudioForSingleEntity()",
            ".setMuteLock()",
            ".updateDefaultConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesListener",
        "importPath": "reldens/lib/audio/client/messages-listener",
        "exportedFrom": {
            "file": "lib/audio/client/messages-listener.js",
            "line": 77
        },
        "declaredIn": {
            "file": "lib/audio/client/messages-listener.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".listenMessages()",
            ".processMessage()",
            ".processQueue()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioPlugin",
        "importPath": "reldens/lib/audio/client/plugin",
        "exportedFrom": {
            "file": "lib/audio/client/plugin.js",
            "line": 134
        },
        "declaredIn": {
            "file": "lib/audio/client/plugin.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".initializeAudioManager()",
            ".listenEvents()",
            ".setTranslations()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SceneAudioPlayer",
        "importPath": "reldens/lib/audio/client/scene-audio-player",
        "exportedFrom": {
            "file": "lib/audio/client/scene-audio-player.js",
            "line": 232
        },
        "declaredIn": {
            "file": "lib/audio/client/scene-audio-player.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".associateSceneAnimationsAudios()",
            ".attachAudioToSprite()",
            ".isCurrentPlayerSprite()",
            ".isMutedState()",
            ".playSceneAudio()",
            ".playSpriteAudio()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioConst",
        "importPath": "reldens/lib/audio/constants",
        "exportedFrom": {
            "file": "lib/audio/constants.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioHotPlugCallbacks",
        "importPath": "reldens/lib/audio/server/audio-hot-plug-callbacks",
        "exportedFrom": {
            "file": "lib/audio/server/audio-hot-plug-callbacks.js",
            "line": 117
        },
        "declaredIn": {
            "file": "lib/audio/server/audio-hot-plug-callbacks.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".afterUpdateCallback()",
            ".beforeDeleteCallback()",
            ".beforeUpdateCallback()",
            ".removeAudio()",
            ".updateAudio()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/audio/server/entities-config",
        "exportedFrom": {
            "file": "lib/audio/server/entities-config.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/audio/server/entities-translations",
        "exportedFrom": {
            "file": "lib/audio/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioEntityOverride",
        "importPath": "reldens/lib/audio/server/entities/audio-entity-override",
        "exportedFrom": {
            "file": "lib/audio/server/entities/audio-entity-override.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/audio/server/entities/audio-entity-override.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "AudioEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioManager",
        "importPath": "reldens/lib/audio/server/manager",
        "exportedFrom": {
            "file": "lib/audio/server/manager.js",
            "line": 318
        },
        "declaredIn": {
            "file": "lib/audio/server/manager.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".convertAudiosConfigJsonToObjects()",
            ".executeMessageActions()",
            ".findRoom()",
            ".hotPlugAudio()",
            ".hotPlugGlobalAudio()",
            ".hotPlugRoomAudio()",
            ".hotUnplugAudio()",
            ".hotUnplugGlobalAudio()",
            ".hotUnplugRoomAudio()",
            ".loadAudioCategories()",
            ".loadAudioPlayerConfig()",
            ".loadGlobalAudios()",
            ".loadRoomAudios()",
            ".setRepositories()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AudioPlugin",
        "importPath": "reldens/lib/audio/server/plugin",
        "exportedFrom": {
            "file": "lib/audio/server/plugin.js",
            "line": 84
        },
        "declaredIn": {
            "file": "lib/audio/server/plugin.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".constructor()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Cleaner",
        "importPath": "reldens/lib/chat/cleaner",
        "exportedFrom": {
            "file": "lib/chat/cleaner.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/chat/cleaner.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".cleanMessage()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatTabs",
        "importPath": "reldens/lib/chat/client/chat-tabs",
        "exportedFrom": {
            "file": "lib/chat/client/chat-tabs.js",
            "line": 157
        },
        "declaredIn": {
            "file": "lib/chat/client/chat-tabs.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateTabs()",
            ".constructor()",
            ".createTabs()",
            ".fetchTemplates()",
            ".isReady()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatUi",
        "importPath": "reldens/lib/chat/client/chat-ui",
        "exportedFrom": {
            "file": "lib/chat/client/chat-ui.js",
            "line": 703
        },
        "declaredIn": {
            "file": "lib/chat/client/chat-ui.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".appendWithScroll()",
            ".applyTextLimit()",
            ".attachNewMessage()",
            ".constructor()",
            ".createTabs()",
            ".createUi()",
            ".destroyTextSprite()",
            ".fetchPlayerByName()",
            ".getActiveBalloon()",
            ".globalSend()",
            ".hideChatBox()",
            ".hideIsTyping()",
            ".hideNotificationsBalloon()",
            ".isFocussedOnChatInput()",
            ".isValidMessage()",
            ".isValidMessageType()",
            ".isValidSnippetFromType()",
            ".isValidSnippetType()",
            ".processMessagesQueue()",
            ".sendChatMessage()",
            ".sendPrivateMessage()",
            ".setChatConfiguration()",
            ".setChatTypes()",
            ".setupKeyPressBehaviors()",
            ".setupOpenCloseButtons()",
            ".setupOverheadChatEvents()",
            ".setupSendButton()",
            ".showChatBox()",
            ".showIsTyping()",
            ".showNotificationBalloon()",
            ".showOverheadChat()",
            ".snippetsMessageTypes()",
            ".t()",
            ".translateFrom()",
            ".translateMessage()",
            ".updateOverheadTextPosition()",
            ".useGlobalRoom()",
            ".useGlobalRoomForMessage()",
            ".validMessageTypes()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesListener",
        "importPath": "reldens/lib/chat/client/messages-listener",
        "exportedFrom": {
            "file": "lib/chat/client/messages-listener.js",
            "line": 38
        },
        "declaredIn": {
            "file": "lib/chat/client/messages-listener.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".listenMessages()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatPlugin",
        "importPath": "reldens/lib/chat/client/plugin",
        "exportedFrom": {
            "file": "lib/chat/client/plugin.js",
            "line": 88
        },
        "declaredIn": {
            "file": "lib/chat/client/plugin.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setTranslations()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesHandler",
        "importPath": "reldens/lib/chat/client/templates-handler",
        "exportedFrom": {
            "file": "lib/chat/client/templates-handler.js",
            "line": 35
        },
        "declaredIn": {
            "file": "lib/chat/client/templates-handler.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".preloadTemplates()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatConst",
        "importPath": "reldens/lib/chat/constants",
        "exportedFrom": {
            "file": "lib/chat/constants.js",
            "line": 25
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "MessageFactory",
        "importPath": "reldens/lib/chat/message-factory",
        "exportedFrom": {
            "file": "lib/chat/message-factory.js",
            "line": 63
        },
        "declaredIn": {
            "file": "lib/chat/message-factory.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".create()",
            ".withDataToJson()"
        ],
        "graphInboundEdges": 11,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/chat/server/entities-config",
        "exportedFrom": {
            "file": "lib/chat/server/entities-config.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/chat/server/entities-translations",
        "exportedFrom": {
            "file": "lib/chat/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatEntityOverride",
        "importPath": "reldens/lib/chat/server/entities/chat-entity-override",
        "exportedFrom": {
            "file": "lib/chat/server/entities/chat-entity-override.js",
            "line": 45
        },
        "declaredIn": {
            "file": "lib/chat/server/entities/chat-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ChatEntity",
        "methods": [
            ".propertiesConfig()",
            ".updateProperty()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatMessageTypesEntityOverride",
        "importPath": "reldens/lib/chat/server/entities/chat-message-types-entity-override",
        "exportedFrom": {
            "file": "lib/chat/server/entities/chat-message-types-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/chat/server/entities/chat-message-types-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ChatMessageTypesEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GuestInvalidChangePoint",
        "importPath": "reldens/lib/chat/server/event-listener/guest-invalid-change-point",
        "exportedFrom": {
            "file": "lib/chat/server/event-listener/guest-invalid-change-point.js",
            "line": 39
        },
        "declaredIn": {
            "file": "lib/chat/server/event-listener/guest-invalid-change-point.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NpcSkills",
        "importPath": "reldens/lib/chat/server/event-listener/npc-skills",
        "exportedFrom": {
            "file": "lib/chat/server/event-listener/npc-skills.js",
            "line": 136
        },
        "declaredIn": {
            "file": "lib/chat/server/event-listener/npc-skills.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fetchSkillsByType()",
            ".listenAfterRunLogicEvent()",
            ".listenDamageEvent()",
            ".listenEvents()",
            ".listenModifiersEvent()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerSkills",
        "importPath": "reldens/lib/chat/server/event-listener/player-skills",
        "exportedFrom": {
            "file": "lib/chat/server/event-listener/player-skills.js",
            "line": 111
        },
        "declaredIn": {
            "file": "lib/chat/server/event-listener/player-skills.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".listenAfterRunLogicEvent()",
            ".listenDamageEvent()",
            ".listenEvents()",
            ".listenModifiersEvent()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatManager",
        "importPath": "reldens/lib/chat/server/manager",
        "exportedFrom": {
            "file": "lib/chat/server/manager.js",
            "line": 66
        },
        "declaredIn": {
            "file": "lib/chat/server/manager.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".saveMessage()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatMessageActions",
        "importPath": "reldens/lib/chat/server/message-actions",
        "exportedFrom": {
            "file": "lib/chat/server/message-actions.js",
            "line": 118
        },
        "declaredIn": {
            "file": "lib/chat/server/message-actions.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".chatAction()",
            ".clientJoinAction()",
            ".constructor()",
            ".executeMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessagesGuard",
        "importPath": "reldens/lib/chat/server/messages-guard",
        "exportedFrom": {
            "file": "lib/chat/server/messages-guard.js",
            "line": 30
        },
        "declaredIn": {
            "file": "lib/chat/server/messages-guard.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageDataMapper",
        "importPath": "reldens/lib/chat/server/messages/message-data-mapper",
        "exportedFrom": {
            "file": "lib/chat/server/messages/message-data-mapper.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/message-data-mapper.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".mapMessageWithData()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NpcDamageCallback",
        "importPath": "reldens/lib/chat/server/messages/npc-damage-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/npc-damage-callback.js",
            "line": 61
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/npc-damage-callback.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NpcDodgeCallback",
        "importPath": "reldens/lib/chat/server/messages/npc-dodge-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/npc-dodge-callback.js",
            "line": 61
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/npc-dodge-callback.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NpcModifiersCallback",
        "importPath": "reldens/lib/chat/server/messages/npc-modifiers-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/npc-modifiers-callback.js",
            "line": 60
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/npc-modifiers-callback.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerDamageCallback",
        "importPath": "reldens/lib/chat/server/messages/player-damage-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/player-damage-callback.js",
            "line": 62
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/player-damage-callback.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerDodgeCallback",
        "importPath": "reldens/lib/chat/server/messages/player-dodge-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/player-dodge-callback.js",
            "line": 62
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/player-dodge-callback.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerModifiersCallback",
        "importPath": "reldens/lib/chat/server/messages/player-modifiers-callback",
        "exportedFrom": {
            "file": "lib/chat/server/messages/player-modifiers-callback.js",
            "line": 62
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/player-modifiers-callback.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Validator",
        "importPath": "reldens/lib/chat/server/messages/validator",
        "exportedFrom": {
            "file": "lib/chat/server/messages/validator.js",
            "line": 36
        },
        "declaredIn": {
            "file": "lib/chat/server/messages/validator.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".validateMessage()"
        ],
        "graphInboundEdges": 7,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatPlugin",
        "importPath": "reldens/lib/chat/server/plugin",
        "exportedFrom": {
            "file": "lib/chat/server/plugin.js",
            "line": 87
        },
        "declaredIn": {
            "file": "lib/chat/server/plugin.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomChat",
        "importPath": "reldens/lib/chat/server/room-chat",
        "exportedFrom": {
            "file": "lib/chat/server/room-chat.js",
            "line": 218
        },
        "declaredIn": {
            "file": "lib/chat/server/room-chat.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RoomLogin",
        "methods": [
            ".broadcastLeaveMessage()",
            ".handleReceivedMessage()",
            ".onCreate()",
            ".onJoin()",
            ".onLeave()",
            ".sendGlobalMessage()",
            ".sendPrivateMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigManager",
        "importPath": "reldens/lib/config/client/config-manager",
        "exportedFrom": {
            "file": "lib/config/client/config-manager.js",
            "line": 32
        },
        "declaredIn": {
            "file": "lib/config/client/config-manager.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ConfigProcessor",
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "ConfigConst",
        "importPath": "reldens/lib/config/constants",
        "exportedFrom": {
            "file": "lib/config/constants.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigProcessor",
        "importPath": "reldens/lib/config/processor",
        "exportedFrom": {
            "file": "lib/config/processor.js",
            "line": 64
        },
        "declaredIn": {
            "file": "lib/config/processor.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".get()",
            ".getWithoutLogs()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/config/server/entities-config",
        "exportedFrom": {
            "file": "lib/config/server/entities-config.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/config/server/entities-translations",
        "exportedFrom": {
            "file": "lib/config/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigEntityOverride",
        "importPath": "reldens/lib/config/server/entities/config-entity-override",
        "exportedFrom": {
            "file": "lib/config/server/entities/config-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/config/server/entities/config-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ConfigEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigTypesEntityOverride",
        "importPath": "reldens/lib/config/server/entities/config-types-entity-override",
        "exportedFrom": {
            "file": "lib/config/server/entities/config-types-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/config/server/entities/config-types-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ConfigTypesEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigManager",
        "importPath": "reldens/lib/config/server/manager",
        "exportedFrom": {
            "file": "lib/config/server/manager.js",
            "line": 127
        },
        "declaredIn": {
            "file": "lib/config/server/manager.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ConfigProcessor",
        "methods": [
            ".constructor()",
            ".getParsedValue()",
            ".loadConfigurations()",
            ".loopObjectAndAssignProperty()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClientCoreFeatures",
        "importPath": "reldens/lib/features/client/config-client",
        "exportedFrom": {
            "file": "lib/features/client/config-client.js",
            "line": 26
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FeaturesManager",
        "importPath": "reldens/lib/features/client/manager",
        "exportedFrom": {
            "file": "lib/features/client/manager.js",
            "line": 67
        },
        "declaredIn": {
            "file": "lib/features/client/manager.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".loadFeatures()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PluginInterface",
        "importPath": "reldens/lib/features/plugin-interface",
        "exportedFrom": {
            "file": "lib/features/plugin-interface.js",
            "line": 32
        },
        "declaredIn": {
            "file": "lib/features/plugin-interface.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".setup()"
        ],
        "graphInboundEdges": 30,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "ServerCoreFeatures",
        "importPath": "reldens/lib/features/server/config-server",
        "exportedFrom": {
            "file": "lib/features/server/config-server.js",
            "line": 27
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/features/server/entities-config",
        "exportedFrom": {
            "file": "lib/features/server/entities-config.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/features/server/entities-translations",
        "exportedFrom": {
            "file": "lib/features/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FeaturesEntity",
        "importPath": "reldens/lib/features/server/entities/features-entity",
        "exportedFrom": {
            "file": "lib/features/server/entities/features-entity.js",
            "line": 55
        },
        "declaredIn": {
            "file": "lib/features/server/entities/features-entity.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "EntityProperties",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 1,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FeaturesEntityOverride",
        "importPath": "reldens/lib/features/server/entities/features-entity-override",
        "exportedFrom": {
            "file": "lib/features/server/entities/features-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/features/server/entities/features-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "FeaturesEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FeaturesManager",
        "importPath": "reldens/lib/features/server/manager",
        "exportedFrom": {
            "file": "lib/features/server/manager.js",
            "line": 96
        },
        "declaredIn": {
            "file": "lib/features/server/manager.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".loadFeatures()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SetupServerProperties",
        "importPath": "reldens/lib/features/server/setup-server-properties",
        "exportedFrom": {
            "file": "lib/features/server/setup-server-properties.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/features/server/setup-server-properties.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PropertiesHandler",
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FirebaseConnector",
        "importPath": "reldens/lib/firebase/client/connector",
        "exportedFrom": {
            "file": "lib/firebase/client/connector.js",
            "line": 245
        },
        "declaredIn": {
            "file": "lib/firebase/client/connector.js",
            "line": 27
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateLoginBehavior()",
            ".constructor()",
            ".createAuthButton()",
            ".fetchDefaultProviders()",
            ".initAuth()",
            ".setActiveUser()",
            ".setupAuthButtons()",
            ".signInWithProvider()",
            ".startFirebase()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FirebasePlugin",
        "importPath": "reldens/lib/firebase/server/plugin",
        "exportedFrom": {
            "file": "lib/firebase/server/plugin.js",
            "line": 110
        },
        "declaredIn": {
            "file": "lib/firebase/server/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".declareFirebaseConfigRequestHandler()",
            ".firebaseConfig()",
            ".listenEvents()",
            ".mapConfiguration()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AllowedFileTypes",
        "importPath": "reldens/lib/game/allowed-file-types",
        "exportedFrom": {
            "file": "lib/game/allowed-file-types.js",
            "line": 11
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AnimationsDefaultsMerger",
        "importPath": "reldens/lib/game/client/animations-defaults-merger",
        "exportedFrom": {
            "file": "lib/game/client/animations-defaults-merger.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/game/client/animations-defaults-merger.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".mergeDefaults()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomStateEntitiesManager",
        "importPath": "reldens/lib/game/client/communication/room-state-entities-manager",
        "exportedFrom": {
            "file": "lib/game/client/communication/room-state-entities-manager.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/game/client/communication/room-state-entities-manager.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            "._onCollectionEvent()",
            ".createManager()",
            ".onEntityAdd()",
            ".onEntityAddWithProperties()",
            ".onEntityAddWithPropertyCallbacks()",
            ".onEntityRemove()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "StateCallbacksManager",
        "importPath": "reldens/lib/game/client/communication/state-callbacks-manager",
        "exportedFrom": {
            "file": "lib/game/client/communication/state-callbacks-manager.js",
            "line": 86
        },
        "declaredIn": {
            "file": "lib/game/client/communication/state-callbacks-manager.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".dispose()",
            ".listen()",
            ".listenAll()",
            ".onAdd()",
            ".onChange()",
            ".onRemove()",
            ".wrap()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SpriteTextFactory",
        "importPath": "reldens/lib/game/client/engine/sprite-text-factory",
        "exportedFrom": {
            "file": "lib/game/client/engine/sprite-text-factory.js",
            "line": 76
        },
        "declaredIn": {
            "file": "lib/game/client/engine/sprite-text-factory.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".attachTextToSprite()",
            ".getTextPosition()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FPSCounter",
        "importPath": "reldens/lib/game/client/fps-counter",
        "exportedFrom": {
            "file": "lib/game/client/fps-counter.js",
            "line": 55
        },
        "declaredIn": {
            "file": "lib/game/client/fps-counter.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".start()",
            ".updateFPS()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameClient",
        "importPath": "reldens/lib/game/client/game-client",
        "exportedFrom": {
            "file": "lib/game/client/game-client.js",
            "line": 164
        },
        "declaredIn": {
            "file": "lib/game/client/game-client.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".connectToGlobalFeaturesRooms()",
            ".connectToGlobalGameRoom()",
            ".constructor()",
            ".joinOrCreate()",
            ".roomClient()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "GameDom",
        "importPath": "reldens/lib/game/client/game-dom",
        "exportedFrom": {
            "file": "lib/game/client/game-dom.js",
            "line": 226
        },
        "declaredIn": {
            "file": "lib/game/client/game-dom.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activeElement()",
            ".alertReload()",
            ".appendToElement()",
            ".constructor()",
            ".createElement()",
            ".createElementWithStyles()",
            ".emptyElement()",
            ".getDocument()",
            ".getElement()",
            ".getElements()",
            ".getJSON()",
            ".getWindow()",
            ".insideInput()",
            ".removeElement()",
            ".setElementStyles()",
            ".updateContent()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameEngine",
        "importPath": "reldens/lib/game/client/game-engine",
        "exportedFrom": {
            "file": "lib/game/client/game-engine.js",
            "line": 311
        },
        "declaredIn": {
            "file": "lib/game/client/game-engine.js",
            "line": 38
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Game",
        "methods": [
            ".centerSmallMapsCamera()",
            ".clearTarget()",
            ".constructor()",
            ".createPlayedTimeLabel()",
            ".generateTargetPlayedTime()",
            ".getCurrentScreenSize()",
            ".obtainPlayedTime()",
            ".parseTemplate()",
            ".setupTabTarget()",
            ".showFPS()",
            ".showTarget()",
            ".tabTarget()",
            ".targetDisplay()",
            ".updateGameSize()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameManager",
        "importPath": "reldens/lib/game/client/game-manager",
        "exportedFrom": {
            "file": "lib/game/client/game-manager.js",
            "line": 587
        },
        "declaredIn": {
            "file": "lib/game/client/game-manager.js",
            "line": 44
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateResponsiveBehavior()",
            ".beforeStartGame()",
            ".clientStart()",
            ".constructor()",
            ".createRoomEventsInstance()",
            ".currentPlayerName()",
            ".displayFormError()",
            ".emitActivatedRoom()",
            ".emitJoinedRoom()",
            ".getActiveScene()",
            ".getActiveScenePreloader()",
            ".getAnimationByKey()",
            ".getAppServerUrl()",
            ".getCurrentPlayer()",
            ".getCurrentPlayerAnimation()",
            ".getFeature()",
            ".getGameServerUrl()",
            ".getUiElement()",
            ".getUrlFromCurrentReferer()",
            ".handleGameRoomMessages()",
            ".handleLoginError()",
            ".handleLoginSuccess()",
            ".initEngine()",
            ".initializeClient()",
            ".joinFeaturesRooms()",
            ".joinGame()",
            ".mapFormDataToUserData()",
            ".reconnectGameClient()",
            ".setChangingScene()",
            ".setupCustomClientPlugin()",
            ".startGame()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClientStartHandler",
        "importPath": "reldens/lib/game/client/handlers/client-start-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/client-start-handler.js",
            "line": 57
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/client-start-handler.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clientStart()",
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ErrorsBlockHandler",
        "importPath": "reldens/lib/game/client/handlers/errors-block-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/errors-block-handler.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/errors-block-handler.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".reset()"
        ],
        "graphInboundEdges": 6,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ForgotPasswordFormHandler",
        "importPath": "reldens/lib/game/client/handlers/forgot-password-form-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/forgot-password-form-handler.js",
            "line": 73
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/forgot-password-form-handler.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateForgotPassword()",
            ".constructor()",
            ".displayForgotPassword()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "FullScreenHandler",
        "importPath": "reldens/lib/game/client/handlers/full-screen-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/full-screen-handler.js",
            "line": 70
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/full-screen-handler.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateFullScreen()",
            ".constructor()",
            ".exitFullScreen()",
            ".goFullScreen()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GuestFormHandler",
        "importPath": "reldens/lib/game/client/handlers/guest-form-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/guest-form-handler.js",
            "line": 76
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/guest-form-handler.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateGuest()",
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LoginFormHandler",
        "importPath": "reldens/lib/game/client/handlers/login-form-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/login-form-handler.js",
            "line": 60
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/login-form-handler.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateLogin()",
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RegistrationFormHandler",
        "importPath": "reldens/lib/game/client/handlers/registration-form-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/registration-form-handler.js",
            "line": 90
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/registration-form-handler.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateRegistration()",
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TermsAndConditionsHandler",
        "importPath": "reldens/lib/game/client/handlers/terms-and-conditions-handler",
        "exportedFrom": {
            "file": "lib/game/client/handlers/terms-and-conditions-handler.js",
            "line": 121
        },
        "declaredIn": {
            "file": "lib/game/client/handlers/terms-and-conditions-handler.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateTermsAndConditions()",
            ".constructor()",
            ".createOverlay()",
            ".hideOverlay()",
            ".showOverlay()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InstructionsUi",
        "importPath": "reldens/lib/game/client/instructions-ui",
        "exportedFrom": {
            "file": "lib/game/client/instructions-ui.js",
            "line": 63
        },
        "declaredIn": {
            "file": "lib/game/client/instructions-ui.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createInstructions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Joystick",
        "importPath": "reldens/lib/game/client/joystick",
        "exportedFrom": {
            "file": "lib/game/client/joystick.js",
            "line": 220
        },
        "declaredIn": {
            "file": "lib/game/client/joystick.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".applyMovement()",
            ".constructor()",
            ".handleMouseMove()",
            ".handleStop()",
            ".handleTouchMove()",
            ".position()",
            ".registerJoystickController()",
            ".updateDirection()",
            ".updateThumbPosition()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Minimap",
        "importPath": "reldens/lib/game/client/minimap",
        "exportedFrom": {
            "file": "lib/game/client/minimap.js",
            "line": 147
        },
        "declaredIn": {
            "file": "lib/game/client/minimap.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".addMinimapCircle()",
            ".constructor()",
            ".createMap()",
            ".createMinimapCamera()",
            ".createRoundCamera()",
            ".createRoundMap()",
            ".destroyMap()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MinimapUi",
        "importPath": "reldens/lib/game/client/minimap-ui",
        "exportedFrom": {
            "file": "lib/game/client/minimap-ui.js",
            "line": 115
        },
        "declaredIn": {
            "file": "lib/game/client/minimap-ui.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".awaitForCamera()",
            ".createMinimap()",
            ".hideMap()",
            ".showMap()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomEvents",
        "importPath": "reldens/lib/game/client/room-events",
        "exportedFrom": {
            "file": "lib/game/client/room-events.js",
            "line": 1044
        },
        "declaredIn": {
            "file": "lib/game/client/room-events.js",
            "line": 30
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateRoom()",
            ".addExistentPlayers()",
            ".addOtherPlayers()",
            ".checkAndCreateScene()",
            ".closeAllActiveDialogs()",
            ".closeBox()",
            ".constructor()",
            ".createCurrentPlayer()",
            ".createEngineOnScene()",
            ".createEngineScene()",
            ".createPlayerEngineInstance()",
            ".createPreloaderAndScene()",
            ".createPreloaderInstance()",
            ".createSceneInstance()",
            ".destroyPreviousScene()",
            ".displayGameOverBox()",
            ".gameOverReload()",
            ".getActiveScene()",
            ".hideGameOverBox()",
            ".initUi()",
            ".isAbnormalShutdown()",
            ".isCurrentPlayer()",
            ".isValidScene()",
            ".listenPlayerAndStateChanges()",
            ".playerBySessionIdFromState()",
            ".playerExists()",
            ".playersCountFromState()",
            ".playersKeysFromState()",
            ".playersOnAdd()",
            ".playersOnChange()",
            ".playersOnRemove()",
            ".removePlayerByKey()",
            ".roomOnLeave()",
            ".roomOnMessage()",
            ".runChangedScene()",
            ".runChangingScene()",
            ".runCustomMessageListener()",
            ".runGameOver()",
            ".runInitUi()",
            ".runReconnect()",
            ".runRevived()",
            ".runUpdateStats()",
            ".send()",
            ".showGameOverBox()",
            ".showPlayerName()",
            ".startEngineScene()",
            ".uiSetContent()",
            ".uiSetContentOptions()",
            ".uiSetTitle()",
            ".uiSetTitleAndContent()",
            ".updatePlayerStats()",
            ".updateSceneLabel()",
            ".updateStatsPanel()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SceneDynamic",
        "importPath": "reldens/lib/game/client/scene-dynamic",
        "exportedFrom": {
            "file": "lib/game/client/scene-dynamic.js",
            "line": 734
        },
        "declaredIn": {
            "file": "lib/game/client/scene-dynamic.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Scene",
        "methods": [
            ".addAndRemoveCapture()",
            ".addTilesetImages()",
            ".appendRowAndColumn()",
            ".availableControllersKeyCodes()",
            ".changeScene()",
            ".constructor()",
            ".create()",
            ".createControllerKeys()",
            ".createFloatingText()",
            ".createMinimapInstance()",
            ".createSceneMap()",
            ".disableContextMenu()",
            ".executeKeyDownBehavior()",
            ".executeKeyUpBehavior()",
            ".executePointerDownAction()",
            ".getAnimationByKey()",
            ".getObjectFromExtraData()",
            ".hasTilesetAnimations()",
            ".init()",
            ".interpolateBulletPosition()",
            ".interpolateObjectAnimationPosition()",
            ".interpolatePositions()",
            ".isBullet()",
            ".isCurrentPosition()",
            ".loopKeysAddListenerToElement()",
            ".movePlayerByPressedButtons()",
            ".processMissingImagesFromTilesets()",
            ".processObjectsPositionInterpolation()",
            ".processPlayersPositionInterpolation()",
            ".registerLayers()",
            ".registerTilesetAnimation()",
            ".setPropertiesFromConfig()",
            ".setupKeyboardAndPointerEvents()",
            ".update()",
            ".updatePointerObject()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScenePreloader",
        "importPath": "reldens/lib/game/client/scene-preloader",
        "exportedFrom": {
            "file": "lib/game/client/scene-preloader.js",
            "line": 735
        },
        "declaredIn": {
            "file": "lib/game/client/scene-preloader.js",
            "line": 34
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Scene",
        "methods": [
            ".constructor()",
            ".create()",
            ".createActionBox()",
            ".createAnimationWith()",
            ".createArrowAnimation()",
            ".createContent()",
            ".createControlsBox()",
            ".createFullScreenButton()",
            ".createGraphics()",
            ".createInstructionsBox()",
            ".createMiniMap()",
            ".createPlayerAnimations()",
            ".createPlayerBox()",
            ".createSceneLabelBox()",
            ".createSettingsUi()",
            ".createTargetUi()",
            ".createText()",
            ".createUi()",
            ".createUiScene()",
            ".endHold()",
            ".getUiConfig()",
            ".getUiElement()",
            ".getUiPosition()",
            ".hold()",
            ".onFileProgress()",
            ".onLoadComplete()",
            ".onLoadProgress()",
            ".preload()",
            ".preloadArrowPointer()",
            ".preloadMapImages()",
            ".preloadMapJson()",
            ".preloadPlayerDefaultSprite()",
            ".preloadUiScene()",
            ".preloadValidAssets()",
            ".registerControllers()",
            ".setupActionButtonInBox()",
            ".setupDefaultActionKey()",
            ".setupDirButtonInBox()",
            ".showLoadingProgressBar()",
            ".startHold()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SettingsUi",
        "importPath": "reldens/lib/game/client/settings-ui",
        "exportedFrom": {
            "file": "lib/game/client/settings-ui.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/game/client/settings-ui.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createSettings()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TileSetAnimation",
        "importPath": "reldens/lib/game/client/tileset-animation",
        "exportedFrom": {
            "file": "lib/game/client/tileset-animation.js",
            "line": 124
        },
        "declaredIn": {
            "file": "lib/game/client/tileset-animation.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clearTimeout()",
            ".constructor()",
            ".destroy()",
            ".register()",
            ".repeat()",
            ".setTimeout()",
            ".start()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UiFactory",
        "importPath": "reldens/lib/game/client/ui-factory",
        "exportedFrom": {
            "file": "lib/game/client/ui-factory.js",
            "line": 85
        },
        "declaredIn": {
            "file": "lib/game/client/ui-factory.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".create()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UserInterface",
        "importPath": "reldens/lib/game/client/user-interface",
        "exportedFrom": {
            "file": "lib/game/client/user-interface.js",
            "line": 206
        },
        "declaredIn": {
            "file": "lib/game/client/user-interface.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateCloseButton()",
            ".activateOpenButton()",
            ".constructor()",
            ".createBoxContent()",
            ".createDialogBox()",
            ".createUiElement()",
            ".listenEvents()",
            ".preloadUiElement()"
        ],
        "graphInboundEdges": 8,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameConst",
        "importPath": "reldens/lib/game/constants",
        "exportedFrom": {
            "file": "lib/game/constants.js",
            "line": 13
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "MimeTypes",
        "importPath": "reldens/lib/game/mime-types",
        "exportedFrom": {
            "file": "lib/game/mime-types.js",
            "line": 12
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PropertiesHandler",
        "importPath": "reldens/lib/game/properties-handler",
        "exportedFrom": {
            "file": "lib/game/properties-handler.js",
            "line": 50
        },
        "declaredIn": {
            "file": "lib/game/properties-handler.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".assignProperties()",
            ".constructor()",
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClientWrapper",
        "importPath": "reldens/lib/game/server/client-wrapper",
        "exportedFrom": {
            "file": "lib/game/server/client-wrapper.js",
            "line": 52
        },
        "declaredIn": {
            "file": "lib/game/server/client-wrapper.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".broadcast()",
            ".constructor()",
            ".send()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DataServerConfig",
        "importPath": "reldens/lib/game/server/data-server-config",
        "exportedFrom": {
            "file": "lib/game/server/data-server-config.js",
            "line": 90
        },
        "declaredIn": {
            "file": "lib/game/server/data-server-config.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createConnectionString()",
            ".prepareDbConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DataServerInitializer",
        "importPath": "reldens/lib/game/server/data-server-initializer",
        "exportedFrom": {
            "file": "lib/game/server/data-server-initializer.js",
            "line": 139
        },
        "declaredIn": {
            "file": "lib/game/server/data-server-initializer.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".initializeEntitiesAndDriver()",
            ".loadProjectPrismaClient()",
            ".rebindObjectionJsModelsToNewKnex()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EntitiesLoader",
        "importPath": "reldens/lib/game/server/entities-loader",
        "exportedFrom": {
            "file": "lib/game/server/entities-loader.js",
            "line": 309
        },
        "declaredIn": {
            "file": "lib/game/server/entities-loader.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".applyEntityOverrides()",
            ".discoverPluginFolders()",
            ".findGeneratedModelsPath()",
            ".loadEntities()",
            ".loadFromGeneratedEntities()",
            ".loadImplementationConfigOverride()",
            ".loadImplementationData()",
            ".loadPluginData()",
            ".loadPluginEntityOverrides()",
            ".loadPluginModelOverrides()",
            ".loadPluginTranslations()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EntityProperties",
        "importPath": "reldens/lib/game/server/entity-properties",
        "exportedFrom": {
            "file": "lib/game/server/entity-properties.js",
            "line": 38
        },
        "declaredIn": {
            "file": "lib/game/server/entity-properties.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".propertiesConfig()",
            ".propertiesDefinition()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ForgotPassword",
        "importPath": "reldens/lib/game/server/forgot-password",
        "exportedFrom": {
            "file": "lib/game/server/forgot-password.js",
            "line": 69
        },
        "declaredIn": {
            "file": "lib/game/server/forgot-password.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".defineRequestOnServerManagerApp()",
            ".resetResultContent()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GameServer",
        "importPath": "reldens/lib/game/server/game-server",
        "exportedFrom": {
            "file": "lib/game/server/game-server.js",
            "line": 91
        },
        "declaredIn": {
            "file": "lib/game/server/game-server.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Server",
        "methods": [
            ".attachMonitor()",
            ".attachUnsecureMonitor()",
            ".attacheSecuredMonitor()",
            ".constructor()",
            ".hasAuthentication()",
            ".runOnShutDown()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "HomepageLoader",
        "importPath": "reldens/lib/game/server/homepage-loader",
        "exportedFrom": {
            "file": "lib/game/server/homepage-loader.js",
            "line": 66
        },
        "declaredIn": {
            "file": "lib/game/server/homepage-loader.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createConfigFile()",
            ".loadContents()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Installer",
        "importPath": "reldens/lib/game/server/installer",
        "exportedFrom": {
            "file": "lib/game/server/installer.js",
            "line": 462
        },
        "declaredIn": {
            "file": "lib/game/server/installer.js",
            "line": 36
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".cleanAssets()",
            ".clearInstallStatus()",
            ".constructor()",
            ".encoding()",
            ".executeForEveryRequest()",
            ".executeInstallProcess()",
            ".fetchDefaults()",
            ".isInstalled()",
            ".normalizeFilePaths()",
            ".prepareSetup()",
            ".setCheckboxesMissingValues()",
            ".setDatabaseUrl()",
            ".setSelectedOptions()",
            ".setVariable()",
            ".updateInstallStatus()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EntitiesInstallation",
        "importPath": "reldens/lib/game/server/installer/entities-installation",
        "exportedFrom": {
            "file": "lib/game/server/installer/entities-installation.js",
            "line": 129
        },
        "declaredIn": {
            "file": "lib/game/server/installer/entities-installation.js",
            "line": 30
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".extractDbConfigFromServer()",
            ".generateEntities()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GenericDriverInstallation",
        "importPath": "reldens/lib/game/server/installer/generic-driver-installation",
        "exportedFrom": {
            "file": "lib/game/server/installer/generic-driver-installation.js",
            "line": 97
        },
        "declaredIn": {
            "file": "lib/game/server/installer/generic-driver-installation.js",
            "line": 29
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeInstallation()",
            ".executeRawQuery()",
            ".isMySqlClient()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PackagesInstallation",
        "importPath": "reldens/lib/game/server/installer/packages-installation",
        "exportedFrom": {
            "file": "lib/game/server/installer/packages-installation.js",
            "line": 183
        },
        "declaredIn": {
            "file": "lib/game/server/installer/packages-installation.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".checkAndInstallPackages()",
            ".constructor()",
            ".findVersionInLockFile()",
            ".isPackageInstalled()",
            ".processPackages()",
            ".unlinkAllPackages()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PrismaInstallation",
        "importPath": "reldens/lib/game/server/installer/prisma-installation",
        "exportedFrom": {
            "file": "lib/game/server/installer/prisma-installation.js",
            "line": 212
        },
        "declaredIn": {
            "file": "lib/game/server/installer/prisma-installation.js",
            "line": 38
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createPrismaClient()",
            ".executeInstallation()",
            ".generatePrismaSchema()",
            ".requireClient()",
            ".runSubprocessInstallation()",
            ".waitMilliseconds()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PrismaSubprocessWorker",
        "importPath": "reldens/lib/game/server/installer/prisma-subprocess-worker",
        "exportedFrom": {
            "file": "lib/game/server/installer/prisma-subprocess-worker.js",
            "line": 175
        },
        "declaredIn": {
            "file": "lib/game/server/installer/prisma-subprocess-worker.js",
            "line": 27
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".isMySqlClient()",
            ".migrationFiles()",
            ".processIncomingMessage()",
            ".sendErrorResponse()",
            ".sendSuccessResponse()",
            ".setDatabaseUrlEnvVar()",
            ".setupProcessHandlers()"
        ],
        "graphInboundEdges": 1,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ProjectFilesCreation",
        "importPath": "reldens/lib/game/server/installer/project-files-creation",
        "exportedFrom": {
            "file": "lib/game/server/installer/project-files-creation.js",
            "line": 95
        },
        "declaredIn": {
            "file": "lib/game/server/installer/project-files-creation.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createProjectFiles()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LoginManager",
        "importPath": "reldens/lib/game/server/login-manager",
        "exportedFrom": {
            "file": "lib/game/server/login-manager.js",
            "line": 711
        },
        "declaredIn": {
            "file": "lib/game/server/login-manager.js",
            "line": 35
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".applySelectedLocation()",
            ".broadcastDisconnectionMessage()",
            ".constructor()",
            ".createNewPlayer()",
            ".disconnectFromServer()",
            ".disconnectUserByLoginData()",
            ".disconnectUserFromEveryRoom()",
            ".getRoomNameById()",
            ".getStateObjectFromRoom()",
            ".hasValidUserName()",
            ".isValidGuestLogin()",
            ".listenEvents()",
            ".login()",
            ".mapPlayerStateRelation()",
            ".mapRoomsServers()",
            ".overrideWithGuestData()",
            ".prepareInitialState()",
            ".processForgotPassword()",
            ".processUserRequest()",
            ".register()",
            ".roleAuthenticationCallback()",
            ".sendForgotPasswordEmail()",
            ".setSceneOnPlayers()",
            ".updateLastLogin()",
            ".validateInitialState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Mailer",
        "importPath": "reldens/lib/game/server/mailer",
        "exportedFrom": {
            "file": "lib/game/server/mailer.js",
            "line": 147
        },
        "declaredIn": {
            "file": "lib/game/server/mailer.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".fetchServiceInstance()",
            ".isEnabled()",
            ".sendEmail()",
            ".setupTransporter()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NodemailerFactory",
        "importPath": "reldens/lib/game/server/mailer/nodemailer-factory",
        "exportedFrom": {
            "file": "lib/game/server/mailer/nodemailer-factory.js",
            "line": 95
        },
        "declaredIn": {
            "file": "lib/game/server/mailer/nodemailer-factory.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMail()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SendGridFactory",
        "importPath": "reldens/lib/game/server/mailer/sendgrid-factory",
        "exportedFrom": {
            "file": "lib/game/server/mailer/sendgrid-factory.js",
            "line": 74
        },
        "declaredIn": {
            "file": "lib/game/server/mailer/sendgrid-factory.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".sendMail()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ServerManager",
        "importPath": "reldens/lib/game/server/manager",
        "exportedFrom": {
            "file": "lib/game/server/manager.js",
            "line": 574
        },
        "declaredIn": {
            "file": "lib/game/server/manager.js",
            "line": 35
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".configGuestEmailDomain()",
            ".configRoomsServerUrl()",
            ".constructor()",
            ".createAppServer()",
            ".createGameServer()",
            ".createServers()",
            ".defineServerRooms()",
            ".enableServeStaticsAndHomePage()",
            ".fetchConfigServerFromEnvironmentVariables()",
            ".initializeConfigManager()",
            ".initializeConfiguration()",
            ".initializeFeaturesManager()",
            ".initializeLoginManager()",
            ".initializeMailer()",
            ".initializeManagers()",
            ".initializeRoomsManager()",
            ".initializeStorage()",
            ".initializeUsersManager()",
            ".serverBroadcast()",
            ".setupCustomServerPlugin()",
            ".showInfoLogs()",
            ".start()",
            ".startGameServerInstance()",
            ".validateServer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MapsLoader",
        "importPath": "reldens/lib/game/server/maps-loader",
        "exportedFrom": {
            "file": "lib/game/server/maps-loader.js",
            "line": 59
        },
        "declaredIn": {
            "file": "lib/game/server/maps-loader.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".reloadMaps()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActivePlayer",
        "importPath": "reldens/lib/game/server/memory/active-player",
        "exportedFrom": {
            "file": "lib/game/server/memory/active-player.js",
            "line": 67
        },
        "declaredIn": {
            "file": "lib/game/server/memory/active-player.js",
            "line": 31
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ActivePlayers",
        "importPath": "reldens/lib/game/server/memory/active-players",
        "exportedFrom": {
            "file": "lib/game/server/memory/active-players.js",
            "line": 239
        },
        "declaredIn": {
            "file": "lib/game/server/memory/active-players.js",
            "line": 30
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".add()",
            ".constructor()",
            ".fetchByRoomAndPlayerId()",
            ".fetchByRoomAndPlayerName()",
            ".fetchByRoomAndSessionId()",
            ".fetchByRoomAndUserName()",
            ".removeAllByUserId()",
            ".removeByRoomAndSessionId()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DriversMap",
        "importPath": "reldens/lib/game/server/storage/drivers-map",
        "exportedFrom": {
            "file": "lib/game/server/storage/drivers-map.js",
            "line": 21
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplateEngine",
        "importPath": "reldens/lib/game/server/template-engine",
        "exportedFrom": {
            "file": "lib/game/server/template-engine.js",
            "line": 45
        },
        "declaredIn": {
            "file": "lib/game/server/template-engine.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".render()",
            ".renderFile()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesToPathMapper",
        "importPath": "reldens/lib/game/server/templates-to-path-mapper",
        "exportedFrom": {
            "file": "lib/game/server/templates-to-path-mapper.js",
            "line": 38
        },
        "declaredIn": {
            "file": "lib/game/server/templates-to-path-mapper.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".map()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ThemeManager",
        "importPath": "reldens/lib/game/server/theme-manager",
        "exportedFrom": {
            "file": "lib/game/server/theme-manager.js",
            "line": 734
        },
        "declaredIn": {
            "file": "lib/game/server/theme-manager.js",
            "line": 27
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".assetPath()",
            ".buildClient()",
            ".buildCss()",
            ".buildInstaller()",
            ".buildSkeleton()",
            ".clearBundlerCache()",
            ".constructor()",
            ".copyAdmin()",
            ".copyAdminAssetsToDist()",
            ".copyAdminFiles()",
            ".copyAssetsToDist()",
            ".copyDefaultAssets()",
            ".copyDefaultTheme()",
            ".copyEnvFile()",
            ".copyGitignoreFile()",
            ".copyIndex()",
            ".copyKnexFile()",
            ".copyNew()",
            ".copyPackage()",
            ".copyServerFiles()",
            ".createApp()",
            ".createBrowserBundler()",
            ".createClientBundle()",
            ".createCssBundler()",
            ".distPathExists()",
            ".fullRebuild()",
            ".generateDefaultBrowserBundleOptions()",
            ".installDefaultTheme()",
            ".installSkeleton()",
            ".loadAndRenderTemplate()",
            ".paths()",
            ".permissionsCheck()",
            ".removeDist()",
            ".resetDist()",
            ".setupPaths()",
            ".themePathExists()",
            ".updatePackageJson()",
            ".validateOrCreateTheme()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TypeDeterminer",
        "importPath": "reldens/lib/game/type-determiner",
        "exportedFrom": {
            "file": "lib/game/type-determiner.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/game/type-determiner.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".isObject()",
            ".isPlayer()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AttributesPerLevelImporter",
        "importPath": "reldens/lib/import/server/attributes-per-level-importer",
        "exportedFrom": {
            "file": "lib/import/server/attributes-per-level-importer.js",
            "line": 203
        },
        "declaredIn": {
            "file": "lib/import/server/attributes-per-level-importer.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createPlayerStats()",
            ".createPlayerStatsPerClassPath()",
            ".createPlayerStatsPerLevelAndClassPath()",
            ".createStats()",
            ".createStatsModifiers()",
            ".fetchLevelByClassPathKey()",
            ".fetchStatIdByKey()",
            ".import()",
            ".validRepositories()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClassPathsImporter",
        "importPath": "reldens/lib/import/server/class-paths-importer",
        "exportedFrom": {
            "file": "lib/import/server/class-paths-importer.js",
            "line": 129
        },
        "declaredIn": {
            "file": "lib/import/server/class-paths-importer.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createSubClasses()",
            ".import()",
            ".preAppendRaceToAbilities()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MapsImporter",
        "importPath": "reldens/lib/import/server/maps-importer",
        "exportedFrom": {
            "file": "lib/import/server/maps-importer.js",
            "line": 632
        },
        "declaredIn": {
            "file": "lib/import/server/maps-importer.js",
            "line": 26
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".copyExtrudedFiles()",
            ".copyFiles()",
            ".createRoomByMapTitle()",
            ".createRooms()",
            ".createRoomsChangePoints()",
            ".createRoomsReturnPoints()",
            ".fetchReturnPointsFromLayer()",
            ".fetchRoomTitle()",
            ".import()",
            ".loadMapByTitle()",
            ".loadValidMaps()",
            ".provideRoomByName()",
            ".saveReturnPoint()",
            ".setImportFilesPath()",
            ".setupRepositories()",
            ".validRepositories()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsImporter",
        "importPath": "reldens/lib/import/server/objects-importer",
        "exportedFrom": {
            "file": "lib/import/server/objects-importer.js",
            "line": 524
        },
        "declaredIn": {
            "file": "lib/import/server/objects-importer.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".convertToJsonString()",
            ".createObjectAnimations()",
            ".createObjectAssets()",
            ".createObjectExperienceReward()",
            ".createObjectForRoom()",
            ".createObjectPerRoom()",
            ".createObjectRespawn()",
            ".createObjectStats()",
            ".enrichObjectData()",
            ".fetchAttributes()",
            ".fetchClassTypeId()",
            ".fetchExperience()",
            ".fetchRooms()",
            ".fetchRoomsBy()",
            ".import()",
            ".loadDataFromJsonFile()",
            ".loadObjectTypes()",
            ".loadStats()",
            ".setupRepositories()",
            ".validRepositories()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayersExperiencePerLevelImporter",
        "importPath": "reldens/lib/import/server/players-experience-per-level-importer",
        "exportedFrom": {
            "file": "lib/import/server/players-experience-per-level-importer.js",
            "line": 47
        },
        "declaredIn": {
            "file": "lib/import/server/players-experience-per-level-importer.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".import()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SkillsImporter",
        "importPath": "reldens/lib/import/server/skills-importer",
        "exportedFrom": {
            "file": "lib/import/server/skills-importer.js",
            "line": 480
        },
        "declaredIn": {
            "file": "lib/import/server/skills-importer.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createSkill()",
            ".deleteSkill()",
            ".import()",
            ".loadClassPaths()",
            ".loadExistentSkill()",
            ".loadOperationTypes()",
            ".loadSkillTypes()",
            ".loadTargetOptions()",
            ".removeAllSKills()",
            ".setupRepositories()",
            ".updateAnimations()",
            ".updateClassPathLevelSkill()",
            ".updateObjectSkill()",
            ".updateOwnerConditions()",
            ".updateOwnerEffects()",
            ".updateSkill()",
            ".updateSkillAssociations()",
            ".updateSkillAttack()",
            ".updateSkillPhysicalData()",
            ".updateTargetEffects()",
            ".upsertSkill()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ExtrudeTileset",
        "importPath": "reldens/lib/import/server/tile-extruder",
        "exportedFrom": {
            "file": "lib/import/server/tile-extruder.js",
            "line": 108
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TradeTargetAction",
        "importPath": "reldens/lib/inventory/client/exchange/trade-target-action",
        "exportedFrom": {
            "file": "lib/inventory/client/exchange/trade-target-action.js",
            "line": 66
        },
        "declaredIn": {
            "file": "lib/inventory/client/exchange/trade-target-action.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".showTargetExchangeAction()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryReceiver",
        "importPath": "reldens/lib/inventory/client/inventory-receiver",
        "exportedFrom": {
            "file": "lib/inventory/client/inventory-receiver.js",
            "line": 180
        },
        "declaredIn": {
            "file": "lib/inventory/client/inventory-receiver.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Receiver",
        "methods": [
            ".constructor()",
            ".createItemSprites()",
            ".destroyAnimation()",
            ".extractTargetId()",
            ".onExecuting()",
            ".playSpriteAnimation()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryUi",
        "importPath": "reldens/lib/inventory/client/inventory-ui",
        "exportedFrom": {
            "file": "lib/inventory/client/inventory-ui.js",
            "line": 50
        },
        "declaredIn": {
            "file": "lib/inventory/client/inventory-ui.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "UiFactory",
        "methods": [
            ".createUi()",
            ".inventoryVisibility()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryPlugin",
        "importPath": "reldens/lib/inventory/client/plugin",
        "exportedFrom": {
            "file": "lib/inventory/client/plugin.js",
            "line": 612
        },
        "declaredIn": {
            "file": "lib/inventory/client/plugin.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".activateGroupAndEquipmentUi()",
            ".activateInventoryUi()",
            ".clickedBox()",
            ".createGroupBox()",
            ".createInventoryInstance()",
            ".createItemBox()",
            ".displayItem()",
            ".displayItemInGroups()",
            ".getEquipContent()",
            ".getGroupById()",
            ".getUsableContent()",
            ".isEquipment()",
            ".isEquipped()",
            ".isUsable()",
            ".listenEvents()",
            ".listenInventoryEvents()",
            ".onPlayerAdd()",
            ".onPreloadUiScene()",
            ".resetEquippedItemsDisplay()",
            ".setListener()",
            ".setTradeUi()",
            ".setTranslations()",
            ".setup()",
            ".setupButtonsActions()",
            ".sortGroups()",
            ".updateEquipmentStatus()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesHandler",
        "importPath": "reldens/lib/inventory/client/templates-handler",
        "exportedFrom": {
            "file": "lib/inventory/client/templates-handler.js",
            "line": 40
        },
        "declaredIn": {
            "file": "lib/inventory/client/templates-handler.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".preloadTemplates()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TradeItemsHelper",
        "importPath": "reldens/lib/inventory/client/trade-items-helper",
        "exportedFrom": {
            "file": "lib/inventory/client/trade-items-helper.js",
            "line": 37
        },
        "declaredIn": {
            "file": "lib/inventory/client/trade-items-helper.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createItemInstance()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TradeMessageHandler",
        "importPath": "reldens/lib/inventory/client/trade-message-handler",
        "exportedFrom": {
            "file": "lib/inventory/client/trade-message-handler.js",
            "line": 564
        },
        "declaredIn": {
            "file": "lib/inventory/client/trade-message-handler.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateConfirmButtonAction()",
            ".activateItemsBoxActions()",
            ".assignRemoveActions()",
            ".constructor()",
            ".createConfirmItemsBox()",
            ".createReceivingItemsBox()",
            ".createTradeActionContent()",
            ".createTradeActionRemove()",
            ".createTradeContainer()",
            ".createTradeItemBox()",
            ".createTradeUi()",
            ".playerConfirmedLabel()",
            ".showTradeBox()",
            ".showTradeRequest()",
            ".updateContents()",
            ".updateItemsList()",
            ".updateMyExchangeData()",
            ".updateTraderExchangeData()",
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TradeMessageListener",
        "importPath": "reldens/lib/inventory/client/trade-message-listener",
        "exportedFrom": {
            "file": "lib/inventory/client/trade-message-listener.js",
            "line": 39
        },
        "declaredIn": {
            "file": "lib/inventory/client/trade-message-listener.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryConst",
        "importPath": "reldens/lib/inventory/constants",
        "exportedFrom": {
            "file": "lib/inventory/constants.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/inventory/server/entities-config",
        "exportedFrom": {
            "file": "lib/inventory/server/entities-config.js",
            "line": 11
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/inventory/server/entities-translations",
        "exportedFrom": {
            "file": "lib/inventory/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ItemsGroupEntityOverride",
        "importPath": "reldens/lib/inventory/server/entities/items-group-entity-override",
        "exportedFrom": {
            "file": "lib/inventory/server/entities/items-group-entity-override.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/inventory/server/entities/items-group-entity-override.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ItemsGroupEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ItemsInventoryEntityOverride",
        "importPath": "reldens/lib/inventory/server/entities/items-inventory-entity-override",
        "exportedFrom": {
            "file": "lib/inventory/server/entities/items-inventory-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/inventory/server/entities/items-inventory-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ItemsInventoryEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ItemsItemEntityOverride",
        "importPath": "reldens/lib/inventory/server/entities/items-item-entity-override",
        "exportedFrom": {
            "file": "lib/inventory/server/entities/items-item-entity-override.js",
            "line": 36
        },
        "declaredIn": {
            "file": "lib/inventory/server/entities/items-item-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ItemsItemEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerProcessor",
        "importPath": "reldens/lib/inventory/server/exchange/player-processor",
        "exportedFrom": {
            "file": "lib/inventory/server/exchange/player-processor.js",
            "line": 51
        },
        "declaredIn": {
            "file": "lib/inventory/server/exchange/player-processor.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Processor",
        "methods": [
            ".confirm()",
            ".disconfirm()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Processor",
        "importPath": "reldens/lib/inventory/server/exchange/processor",
        "exportedFrom": {
            "file": "lib/inventory/server/exchange/processor.js",
            "line": 95
        },
        "declaredIn": {
            "file": "lib/inventory/server/exchange/processor.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".add()",
            ".confirm()",
            ".init()",
            ".remove()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GroupHotPlugCallbacks",
        "importPath": "reldens/lib/inventory/server/group-hot-plug-callbacks",
        "exportedFrom": {
            "file": "lib/inventory/server/group-hot-plug-callbacks.js",
            "line": 93
        },
        "declaredIn": {
            "file": "lib/inventory/server/group-hot-plug-callbacks.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".afterUpdateCallback()",
            ".beforeDeleteCallback()",
            ".broadcastGroupsUpdate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GroupsDataRemover",
        "importPath": "reldens/lib/inventory/server/groups-data-remover",
        "exportedFrom": {
            "file": "lib/inventory/server/groups-data-remover.js",
            "line": 68
        },
        "declaredIn": {
            "file": "lib/inventory/server/groups-data-remover.js",
            "line": 10
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".removeGroup()",
            ".removeGroupById()",
            ".removeGroupsList()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ItemsFactory",
        "importPath": "reldens/lib/inventory/server/items-factory",
        "exportedFrom": {
            "file": "lib/inventory/server/items-factory.js",
            "line": 98
        },
        "declaredIn": {
            "file": "lib/inventory/server/items-factory.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".enrichWithModifiers()",
            ".fromModel()",
            ".fromModelsList()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryMessageActions",
        "importPath": "reldens/lib/inventory/server/message-actions",
        "exportedFrom": {
            "file": "lib/inventory/server/message-actions.js",
            "line": 394
        },
        "declaredIn": {
            "file": "lib/inventory/server/message-actions.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".closeTradeAction()",
            ".executeEquipAction()",
            ".executeMessageActions()",
            ".extractExchangeItemsDataFromInventory()",
            ".fetchClientBySessionId()",
            ".fetchExchangeStarterClient()",
            ".isMyTrade()",
            ".mapSubAction()",
            ".runTradeAction()",
            ".sendCloseUIMessage()",
            ".sendExchangeUpdate()",
            ".startExchange()",
            ".tryExchangeStart()",
            ".unEquipPrevious()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ModelsManager",
        "importPath": "reldens/lib/inventory/server/models-manager",
        "exportedFrom": {
            "file": "lib/inventory/server/models-manager.js",
            "line": 147
        },
        "declaredIn": {
            "file": "lib/inventory/server/models-manager.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".deleteItem()",
            ".getEntity()",
            ".loadOwnerItems()",
            ".onChangedModifiers()",
            ".onEquipItem()",
            ".onExecutedItem()",
            ".onUnequipItem()",
            ".saveNewItem()",
            ".updateItemQuantity()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InventoryPlugin",
        "importPath": "reldens/lib/inventory/server/plugin",
        "exportedFrom": {
            "file": "lib/inventory/server/plugin.js",
            "line": 81
        },
        "declaredIn": {
            "file": "lib/inventory/server/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "StorageObserver",
        "importPath": "reldens/lib/inventory/server/storage-observer",
        "exportedFrom": {
            "file": "lib/inventory/server/storage-observer.js",
            "line": 186
        },
        "declaredIn": {
            "file": "lib/inventory/server/storage-observer.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".listenEvents()",
            ".loadOwnerItems()",
            ".processAndStoreItemExecutionData()",
            ".removeItem()",
            ".saveEquippedItemAsActive()",
            ".saveNewItem()",
            ".saveUnequippedItemAsInactive()",
            ".updateAppliedModifiers()",
            ".updateItemQuantity()",
            ".updateRevertedModifiers()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerDeathSubscriber",
        "importPath": "reldens/lib/inventory/server/subscribers/player-death-subscriber",
        "exportedFrom": {
            "file": "lib/inventory/server/subscribers/player-death-subscriber.js",
            "line": 276
        },
        "declaredIn": {
            "file": "lib/inventory/server/subscribers/player-death-subscriber.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createDropItem()",
            ".createDropObjectData()",
            ".dropPlayerItems()",
            ".extractRandomDropItems()",
            ".fetchDroppableItems()",
            ".mapDropsData()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerSubscriber",
        "importPath": "reldens/lib/inventory/server/subscribers/player-subscriber",
        "exportedFrom": {
            "file": "lib/inventory/server/subscribers/player-subscriber.js",
            "line": 67
        },
        "declaredIn": {
            "file": "lib/inventory/server/subscribers/player-subscriber.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createPlayerInventory()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ServerSubscriber",
        "importPath": "reldens/lib/inventory/server/subscribers/server-subscriber",
        "exportedFrom": {
            "file": "lib/inventory/server/subscribers/server-subscriber.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/inventory/server/subscribers/server-subscriber.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".initializeInventory()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AnimationEngine",
        "importPath": "reldens/lib/objects/client/animation-engine",
        "exportedFrom": {
            "file": "lib/objects/client/animation-engine.js",
            "line": 370
        },
        "declaredIn": {
            "file": "lib/objects/client/animation-engine.js",
            "line": 57
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".autoPlayAnimation()",
            ".automaticDestroyOnComplete()",
            ".calculateAnimPosition()",
            ".constructor()",
            ".createAnimation()",
            ".createObjectAnimations()",
            ".enableAutoRestart()",
            ".enableInteraction()",
            ".getPosition()",
            ".runAnimation()",
            ".updateObjectAndSpritePositions()",
            ".updateObjectDepth()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "DropsMessageListener",
        "importPath": "reldens/lib/objects/client/drops-message-listener",
        "exportedFrom": {
            "file": "lib/objects/client/drops-message-listener.js",
            "line": 179
        },
        "declaredIn": {
            "file": "lib/objects/client/drops-message-listener.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createDropAnimation()",
            ".getRewardFrameConfig()",
            ".getSpritesheetPath()",
            ".listenMessages()",
            ".loadObjects()",
            ".loadSpritesheet()",
            ".removeDropById()",
            ".validateParams()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsMessageListener",
        "importPath": "reldens/lib/objects/client/objects-message-listener",
        "exportedFrom": {
            "file": "lib/objects/client/objects-message-listener.js",
            "line": 58
        },
        "declaredIn": {
            "file": "lib/objects/client/objects-message-listener.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsPlugin",
        "importPath": "reldens/lib/objects/client/plugin",
        "exportedFrom": {
            "file": "lib/objects/client/plugin.js",
            "line": 607
        },
        "declaredIn": {
            "file": "lib/objects/client/plugin.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".createAnimationFromAnimData()",
            ".createBulletSprite()",
            ".createDynamicAnimations()",
            ".determineAutoStartAnimation()",
            ".fetchAvailableAnimationKey()",
            ".fetchExistentBody()",
            ".listenEvents()",
            ".listenMessages()",
            ".logObjectBodyUpdate()",
            ".moveSpritesObjects()",
            ".objectBattleEndAnimation()",
            ".playDeathAnimation()",
            ".prepareObjectsUi()",
            ".setAddBodyCallback()",
            ".setListener()",
            ".setOnChangeBodyCallback()",
            ".setRemoveBodyCallback()",
            ".setTranslations()",
            ".setVisibility()",
            ".setup()",
            ".startObjectAnimation()",
            ".updateAnimationPosition()",
            ".updateAnimationVisibility()",
            ".updateBodyProperties()",
            ".updateBulletBodyPosition()",
            ".updateObjectsAnimations()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TraderObjectUi",
        "importPath": "reldens/lib/objects/client/trader-object-ui",
        "exportedFrom": {
            "file": "lib/objects/client/trader-object-ui.js",
            "line": 567
        },
        "declaredIn": {
            "file": "lib/objects/client/trader-object-ui.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateConfirmButtonAction()",
            ".activateItemsBoxActions()",
            ".assignRemoveActions()",
            ".constructor()",
            ".createConfirmItemsBox()",
            ".createTradeActionContent()",
            ".createTradeActionRemove()",
            ".createTradeContainer()",
            ".createTradeItemBox()",
            ".createTradeRequirementsContent()",
            ".createTradeRewardsContent()",
            ".fetchItemLabelByUid()",
            ".fetchItemRequirements()",
            ".fetchItemRewards()",
            ".mapInventoryKeyFromAction()",
            ".setConfirmMessages()",
            ".updateContents()",
            ".updateExchangeData()",
            ".updateItemsList()",
            ".validate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsConst",
        "importPath": "reldens/lib/objects/constants",
        "exportedFrom": {
            "file": "lib/objects/constants.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/objects/server/entities-config",
        "exportedFrom": {
            "file": "lib/objects/server/entities-config.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/objects/server/entities-translations",
        "exportedFrom": {
            "file": "lib/objects/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsEntityOverride",
        "importPath": "reldens/lib/objects/server/entities/objects-entity-override",
        "exportedFrom": {
            "file": "lib/objects/server/entities/objects-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/objects/server/entities/objects-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ObjectsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsClassTypeHandler",
        "importPath": "reldens/lib/objects/server/handler/objects-class-type",
        "exportedFrom": {
            "file": "lib/objects/server/handler/objects-class-type.js",
            "line": 78
        },
        "declaredIn": {
            "file": "lib/objects/server/handler/objects-class-type.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".loadObjectClassTypes()",
            ".setOnConfig()",
            ".setupRepository()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsManager",
        "importPath": "reldens/lib/objects/server/manager",
        "exportedFrom": {
            "file": "lib/objects/server/manager.js",
            "line": 287
        },
        "declaredIn": {
            "file": "lib/objects/server/manager.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".attachToAnimations()",
            ".attachToMessagesListeners()",
            ".constructor()",
            ".enrichWithMultipleAnimationsData()",
            ".generateObjectFromObjectData()",
            ".generateObjects()",
            ".getObjectData()",
            ".loadObjectsByRoomId()",
            ".prepareAssetsPreload()",
            ".prepareInitialStats()",
            ".removeFromPreloadAssetsArray()",
            ".removeObjectData()",
            ".runAdditionalSetup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectTypes",
        "importPath": "reldens/lib/objects/server/object/object-types",
        "exportedFrom": {
            "file": "lib/objects/server/object/object-types.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectTypesClasses",
        "importPath": "reldens/lib/objects/server/object/object-types-classes",
        "exportedFrom": {
            "file": "lib/objects/server/object/object-types-classes.js",
            "line": 16
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AnimationObject",
        "importPath": "reldens/lib/objects/server/object/type/animation-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/animation-object.js",
            "line": 147
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/animation-object.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "BaseObject",
        "methods": [
            ".animationData()",
            ".chaseBody()",
            ".constructor()",
            ".onAction()",
            ".onHit()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BaseObject",
        "importPath": "reldens/lib/objects/server/object/type/base-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/base-object.js",
            "line": 123
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/base-object.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "InteractionArea",
        "methods": [
            ".constructor()",
            ".eventUniqueKey()",
            ".mapClientParams()",
            ".mapPrivateParams()",
            ".runAdditionalSetup()",
            ".setDefaultProperties()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DropObject",
        "importPath": "reldens/lib/objects/server/object/type/drop-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/drop-object.js",
            "line": 66
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/drop-object.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "AnimationObject",
        "methods": [
            ".constructor()",
            ".onHit()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EnemyObject",
        "importPath": "reldens/lib/objects/server/object/type/enemy-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/enemy-object.js",
            "line": 522
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/enemy-object.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "NpcObject",
        "methods": [
            ".addSkillByKey()",
            ".attachAggressiveBehaviorEvent()",
            ".constructor()",
            ".executePhysicalSkill()",
            ".getBattleEndEvent()",
            ".getPosition()",
            ".getSkillExtraData()",
            ".onBattleEnd()",
            ".onHit()",
            ".playerIsOnInteractionArea()",
            ".respawn()",
            ".restoreObject()",
            ".restoreOnTimeOut()",
            ".runAdditionalRespawnSetup()",
            ".setActiveObjectState()",
            ".setupActions()",
            ".setupAggressiveBehavior()",
            ".setupDefaultAction()",
            ".startBattleWithPlayer()",
            ".updateBodyPositionInitialData()",
            ".waitForPlayersToEnterRespawnArea()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MultipleObject",
        "importPath": "reldens/lib/objects/server/object/type/multiple-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/multiple-object.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/multiple-object.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "BaseObject",
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "NpcObject",
        "importPath": "reldens/lib/objects/server/object/type/npc-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/npc-object.js",
            "line": 141
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/npc-object.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "AnimationObject",
        "methods": [
            ".constructor()",
            ".executeMessageActions()",
            ".isObjectInteractionMessage()",
            ".isObjectOptionInteractionMessage()",
            ".isValidId()",
            ".isValidOptionIndexValue()",
            ".outOfReachClose()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": true
    },
    {
        "name": "TraderObject",
        "importPath": "reldens/lib/objects/server/object/type/trader-object",
        "exportedFrom": {
            "file": "lib/objects/server/object/type/trader-object.js",
            "line": 363
        },
        "declaredIn": {
            "file": "lib/objects/server/object/type/trader-object.js",
            "line": 26
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "NpcObject",
        "methods": [
            ".constructor()",
            ".createObjectInventory()",
            ".enrichWithLoadedRequirements()",
            ".enrichWithLoadedRewards()",
            ".executeMessageActions()",
            ".initializeTransaction()",
            ".mapInventoryKeyFromAction()",
            ".mapSubAction()",
            ".processSubAction()",
            ".runAdditionalSetup()",
            ".shouldCancelExchange()",
            ".transactionError()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsPlugin",
        "importPath": "reldens/lib/objects/server/plugin",
        "exportedFrom": {
            "file": "lib/objects/server/plugin.js",
            "line": 51
        },
        "declaredIn": {
            "file": "lib/objects/server/plugin.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerEnginePrediction",
        "importPath": "reldens/lib/prediction/client/player-engine-prediction",
        "exportedFrom": {
            "file": "lib/prediction/client/player-engine-prediction.js",
            "line": 160
        },
        "declaredIn": {
            "file": "lib/prediction/client/player-engine-prediction.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PlayerEngine",
        "methods": [
            ".constructor()",
            ".down()",
            ".left()",
            ".moveToPointer()",
            ".reconcilePosition()",
            ".reconciliationByTimeOutMs()",
            ".reconciliationTimeOutCallBack()",
            ".right()",
            ".stop()",
            ".up()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PredictionPlugin",
        "importPath": "reldens/lib/prediction/client/plugin",
        "exportedFrom": {
            "file": "lib/prediction/client/plugin.js",
            "line": 77
        },
        "declaredIn": {
            "file": "lib/prediction/client/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PredictionWorldCreator",
        "importPath": "reldens/lib/prediction/client/prediction-world-creator",
        "exportedFrom": {
            "file": "lib/prediction/client/prediction-world-creator.js",
            "line": 156
        },
        "declaredIn": {
            "file": "lib/prediction/client/prediction-world-creator.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".cloneMapJson()",
            ".createSceneWorld()",
            ".createWorldInstance()",
            ".findValidLayers()",
            ".updateBodyStateOverride()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomEventsOverride",
        "importPath": "reldens/lib/prediction/client/room-events-override",
        "exportedFrom": {
            "file": "lib/prediction/client/room-events-override.js",
            "line": 94
        },
        "declaredIn": {
            "file": "lib/prediction/client/room-events-override.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createCurrentPlayerOverride()",
            ".createPlayerEngineInstanceOverride()",
            ".createSceneInstanceOverride()",
            ".playerOnChangeOverride()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/respawn/server/entities-config",
        "exportedFrom": {
            "file": "lib/respawn/server/entities-config.js",
            "line": 13
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/respawn/server/entities-translations",
        "exportedFrom": {
            "file": "lib/respawn/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RespawnEntityOverride",
        "importPath": "reldens/lib/respawn/server/entities/respawn-entity-override",
        "exportedFrom": {
            "file": "lib/respawn/server/entities/respawn-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/respawn/server/entities/respawn-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RespawnEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RespawnPlugin",
        "importPath": "reldens/lib/respawn/server/plugin",
        "exportedFrom": {
            "file": "lib/respawn/server/plugin.js",
            "line": 152
        },
        "declaredIn": {
            "file": "lib/respawn/server/plugin.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".createRespawnAreasObjectsInstances()",
            ".createRespawnObjectsInstances()",
            ".createRespawnObjectsInstancesInState()",
            ".createRoomRespawnArea()",
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomRespawn",
        "importPath": "reldens/lib/respawn/server/room-respawn",
        "exportedFrom": {
            "file": "lib/respawn/server/room-respawn.js",
            "line": 268
        },
        "declaredIn": {
            "file": "lib/respawn/server/room-respawn.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateObjectsRespawn()",
            ".constructor()",
            ".createNewObjectInstance()",
            ".generateObjectIndex()",
            ".getObjectAssets()",
            ".getRandomTile()",
            ".parseMapForRespawnTiles()",
            ".removeObjectPreviousUsedTile()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageHandler",
        "importPath": "reldens/lib/rewards/client/message-handler",
        "exportedFrom": {
            "file": "lib/rewards/client/message-handler.js",
            "line": 243
        },
        "declaredIn": {
            "file": "lib/rewards/client/message-handler.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateRewardsAction()",
            ".constructor()",
            ".createRewardsUi()",
            ".createUpdateContent()",
            ".enrichForDisplay()",
            ".mapItemsText()",
            ".showAcceptedReward()",
            ".showRewardsNotificationBalloon()",
            ".updateRewardsBox()",
            ".validate()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageListener",
        "importPath": "reldens/lib/rewards/client/message-listener",
        "exportedFrom": {
            "file": "lib/rewards/client/message-listener.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/rewards/client/message-listener.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()",
            ".handleRewardsMessage()",
            ".isRewardsMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageProcessor",
        "importPath": "reldens/lib/rewards/client/messages-processor",
        "exportedFrom": {
            "file": "lib/rewards/client/messages-processor.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/rewards/client/messages-processor.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".processRewardsMessagesQueue()"
        ],
        "graphInboundEdges": 1,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsPlugin",
        "importPath": "reldens/lib/rewards/client/plugin",
        "exportedFrom": {
            "file": "lib/rewards/client/plugin.js",
            "line": 98
        },
        "declaredIn": {
            "file": "lib/rewards/client/plugin.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".listenMessages()",
            ".setTranslations()",
            ".setup()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PreloaderHandler",
        "importPath": "reldens/lib/rewards/client/preloader-handler",
        "exportedFrom": {
            "file": "lib/rewards/client/preloader-handler.js",
            "line": 26
        },
        "declaredIn": {
            "file": "lib/rewards/client/preloader-handler.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".loadContents()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsConst",
        "importPath": "reldens/lib/rewards/constants",
        "exportedFrom": {
            "file": "lib/rewards/constants.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "GiveRewardAction",
        "importPath": "reldens/lib/rewards/server/actions/give-reward-action",
        "exportedFrom": {
            "file": "lib/rewards/server/actions/give-reward-action.js",
            "line": 26
        },
        "declaredIn": {
            "file": "lib/rewards/server/actions/give-reward-action.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "AddItemToInventory",
        "importPath": "reldens/lib/rewards/server/add-item-to-inventory",
        "exportedFrom": {
            "file": "lib/rewards/server/add-item-to-inventory.js",
            "line": 25
        },
        "declaredIn": {
            "file": "lib/rewards/server/add-item-to-inventory.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".byItemModelOnPlayer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DropsAnimations",
        "importPath": "reldens/lib/rewards/server/drops-animations",
        "exportedFrom": {
            "file": "lib/rewards/server/drops-animations.js",
            "line": 63
        },
        "declaredIn": {
            "file": "lib/rewards/server/drops-animations.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".fromModel()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/rewards/server/entities-config",
        "exportedFrom": {
            "file": "lib/rewards/server/entities-config.js",
            "line": 12
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/rewards/server/entities-translations",
        "exportedFrom": {
            "file": "lib/rewards/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DropsAnimationsEntityOverride",
        "importPath": "reldens/lib/rewards/server/entities/drops-animations-entity-override",
        "exportedFrom": {
            "file": "lib/rewards/server/entities/drops-animations-entity-override.js",
            "line": 42
        },
        "declaredIn": {
            "file": "lib/rewards/server/entities/drops-animations-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "DropsAnimationsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEntityOverride",
        "importPath": "reldens/lib/rewards/server/entities/rewards-entity-override",
        "exportedFrom": {
            "file": "lib/rewards/server/entities/rewards-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/rewards/server/entities/rewards-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RewardsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsEntityOverride",
        "importPath": "reldens/lib/rewards/server/entities/rewards-events-entity-override",
        "exportedFrom": {
            "file": "lib/rewards/server/entities/rewards-events-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/rewards/server/entities/rewards-events-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RewardsEventsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsModifiersEntityOverride",
        "importPath": "reldens/lib/rewards/server/entities/rewards-modifiers-entity-override",
        "exportedFrom": {
            "file": "lib/rewards/server/entities/rewards-modifiers-entity-override.js",
            "line": 34
        },
        "declaredIn": {
            "file": "lib/rewards/server/entities/rewards-modifiers-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RewardsModifiersEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EventHandler",
        "importPath": "reldens/lib/rewards/server/event-handlers/event-handler",
        "exportedFrom": {
            "file": "lib/rewards/server/event-handlers/event-handler.js",
            "line": 22
        },
        "declaredIn": {
            "file": "lib/rewards/server/event-handlers/event-handler.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".updateEventState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LoginStateHandler",
        "importPath": "reldens/lib/rewards/server/event-handlers/login-state-handler",
        "exportedFrom": {
            "file": "lib/rewards/server/event-handlers/login-state-handler.js",
            "line": 228
        },
        "declaredIn": {
            "file": "lib/rewards/server/event-handlers/login-state-handler.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "EventHandler",
        "methods": [
            ".byLatestPerDay()",
            ".constructor()",
            ".processDailyLogin()",
            ".processStraightDaysLogin()",
            ".resetRewardState()",
            ".updateEventState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsMapper",
        "importPath": "reldens/lib/rewards/server/mappers/rewards-events-mapper",
        "exportedFrom": {
            "file": "lib/rewards/server/mappers/rewards-events-mapper.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/rewards/server/mappers/rewards-events-mapper.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".withPlayerRewardsEventsState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsToActionsMapper",
        "importPath": "reldens/lib/rewards/server/mappers/rewards-to-actions-mapper",
        "exportedFrom": {
            "file": "lib/rewards/server/mappers/rewards-to-actions-mapper.js",
            "line": 119
        },
        "declaredIn": {
            "file": "lib/rewards/server/mappers/rewards-to-actions-mapper.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".map()",
            ".mapRewardEventData()",
            ".mapRewardEventStateData()",
            ".mapRewardImageData()",
            ".mapRewardItemsData()",
            ".mapSingle()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PickUpObject",
        "importPath": "reldens/lib/rewards/server/pick-up-object",
        "exportedFrom": {
            "file": "lib/rewards/server/pick-up-object.js",
            "line": 48
        },
        "declaredIn": {
            "file": "lib/rewards/server/pick-up-object.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsPlugin",
        "importPath": "reldens/lib/rewards/server/plugin",
        "exportedFrom": {
            "file": "lib/rewards/server/plugin.js",
            "line": 137
        },
        "declaredIn": {
            "file": "lib/rewards/server/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".appendPluginClasses()",
            ".attachGiveRewardsEvent()",
            ".attachRewardMessageActions()",
            ".battleEndedGiveRewards()",
            ".enrichObjectWithRewards()",
            ".listenEvents()",
            ".processRewardsDrops()",
            ".sendPlayerRewardsData()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RepositoriesExtension",
        "importPath": "reldens/lib/rewards/server/repositories-extension",
        "exportedFrom": {
            "file": "lib/rewards/server/repositories-extension.js",
            "line": 53
        },
        "declaredIn": {
            "file": "lib/rewards/server/repositories-extension.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".assignRepositories()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Reward",
        "importPath": "reldens/lib/rewards/server/reward",
        "exportedFrom": {
            "file": "lib/rewards/server/reward.js",
            "line": 217
        },
        "declaredIn": {
            "file": "lib/rewards/server/reward.js",
            "line": 30
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".areValidRewards()",
            ".constructor()",
            ".createDropObjectData()",
            ".fromModel()",
            ".getRewardsBag()",
            ".hasExperienceSet()",
            ".isDroppable()",
            ".isItemType()",
            ".isModifierType()",
            ".isValidReward()",
            ".isWinningReward()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardMessageActions",
        "importPath": "reldens/lib/rewards/server/reward-message-actions",
        "exportedFrom": {
            "file": "lib/rewards/server/reward-message-actions.js",
            "line": 70
        },
        "declaredIn": {
            "file": "lib/rewards/server/reward-message-actions.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsDropsMapper",
        "importPath": "reldens/lib/rewards/server/rewards-drops-mapper",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-drops-mapper.js",
            "line": 43
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-drops-mapper.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".mapDropsData()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsDropsProcessor",
        "importPath": "reldens/lib/rewards/server/rewards-drops-processor",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-drops-processor.js",
            "line": 60
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-drops-processor.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".processRewardsDrops()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsDataSender",
        "importPath": "reldens/lib/rewards/server/rewards-events-data-sender",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-events-data-sender.js",
            "line": 94
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-events-data-sender.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".fetchPlayerClient()",
            ".sendAcceptedRewardUpdate()",
            ".sendUpdates()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsHandler",
        "importPath": "reldens/lib/rewards/server/rewards-events-handler",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-events-handler.js",
            "line": 85
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-events-handler.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateRewardsEvents()",
            ".constructor()",
            ".updateEventState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsMessageActions",
        "importPath": "reldens/lib/rewards/server/rewards-events-message-actions",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-events-message-actions.js",
            "line": 134
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-events-message-actions.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeMessageActions()",
            ".giveRewardItems()",
            ".processAcceptRewardMessage()",
            ".updateRewardState()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsProvider",
        "importPath": "reldens/lib/rewards/server/rewards-events-provider",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-events-provider.js",
            "line": 200
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-events-provider.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RepositoriesExtension",
        "methods": [
            ".constructor()",
            ".fetchActiveRewardsEvents()",
            ".fetchActiveRewardsWithMappedData()",
            ".fetchPlayerActiveRewards()",
            ".fetchPlayerActiveRewardsStateWithMappedData()",
            ".fetchPlayerRewardStateWithRewardMappedData()",
            ".fetchPlayerRewardsStateByIdWithMappedData()",
            ".fetchRewardItemsData()",
            ".filterActiveRewardsByDates()",
            ".mapRewardDataFromModel()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsEventsUpdater",
        "importPath": "reldens/lib/rewards/server/rewards-events-updater",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-events-updater.js",
            "line": 54
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-events-updater.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RepositoriesExtension",
        "methods": [
            ".constructor()",
            ".updateStateById()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsMapper",
        "importPath": "reldens/lib/rewards/server/rewards-mapper",
        "exportedFrom": {
            "file": "lib/rewards/server/rewards-mapper.js",
            "line": 32
        },
        "declaredIn": {
            "file": "lib/rewards/server/rewards-mapper.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fromModels()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectSubscriber",
        "importPath": "reldens/lib/rewards/server/subscribers/object-subscriber",
        "exportedFrom": {
            "file": "lib/rewards/server/subscribers/object-subscriber.js",
            "line": 33
        },
        "declaredIn": {
            "file": "lib/rewards/server/subscribers/object-subscriber.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".enrichWithRewards()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardsSubscriber",
        "importPath": "reldens/lib/rewards/server/subscribers/rewards-subscriber",
        "exportedFrom": {
            "file": "lib/rewards/server/subscribers/rewards-subscriber.js",
            "line": 285
        },
        "declaredIn": {
            "file": "lib/rewards/server/subscribers/rewards-subscriber.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".addItemToPlayerInventory()",
            ".applyExperienceReward()",
            ".applyItemReward()",
            ".applyModifierReward()",
            ".constructor()",
            ".createRewardResult()",
            ".getWinningRewards()",
            ".giveReward()",
            ".giveRewards()",
            ".targetsLevelsTotal()",
            ".updateUniqueRewards()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TargetDeterminer",
        "importPath": "reldens/lib/rewards/server/target-determiner",
        "exportedFrom": {
            "file": "lib/rewards/server/target-determiner.js",
            "line": 54
        },
        "declaredIn": {
            "file": "lib/rewards/server/target-determiner.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".forReward()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RewardDropValidator",
        "importPath": "reldens/lib/rewards/server/validator/reward-drop-validator",
        "exportedFrom": {
            "file": "lib/rewards/server/validator/reward-drop-validator.js",
            "line": 45
        },
        "declaredIn": {
            "file": "lib/rewards/server/validator/reward-drop-validator.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fetchValidParams()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldDropHandler",
        "importPath": "reldens/lib/rewards/server/world-drop-handler",
        "exportedFrom": {
            "file": "lib/rewards/server/world-drop-handler.js",
            "line": 107
        },
        "declaredIn": {
            "file": "lib/rewards/server/world-drop-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".createDropItem()",
            ".createDropItems()",
            ".createRewardItemObjectsOnRoom()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsPlugin",
        "importPath": "reldens/lib/rooms/client/plugin",
        "exportedFrom": {
            "file": "lib/rooms/client/plugin.js",
            "line": 159
        },
        "declaredIn": {
            "file": "lib/rooms/client/plugin.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".appendSelectedScene()",
            ".createSelectorElements()",
            ".filterCreationRooms()",
            ".populateSceneSelector()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsConst",
        "importPath": "reldens/lib/rooms/constants",
        "exportedFrom": {
            "file": "lib/rooms/constants.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/rooms/server/entities-config",
        "exportedFrom": {
            "file": "lib/rooms/server/entities-config.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/rooms/server/entities-translations",
        "exportedFrom": {
            "file": "lib/rooms/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsEntityOverride",
        "importPath": "reldens/lib/rooms/server/entities/rooms-entity-override",
        "exportedFrom": {
            "file": "lib/rooms/server/entities/rooms-entity-override.js",
            "line": 54
        },
        "declaredIn": {
            "file": "lib/rooms/server/entities/rooms-entity-override.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RoomsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "JoinedSceneRoomEvent",
        "importPath": "reldens/lib/rooms/server/events/joined-scene-room-event",
        "exportedFrom": {
            "file": "lib/rooms/server/events/joined-scene-room-event.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/rooms/server/events/joined-scene-room-event.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomGame",
        "importPath": "reldens/lib/rooms/server/game",
        "exportedFrom": {
            "file": "lib/rooms/server/game.js",
            "line": 111
        },
        "declaredIn": {
            "file": "lib/rooms/server/game.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RoomLogin",
        "methods": [
            ".disconnectUserFromEveryOtherRoom()",
            ".handleReceivedMessage()",
            ".onCreate()",
            ".onJoin()",
            ".onLeave()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomLogin",
        "importPath": "reldens/lib/rooms/server/login",
        "exportedFrom": {
            "file": "lib/rooms/server/login.js",
            "line": 313
        },
        "declaredIn": {
            "file": "lib/rooms/server/login.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Room",
        "methods": [
            ".activePlayerByPlayerId()",
            ".activePlayerByPlayerName()",
            ".activePlayerBySessionId()",
            ".activePlayerByUserName()",
            ".disconnectFromOtherServers()",
            ".getPlayerByIdFromArray()",
            ".handleReceivedMessage()",
            ".isValidOriginRequest()",
            ".isValidRoomOnServer()",
            ".onAuth()",
            ".onCreate()",
            ".onDispose()",
            ".removeActivePlayer()",
            ".validateRoom()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsManager",
        "importPath": "reldens/lib/rooms/server/manager",
        "exportedFrom": {
            "file": "lib/rooms/server/manager.js",
            "line": 447
        },
        "declaredIn": {
            "file": "lib/rooms/server/manager.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".defineExtraRoomsInGameServer()",
            ".defineRoom()",
            ".defineRoomsFromModels()",
            ".defineRoomsInGameServer()",
            ".extractRoomDataForSelector()",
            ".fetchConfiguredRoomsList()",
            ".fetchGuestRooms()",
            ".filterGuestRooms()",
            ".filterRooms()",
            ".filterValidRooms()",
            ".generateRoomModel()",
            ".loadRoomBy()",
            ".loadRoomById()",
            ".loadRoomByName()",
            ".loadRooms()",
            ".setupConfiguration()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomsPlugin",
        "importPath": "reldens/lib/rooms/server/plugin",
        "exportedFrom": {
            "file": "lib/rooms/server/plugin.js",
            "line": 136
        },
        "declaredIn": {
            "file": "lib/rooms/server/plugin.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".attachRoomSelectionAndInstancesRemoval()",
            ".attachRoomsManager()",
            ".getAvailableRoomsForUserAndAction()",
            ".listenEvents()",
            ".removeRoomCreatedInstanceFromManager()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RandomPlayerState",
        "importPath": "reldens/lib/rooms/server/random-player-state",
        "exportedFrom": {
            "file": "lib/rooms/server/random-player-state.js",
            "line": 97
        },
        "declaredIn": {
            "file": "lib/rooms/server/random-player-state.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".playerPositionIsRoomStartingPoint()",
            ".randomizeLocation()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RoomScene",
        "importPath": "reldens/lib/rooms/server/scene",
        "exportedFrom": {
            "file": "lib/rooms/server/scene.js",
            "line": 1080
        },
        "declaredIn": {
            "file": "lib/rooms/server/scene.js",
            "line": 32
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RoomLogin",
        "methods": [
            ".activateBody()",
            ".activatePlayer()",
            ".addObjectStateSceneData()",
            ".broadcastSceneChange()",
            ".cleanUpRoomWorld()",
            ".clearEntityActions()",
            ".clearMovementIntervals()",
            ".clearPlayersTimers()",
            ".clearWorldTimers()",
            ".createDropObjectInRoom()",
            ".createPlayerOnScene()",
            ".createWorld()",
            ".createWorldInstance()",
            ".deactivateBody()",
            ".deactivatePlayer()",
            ".deleteObjectSceneData()",
            ".deleteRespawnObjectInstances()",
            ".disableAutoDispose()",
            ".disconnectBySessionId()",
            ".enableAutoDispose()",
            ".executeMovePlayerActions()",
            ".executePlayerStatsAction()",
            ".executeSceneMessageActions()",
            ".fetchNewPosition()",
            ".getClientById()",
            ".handleObjectsManagerOnRoomDispose()",
            ".handlePlayerLastState()",
            ".handleReceivedMessage()",
            ".handleRespawnOnRoomDispose()",
            ".hasActiveDroppedObjects()",
            ".initializeWorldTimer()",
            ".isAllowedAction()",
            ".logEventsData()",
            ".nextSceneInitialPosition()",
            ".objectAssetId()",
            ".onCreate()",
            ".onDispose()",
            ".onJoin()",
            ".onLeave()",
            ".playerByPlayerIdFromState()",
            ".playerBySessionIdFromState()",
            ".playersCountInState()",
            ".playersKeysFromState()",
            ".removeAllPlayerReferences()",
            ".removeObject()",
            ".removePlayer()",
            ".removeRespawnObjectsSubscribers()",
            ".savePlayedTime()",
            ".savePlayerState()",
            ".savePlayerStats()",
            ".setObjectAutoDestroyTime()",
            ".validateWorldContents()",
            ".worldTimerCallback()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SceneDataFilter",
        "importPath": "reldens/lib/rooms/server/scene-data-filter",
        "exportedFrom": {
            "file": "lib/rooms/server/scene-data-filter.js",
            "line": 237
        },
        "declaredIn": {
            "file": "lib/rooms/server/scene-data-filter.js",
            "line": 38
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".buildCompleteData()",
            ".buildFilteredData()",
            ".constructor()",
            ".detectIdenticalProperties()",
            ".filterRoomData()",
            ".initialize()",
            ".optimizeData()",
            ".valuesAreDifferent()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "State",
        "importPath": "reldens/lib/rooms/server/state",
        "exportedFrom": {
            "file": "lib/rooms/server/state.js",
            "line": 140
        },
        "declaredIn": {
            "file": "lib/rooms/server/state.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Schema",
        "methods": [
            ".addBodyToState()",
            ".addPlayerToState()",
            ".constructor()",
            ".createPlayerSchema()",
            ".fetchBody()",
            ".mapRoomData()",
            ".positionPlayer()",
            ".removeBody()",
            ".removePlayer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldConfig",
        "importPath": "reldens/lib/rooms/server/world-config",
        "exportedFrom": {
            "file": "lib/rooms/server/world-config.js",
            "line": 146
        },
        "declaredIn": {
            "file": "lib/rooms/server/world-config.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".mapWorldConfigValues()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageProcessor",
        "importPath": "reldens/lib/scores/client/messages-processor",
        "exportedFrom": {
            "file": "lib/scores/client/messages-processor.js",
            "line": 39
        },
        "declaredIn": {
            "file": "lib/scores/client/messages-processor.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".processScoresMessagesQueue()"
        ],
        "graphInboundEdges": 1,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresPlugin",
        "importPath": "reldens/lib/scores/client/plugin",
        "exportedFrom": {
            "file": "lib/scores/client/plugin.js",
            "line": 106
        },
        "declaredIn": {
            "file": "lib/scores/client/plugin.js",
            "line": 25
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".listenMessages()",
            ".setTranslations()",
            ".setup()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PreloaderHandler",
        "importPath": "reldens/lib/scores/client/preloader-handler",
        "exportedFrom": {
            "file": "lib/scores/client/preloader-handler.js",
            "line": 29
        },
        "declaredIn": {
            "file": "lib/scores/client/preloader-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".loadContents()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresMessageHandler",
        "importPath": "reldens/lib/scores/client/scores-message-handler",
        "exportedFrom": {
            "file": "lib/scores/client/scores-message-handler.js",
            "line": 159
        },
        "declaredIn": {
            "file": "lib/scores/client/scores-message-handler.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createContentsUpdate()",
            ".createScoresUi()",
            ".updatePlayerScore()",
            ".updateScoresBox()",
            ".validate()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresMessageListener",
        "importPath": "reldens/lib/scores/client/scores-message-listener",
        "exportedFrom": {
            "file": "lib/scores/client/scores-message-listener.js",
            "line": 80
        },
        "declaredIn": {
            "file": "lib/scores/client/scores-message-listener.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()",
            ".handleScoresMessage()",
            ".isScoresMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresConst",
        "importPath": "reldens/lib/scores/constants",
        "exportedFrom": {
            "file": "lib/scores/constants.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/scores/server/entities-config",
        "exportedFrom": {
            "file": "lib/scores/server/entities-config.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/scores/server/entities-translations",
        "exportedFrom": {
            "file": "lib/scores/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresDetailEntityOverride",
        "importPath": "reldens/lib/scores/server/entities/scores-detail-entity-override",
        "exportedFrom": {
            "file": "lib/scores/server/entities/scores-detail-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/scores/server/entities/scores-detail-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ScoresDetailEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresEntityOverride",
        "importPath": "reldens/lib/scores/server/entities/scores-entity-override",
        "exportedFrom": {
            "file": "lib/scores/server/entities/scores-entity-override.js",
            "line": 32
        },
        "declaredIn": {
            "file": "lib/scores/server/entities/scores-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ScoresEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "IncreaseScoreOnKillMapper",
        "importPath": "reldens/lib/scores/server/mapper/increase-score-on-kill-mapper",
        "exportedFrom": {
            "file": "lib/scores/server/mapper/increase-score-on-kill-mapper.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/scores/server/mapper/increase-score-on-kill-mapper.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".fromBattleEndedEvent()",
            ".fromPlayerDeathEvent()",
            ".reset()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresPlugin",
        "importPath": "reldens/lib/scores/server/plugin",
        "exportedFrom": {
            "file": "lib/scores/server/plugin.js",
            "line": 108
        },
        "declaredIn": {
            "file": "lib/scores/server/plugin.js",
            "line": 28
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "RepositoriesExtension",
        "importPath": "reldens/lib/scores/server/repositories-extension",
        "exportedFrom": {
            "file": "lib/scores/server/repositories-extension.js",
            "line": 48
        },
        "declaredIn": {
            "file": "lib/scores/server/repositories-extension.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".assignRepositories()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresProvider",
        "importPath": "reldens/lib/scores/server/scores-provider",
        "exportedFrom": {
            "file": "lib/scores/server/scores-provider.js",
            "line": 69
        },
        "declaredIn": {
            "file": "lib/scores/server/scores-provider.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RepositoriesExtension",
        "methods": [
            ".constructor()",
            ".fetchPlayerScore()",
            ".fetchTopScoresMappedData()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresSender",
        "importPath": "reldens/lib/scores/server/scores-sender",
        "exportedFrom": {
            "file": "lib/scores/server/scores-sender.js",
            "line": 76
        },
        "declaredIn": {
            "file": "lib/scores/server/scores-sender.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".broadcastTopScores()",
            ".sendUpdates()",
            ".updatePlayerScore()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ScoresUpdater",
        "importPath": "reldens/lib/scores/server/scores-updater",
        "exportedFrom": {
            "file": "lib/scores/server/scores-updater.js",
            "line": 56
        },
        "declaredIn": {
            "file": "lib/scores/server/scores-updater.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "RepositoriesExtension",
        "methods": [
            ".constructor()",
            ".updatePlayerScores()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreateScoresRoute",
        "importPath": "reldens/lib/scores/server/subscriber/create-scores-route",
        "exportedFrom": {
            "file": "lib/scores/server/subscriber/create-scores-route.js",
            "line": 94
        },
        "declaredIn": {
            "file": "lib/scores/server/subscriber/create-scores-route.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "IncreaseScoreOnKill",
        "importPath": "reldens/lib/scores/server/subscriber/increase-score-on-kill",
        "exportedFrom": {
            "file": "lib/scores/server/subscriber/increase-score-on-kill.js",
            "line": 136
        },
        "declaredIn": {
            "file": "lib/scores/server/subscriber/increase-score-on-kill.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".checkScoresConfiguration()",
            ".constructor()",
            ".determineObtainedScore()",
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SendInitialScoresData",
        "importPath": "reldens/lib/scores/server/subscriber/send-initial-scores-data",
        "exportedFrom": {
            "file": "lib/scores/server/subscriber/send-initial-scores-data.js",
            "line": 50
        },
        "declaredIn": {
            "file": "lib/scores/server/subscriber/send-initial-scores-data.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SnippetsPlugin",
        "importPath": "reldens/lib/snippets/client/plugin",
        "exportedFrom": {
            "file": "lib/snippets/client/plugin.js",
            "line": 87
        },
        "declaredIn": {
            "file": "lib/snippets/client/plugin.js",
            "line": 26
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".listenEvents()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SnippetsUi",
        "importPath": "reldens/lib/snippets/client/snippets-ui",
        "exportedFrom": {
            "file": "lib/snippets/client/snippets-ui.js",
            "line": 82
        },
        "declaredIn": {
            "file": "lib/snippets/client/snippets-ui.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createUi()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesHandler",
        "importPath": "reldens/lib/snippets/client/templates-handler",
        "exportedFrom": {
            "file": "lib/snippets/client/templates-handler.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/snippets/client/templates-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".preloadTemplates()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TranslationsMapper",
        "importPath": "reldens/lib/snippets/client/translations-mapper",
        "exportedFrom": {
            "file": "lib/snippets/client/translations-mapper.js",
            "line": 80
        },
        "declaredIn": {
            "file": "lib/snippets/client/translations-mapper.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".forConfig()",
            ".fromObject()",
            ".recursiveMap()"
        ],
        "graphInboundEdges": 12,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SnippetsConst",
        "importPath": "reldens/lib/snippets/constants",
        "exportedFrom": {
            "file": "lib/snippets/constants.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ConfigurationEnricher",
        "importPath": "reldens/lib/snippets/server/configuration-enricher",
        "exportedFrom": {
            "file": "lib/snippets/server/configuration-enricher.js",
            "line": 71
        },
        "declaredIn": {
            "file": "lib/snippets/server/configuration-enricher.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".withLocalesAndSnippets()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/snippets/server/entities-config",
        "exportedFrom": {
            "file": "lib/snippets/server/entities-config.js",
            "line": 11
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/snippets/server/entities-translations",
        "exportedFrom": {
            "file": "lib/snippets/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LocaleEntityOverride",
        "importPath": "reldens/lib/snippets/server/entities/locale-entity-override",
        "exportedFrom": {
            "file": "lib/snippets/server/entities/locale-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/snippets/server/entities/locale-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "LocaleEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SnippetsEntityOverride",
        "importPath": "reldens/lib/snippets/server/entities/snippets-entity-override",
        "exportedFrom": {
            "file": "lib/snippets/server/entities/snippets-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/snippets/server/entities/snippets-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "SnippetsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersLocaleEntityOverride",
        "importPath": "reldens/lib/snippets/server/entities/users-locale-entity-override",
        "exportedFrom": {
            "file": "lib/snippets/server/entities/users-locale-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/snippets/server/entities/users-locale-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "UsersLocaleEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "InitialGameDataEnricher",
        "importPath": "reldens/lib/snippets/server/initial-game-data-enricher",
        "exportedFrom": {
            "file": "lib/snippets/server/initial-game-data-enricher.js",
            "line": 44
        },
        "declaredIn": {
            "file": "lib/snippets/server/initial-game-data-enricher.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".withLocale()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "SnippetsPlugin",
        "importPath": "reldens/lib/snippets/server/plugin",
        "exportedFrom": {
            "file": "lib/snippets/server/plugin.js",
            "line": 63
        },
        "declaredIn": {
            "file": "lib/snippets/server/plugin.js",
            "line": 23
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Translator",
        "importPath": "reldens/lib/snippets/translator",
        "exportedFrom": {
            "file": "lib/snippets/translator.js",
            "line": 96
        },
        "declaredIn": {
            "file": "lib/snippets/translator.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".snippetNameSpace()",
            ".t()",
            ".translate()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanMessageHandler",
        "importPath": "reldens/lib/teams/client/clan-message-handler",
        "exportedFrom": {
            "file": "lib/teams/client/clan-message-handler.js",
            "line": 486
        },
        "declaredIn": {
            "file": "lib/teams/client/clan-message-handler.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateClanLeaveButtonAction()",
            ".activateClanMembersActions()",
            ".activateClanPlayersActions()",
            ".activateCreateButton()",
            ".addAndRemoveCaptureKeys()",
            ".constructor()",
            ".createClanContainer()",
            ".createClanContent()",
            ".createClanMemberBox()",
            ".createClanPlayerBox()",
            ".createClanUi()",
            ".createDismissPlayerButton()",
            ".createSharedPropertiesContent()",
            ".initializeClanUi()",
            ".removeClanUi()",
            ".setClanFromMessage()",
            ".showClanBox()",
            ".showClanRequest()",
            ".showNewClan()",
            ".updateClanBox()",
            ".validate()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanMessageListener",
        "importPath": "reldens/lib/teams/client/clan-message-listener",
        "exportedFrom": {
            "file": "lib/teams/client/clan-message-listener.js",
            "line": 92
        },
        "declaredIn": {
            "file": "lib/teams/client/clan-message-listener.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()",
            ".handleClanMessage()",
            ".isClanMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "MessageProcessor",
        "importPath": "reldens/lib/teams/client/messages-processor",
        "exportedFrom": {
            "file": "lib/teams/client/messages-processor.js",
            "line": 59
        },
        "declaredIn": {
            "file": "lib/teams/client/messages-processor.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".processClanMessagesQueue()",
            ".processTeamMessagesQueue()"
        ],
        "graphInboundEdges": 1,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamsPlugin",
        "importPath": "reldens/lib/teams/client/plugin",
        "exportedFrom": {
            "file": "lib/teams/client/plugin.js",
            "line": 111
        },
        "declaredIn": {
            "file": "lib/teams/client/plugin.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".fetchTeamPlayerBySessionId()",
            ".listenEvents()",
            ".listenMessages()",
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TargetBoxEnricher",
        "importPath": "reldens/lib/teams/client/target-box-enricher",
        "exportedFrom": {
            "file": "lib/teams/client/target-box-enricher.js",
            "line": 147
        },
        "declaredIn": {
            "file": "lib/teams/client/target-box-enricher.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".appendClanInviteButton()",
            ".appendInviteButton()",
            ".appendTeamInviteButton()",
            ".playerBySessionId()",
            ".targetIsValidPlayer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamMessageHandler",
        "importPath": "reldens/lib/teams/client/team-message-handler",
        "exportedFrom": {
            "file": "lib/teams/client/team-message-handler.js",
            "line": 314
        },
        "declaredIn": {
            "file": "lib/teams/client/team-message-handler.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateTeamLeaveButtonAction()",
            ".activateTeamPlayerActions()",
            ".constructor()",
            ".createDismissPlayerButton()",
            ".createSharedPropertiesContent()",
            ".createTeamContainer()",
            ".createTeamMemberBox()",
            ".createTeamUi()",
            ".removeTeamUi()",
            ".showTeamBox()",
            ".showTeamRequest()",
            ".teamUiKey()",
            ".updateTeamBox()",
            ".validate()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamMessageListener",
        "importPath": "reldens/lib/teams/client/team-message-listener",
        "exportedFrom": {
            "file": "lib/teams/client/team-message-listener.js",
            "line": 79
        },
        "declaredIn": {
            "file": "lib/teams/client/team-message-listener.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".executeClientMessageActions()",
            ".handleTeamMessage()",
            ".isTeamMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TemplatesHandler",
        "importPath": "reldens/lib/teams/client/templates-handler",
        "exportedFrom": {
            "file": "lib/teams/client/templates-handler.js",
            "line": 41
        },
        "declaredIn": {
            "file": "lib/teams/client/templates-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".preloadTemplates()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamsConst",
        "importPath": "reldens/lib/teams/constants",
        "exportedFrom": {
            "file": "lib/teams/constants.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Clan",
        "importPath": "reldens/lib/teams/server/clan",
        "exportedFrom": {
            "file": "lib/teams/server/clan.js",
            "line": 234
        },
        "declaredIn": {
            "file": "lib/teams/server/clan.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".applyModifiers()",
            ".constructor()",
            ".disconnect()",
            ".fromModel()",
            ".join()",
            ".leave()",
            ".mapForClient()",
            ".mapMembersForClient()",
            ".mapMembersFromModelArray()",
            ".playerBySessionId()",
            ".revertModifiers()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanFactory",
        "importPath": "reldens/lib/teams/server/clan-factory",
        "exportedFrom": {
            "file": "lib/teams/server/clan-factory.js",
            "line": 56
        },
        "declaredIn": {
            "file": "lib/teams/server/clan-factory.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".create()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanMessageActions",
        "importPath": "reldens/lib/teams/server/clan-message-actions",
        "exportedFrom": {
            "file": "lib/teams/server/clan-message-actions.js",
            "line": 90
        },
        "declaredIn": {
            "file": "lib/teams/server/clan-message-actions.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanUpdatesHandler",
        "importPath": "reldens/lib/teams/server/clan-updates-handler",
        "exportedFrom": {
            "file": "lib/teams/server/clan-updates-handler.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/teams/server/clan-updates-handler.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".actionConstant()",
            ".listenerKey()",
            ".updateClanPlayers()"
        ],
        "graphInboundEdges": 6,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/teams/server/entities-config",
        "exportedFrom": {
            "file": "lib/teams/server/entities-config.js",
            "line": 10
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/teams/server/entities-translations",
        "exportedFrom": {
            "file": "lib/teams/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanEntityOverride",
        "importPath": "reldens/lib/teams/server/entities/clan-entity-override",
        "exportedFrom": {
            "file": "lib/teams/server/entities/clan-entity-override.js",
            "line": 29
        },
        "declaredIn": {
            "file": "lib/teams/server/entities/clan-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ClanEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanLevelsModifiersEntityOverride",
        "importPath": "reldens/lib/teams/server/entities/clan-levels-modifiers-entity-override",
        "exportedFrom": {
            "file": "lib/teams/server/entities/clan-levels-modifiers-entity-override.js",
            "line": 34
        },
        "declaredIn": {
            "file": "lib/teams/server/entities/clan-levels-modifiers-entity-override.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "ClanLevelsModifiersEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreatePlayerClanHandler",
        "importPath": "reldens/lib/teams/server/event-handlers/create-player-clan-handler",
        "exportedFrom": {
            "file": "lib/teams/server/event-handlers/create-player-clan-handler.js",
            "line": 98
        },
        "declaredIn": {
            "file": "lib/teams/server/event-handlers/create-player-clan-handler.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".enrichPlayerWithClan()",
            ".loadClan()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreatePlayerTeamHandler",
        "importPath": "reldens/lib/teams/server/event-handlers/create-player-team-handler",
        "exportedFrom": {
            "file": "lib/teams/server/event-handlers/create-player-team-handler.js",
            "line": 46
        },
        "declaredIn": {
            "file": "lib/teams/server/event-handlers/create-player-team-handler.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".joinExistentTeam()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "EndPlayerHitChangePointTeamHandler",
        "importPath": "reldens/lib/teams/server/event-handlers/end-player-hit-change-point-team-handler",
        "exportedFrom": {
            "file": "lib/teams/server/event-handlers/end-player-hit-change-point-team-handler.js",
            "line": 37
        },
        "declaredIn": {
            "file": "lib/teams/server/event-handlers/end-player-hit-change-point-team-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".savePlayerTeam()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "StatsUpdateHandler",
        "importPath": "reldens/lib/teams/server/event-handlers/stats-update-handler",
        "exportedFrom": {
            "file": "lib/teams/server/event-handlers/stats-update-handler.js",
            "line": 55
        },
        "declaredIn": {
            "file": "lib/teams/server/event-handlers/stats-update-handler.js",
            "line": 14
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".updateClan()",
            ".updateTeam()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ChatMessageActions",
        "importPath": "reldens/lib/teams/server/message-actions/chat-message-actions",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/chat-message-actions.js",
            "line": 314
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/chat-message-actions.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clanMemberLeavingEventListener()",
            ".constructor()",
            ".createMessage()",
            ".inviteClanAcceptedEventListener()",
            ".inviteClanRejectedEventListener()",
            ".inviteTeamAcceptedEventListener()",
            ".inviteTeamRejectedEventListener()",
            ".listenEvents()",
            ".ownerDisbandTeam()",
            ".sendMessage()",
            ".teamMemberLeaveEventListener()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanCreate",
        "importPath": "reldens/lib/teams/server/message-actions/clan-create",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/clan-create.js",
            "line": 145
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/clan-create.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".clanCreateSend()",
            ".execute()",
            ".fetchInitialLevel()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanDisconnect",
        "importPath": "reldens/lib/teams/server/message-actions/clan-disconnect",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/clan-disconnect.js",
            "line": 82
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/clan-disconnect.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanJoin",
        "importPath": "reldens/lib/teams/server/message-actions/clan-join",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/clan-join.js",
            "line": 79
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/clan-join.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ClanLeave",
        "importPath": "reldens/lib/teams/server/message-actions/clan-leave",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/clan-leave.js",
            "line": 115
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/clan-leave.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()",
            ".fromMessage()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamJoin",
        "importPath": "reldens/lib/teams/server/message-actions/team-join",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/team-join.js",
            "line": 92
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/team-join.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamLeave",
        "importPath": "reldens/lib/teams/server/message-actions/team-leave",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/team-leave.js",
            "line": 116
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/team-leave.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()",
            ".fromMessage()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TryClanInvite",
        "importPath": "reldens/lib/teams/server/message-actions/try-clan-invite",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/try-clan-invite.js",
            "line": 79
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/try-clan-invite.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TryTeamStart",
        "importPath": "reldens/lib/teams/server/message-actions/try-team-start",
        "exportedFrom": {
            "file": "lib/teams/server/message-actions/try-team-start.js",
            "line": 56
        },
        "declaredIn": {
            "file": "lib/teams/server/message-actions/try-team-start.js",
            "line": 18
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".execute()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayersDataMapper",
        "importPath": "reldens/lib/teams/server/players-data-mapper",
        "exportedFrom": {
            "file": "lib/teams/server/players-data-mapper.js",
            "line": 63
        },
        "declaredIn": {
            "file": "lib/teams/server/players-data-mapper.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fetchPlayerData()",
            ".fetchPlayersData()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamsPlugin",
        "importPath": "reldens/lib/teams/server/plugin",
        "exportedFrom": {
            "file": "lib/teams/server/plugin.js",
            "line": 90
        },
        "declaredIn": {
            "file": "lib/teams/server/plugin.js",
            "line": 29
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".setup()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Team",
        "importPath": "reldens/lib/teams/server/team",
        "exportedFrom": {
            "file": "lib/teams/server/team.js",
            "line": 117
        },
        "declaredIn": {
            "file": "lib/teams/server/team.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".applyModifiers()",
            ".constructor()",
            ".join()",
            ".leave()",
            ".revertModifiers()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamMessageActions",
        "importPath": "reldens/lib/teams/server/team-message-actions",
        "exportedFrom": {
            "file": "lib/teams/server/team-message-actions.js",
            "line": 76
        },
        "declaredIn": {
            "file": "lib/teams/server/team-message-actions.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeMessageActions()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "TeamUpdatesHandler",
        "importPath": "reldens/lib/teams/server/team-updates-handler",
        "exportedFrom": {
            "file": "lib/teams/server/team-updates-handler.js",
            "line": 71
        },
        "declaredIn": {
            "file": "lib/teams/server/team-updates-handler.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".actionConstant()",
            ".listenerKey()",
            ".updateTeamPlayers()"
        ],
        "graphInboundEdges": 5,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BarProperties",
        "importPath": "reldens/lib/users/client/bar-properties",
        "exportedFrom": {
            "file": "lib/users/client/bar-properties.js",
            "line": 30
        },
        "declaredIn": {
            "file": "lib/users/client/bar-properties.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "LifebarUi",
        "importPath": "reldens/lib/users/client/lifebar-ui",
        "exportedFrom": {
            "file": "lib/users/client/lifebar-ui.js",
            "line": 433
        },
        "declaredIn": {
            "file": "lib/users/client/lifebar-ui.js",
            "line": 19
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".barPropertyTotal()",
            ".barPropertyValue()",
            ".canShowPlayerLifeBar()",
            ".clearPreviousBar()",
            ".constructor()",
            ".createLifeBarUi()",
            ".destroyByKey()",
            ".drawBar()",
            ".drawOnGameResize()",
            ".drawPlayerLifeBar()",
            ".getCurrentTargetId()",
            ".getObjectByKey()",
            ".listenBattleEnd()",
            ".listenEvents()",
            ".listenLifeBarUpdates()",
            ".listenMessages()",
            ".prepareBarData()",
            ".processLifeBarQueue()",
            ".processPlayerLifeBarMessage()",
            ".queueLifeBarMessage()",
            ".removePlayerLifeBar()",
            ".setPlayerLifeBarFixedPosition()",
            ".showTargetLifeBar()",
            ".updatePlayerBarData()",
            ".updatePlayerLifeBar()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectsHandler",
        "importPath": "reldens/lib/users/client/objects-handler",
        "exportedFrom": {
            "file": "lib/users/client/objects-handler.js",
            "line": 162
        },
        "declaredIn": {
            "file": "lib/users/client/objects-handler.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".calculateObjectLifeBarPosition()",
            ".drawLifeBarInPosition()",
            ".drawObjectLifeBar()",
            ".drawObjectsLifeBar()",
            ".generateObjectLifeBar()",
            ".isValidMessage()",
            ".isValidToDraw()",
            ".processObjectLifeBarMessage()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerEngine",
        "importPath": "reldens/lib/users/client/player-engine",
        "exportedFrom": {
            "file": "lib/users/client/player-engine.js",
            "line": 590
        },
        "declaredIn": {
            "file": "lib/users/client/player-engine.js",
            "line": 29
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".addPlayer()",
            ".applyNameLengthLimit()",
            ".constructor()",
            ".create()",
            ".down()",
            ".fullStop()",
            ".getPosition()",
            ".isDeath()",
            ".isDisabled()",
            ".left()",
            ".makePlayerInteractive()",
            ".moveAttachedSprites()",
            ".moveToPointer()",
            ".playPlayerAnimation()",
            ".processPlayerPositionAnimationUpdate()",
            ".removePlayer()",
            ".right()",
            ".runActions()",
            ".setTargetPlayerById()",
            ".showPlayerName()",
            ".stop()",
            ".stopPlayerAnimation()",
            ".up()",
            ".updateNamePosition()",
            ".updatePlayer()",
            ".updatePlayerState()",
            ".updateSpritePosition()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerStatsBarsUi",
        "importPath": "reldens/lib/users/client/player-stats-bars-ui",
        "exportedFrom": {
            "file": "lib/users/client/player-stats-bars-ui.js",
            "line": 118
        },
        "declaredIn": {
            "file": "lib/users/client/player-stats-bars-ui.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".loadBarPropertiesModels()",
            ".preloadBarTemplate()",
            ".setupListeners()",
            ".updatePlayerStatsBars()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayerStatsUi",
        "importPath": "reldens/lib/users/client/player-stats-ui",
        "exportedFrom": {
            "file": "lib/users/client/player-stats-ui.js",
            "line": 70
        },
        "declaredIn": {
            "file": "lib/users/client/player-stats-ui.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createPlayerStatsUi()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersPlugin",
        "importPath": "reldens/lib/users/client/plugin",
        "exportedFrom": {
            "file": "lib/users/client/plugin.js",
            "line": 357
        },
        "declaredIn": {
            "file": "lib/users/client/plugin.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".getPlayerById()",
            ".listenEvents()",
            ".onBeforeCreateEngine()",
            ".preparePlayerCreator()",
            ".preparePlayerSelector()",
            ".prepareSinglePlayerInput()",
            ".setTranslations()",
            ".setup()",
            ".setupPlayerStatsBarsUi()",
            ".setupPlayerStatsUi()",
            ".showAvatarContainer()",
            ".submitSelectedPlayer()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersConst",
        "importPath": "reldens/lib/users/constants",
        "exportedFrom": {
            "file": "lib/users/constants.js",
            "line": 9
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CreateAdmin",
        "importPath": "reldens/lib/users/server/create-admin",
        "exportedFrom": {
            "file": "lib/users/server/create-admin.js",
            "line": 72
        },
        "declaredIn": {
            "file": "lib/users/server/create-admin.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".create()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesConfig",
        "importPath": "reldens/lib/users/server/entities-config",
        "exportedFrom": {
            "file": "lib/users/server/entities-config.js",
            "line": 14
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "entitiesTranslations",
        "importPath": "reldens/lib/users/server/entities-translations",
        "exportedFrom": {
            "file": "lib/users/server/entities-translations.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayersEntityOverride",
        "importPath": "reldens/lib/users/server/entities/players-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/players-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/users/server/entities/players-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PlayersEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayersStateEntityOverride",
        "importPath": "reldens/lib/users/server/entities/players-state-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/players-state-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/users/server/entities/players-state-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PlayersStateEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PlayersStatsEntityOverride",
        "importPath": "reldens/lib/users/server/entities/players-stats-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/players-stats-entity-override.js",
            "line": 29
        },
        "declaredIn": {
            "file": "lib/users/server/entities/players-stats-entity-override.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PlayersStatsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "StatsEntityOverride",
        "importPath": "reldens/lib/users/server/entities/stats-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/stats-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/users/server/entities/stats-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "StatsEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersEntityOverride",
        "importPath": "reldens/lib/users/server/entities/users-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/users-entity-override.js",
            "line": 28
        },
        "declaredIn": {
            "file": "lib/users/server/entities/users-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "UsersEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersLoginEntityOverride",
        "importPath": "reldens/lib/users/server/entities/users-login-entity-override",
        "exportedFrom": {
            "file": "lib/users/server/entities/users-login-entity-override.js",
            "line": 27
        },
        "declaredIn": {
            "file": "lib/users/server/entities/users-login-entity-override.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "UsersLoginEntity",
        "methods": [
            ".propertiesConfig()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersManager",
        "importPath": "reldens/lib/users/server/manager",
        "exportedFrom": {
            "file": "lib/users/server/manager.js",
            "line": 278
        },
        "declaredIn": {
            "file": "lib/users/server/manager.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createPlayer()",
            ".createUser()",
            ".generatePlayerStats()",
            ".isAvailableForGuest()",
            ".isNameAvailable()",
            ".loadUserByEmail()",
            ".loadUserByUsername()",
            ".setGuestRoleId()",
            ".setRepositories()",
            ".updatePlayedTimeAndLogoutDate()",
            ".updatePlayerStatByIds()",
            ".updateUserByEmail()",
            ".updateUserLastLogin()",
            ".updateUserStateByPlayerId()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Player",
        "importPath": "reldens/lib/users/server/player",
        "exportedFrom": {
            "file": "lib/users/server/player.js",
            "line": 154
        },
        "declaredIn": {
            "file": "lib/users/server/player.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Schema",
        "methods": [
            ".constructor()",
            ".eventUniqueKey()",
            ".getCustom()",
            ".getPosition()",
            ".getPrivate()",
            ".inState()",
            ".isDeath()",
            ".isDisabled()",
            ".setCustom()",
            ".setPrivate()",
            ".syncPlayer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "UsersPlugin",
        "importPath": "reldens/lib/users/server/plugin",
        "exportedFrom": {
            "file": "lib/users/server/plugin.js",
            "line": 382
        },
        "declaredIn": {
            "file": "lib/users/server/plugin.js",
            "line": 21
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".activateLifeBar()",
            ".addEventListenerOnSkillAttackApplyDamage()",
            ".broadcastObjectUpdate()",
            ".broadcastObjectUpdateAfterRestore()",
            ".listenEvents()",
            ".onCreatePlayerAfterAppendStats()",
            ".onServerReady()",
            ".preparePlayersStats()",
            ".processStatsData()",
            ".sendLifeBarUpdate()",
            ".setup()",
            ".updateAllPlayersLifeBars()",
            ".updateClientsWithPlayerStats()",
            ".updateEnemiesLifebar()",
            ".updateLifeBars()",
            ".updatePlayersLifebar()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ResetPassword",
        "importPath": "reldens/lib/users/server/reset-password",
        "exportedFrom": {
            "file": "lib/users/server/reset-password.js",
            "line": 65
        },
        "declaredIn": {
            "file": "lib/users/server/reset-password.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".reset()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "DebugWorldCreator",
        "importPath": "reldens/lib/world/client/debug-world-creator",
        "exportedFrom": {
            "file": "lib/world/client/debug-world-creator.js",
            "line": 104
        },
        "declaredIn": {
            "file": "lib/world/client/debug-world-creator.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".cloneMapJson()",
            ".createSceneWorld()",
            ".createWorldInstance()",
            ".findValidLayers()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldPlugin",
        "importPath": "reldens/lib/world/client/plugin",
        "exportedFrom": {
            "file": "lib/world/client/plugin.js",
            "line": 69
        },
        "declaredIn": {
            "file": "lib/world/client/plugin.js",
            "line": 17
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "PluginInterface",
        "methods": [
            ".setup()",
            ".setupDebugMode()",
            ".validateProperties()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "Renderer",
        "importPath": "reldens/lib/world/client/renderer",
        "exportedFrom": {
            "file": "lib/world/client/renderer.js",
            "line": 126
        },
        "declaredIn": {
            "file": "lib/world/client/renderer.js",
            "line": 11
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".createCanvas()",
            ".debugWorld()",
            ".fetchCanvasContext()",
            ".renderLoop()",
            ".renderP2World()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldConst",
        "importPath": "reldens/lib/world/constants",
        "exportedFrom": {
            "file": "lib/world/constants.js",
            "line": 7
        },
        "declaredIn": null,
        "resolution": null,
        "kind": "value",
        "extends": null,
        "methods": [],
        "graphInboundEdges": 0,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "BodyState",
        "importPath": "reldens/lib/world/server/body-state",
        "exportedFrom": {
            "file": "lib/world/server/body-state.js",
            "line": 77
        },
        "declaredIn": {
            "file": "lib/world/server/body-state.js",
            "line": 22
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Schema",
        "methods": [
            ".constructor()",
            ".sync()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "CollisionsManager",
        "importPath": "reldens/lib/world/server/collisions-manager",
        "exportedFrom": {
            "file": "lib/world/server/collisions-manager.js",
            "line": 549
        },
        "declaredIn": {
            "file": "lib/world/server/collisions-manager.js",
            "line": 15
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".activateCollisions()",
            ".beforeResolveCollision()",
            ".bodyFullStop()",
            ".constructor()",
            ".findAlternativePath()",
            ".getObjectBody()",
            ".getPlayerBody()",
            ".getWallBody()",
            ".objectHitObjectBegin()",
            ".objectHitObjectEnd()",
            ".objectHitWallBegin()",
            ".objectHitWallEnd()",
            ".onCollisionsBegin()",
            ".onCollisionsEnd()",
            ".onWorldStepStart()",
            ".playerHitChangePointBegin()",
            ".playerHitObjectBegin()",
            ".playerHitObjectEnd()",
            ".playerHitPlayerBegin()",
            ".playerHitPlayerEnd()",
            ".playerHitWallBegin()",
            ".playerHitWallEnd()",
            ".removeIdleBullets()",
            ".resetObjectAutoMove()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ObjectBodyState",
        "importPath": "reldens/lib/world/server/object-body-state",
        "exportedFrom": {
            "file": "lib/world/server/object-body-state.js",
            "line": 39
        },
        "declaredIn": {
            "file": "lib/world/server/object-body-state.js",
            "line": 20
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "BodyState",
        "methods": [
            ".constructor()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "P2world",
        "importPath": "reldens/lib/world/server/p2world",
        "exportedFrom": {
            "file": "lib/world/server/p2world.js",
            "line": 1021
        },
        "declaredIn": {
            "file": "lib/world/server/p2world.js",
            "line": 24
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "World",
        "methods": [
            ".calculateDirection()",
            ".constructor()",
            ".createBodyState()",
            ".createChangePoint()",
            ".createChangePointsFromStorage()",
            ".createCollisionBody()",
            ".createCollisionShape()",
            ".createLayerContents()",
            ".createLimits()",
            ".createPlayerBody()",
            ".createRoomObjectBody()",
            ".createWall()",
            ".createWallCollisionBody()",
            ".createWorldContent()",
            ".createWorldObject()",
            ".determineBodyPositionX()",
            ".determineBodyPositionY()",
            ".determineFromType()",
            ".determinePreviousTileIndexFromGroupingType()",
            ".determineShapeHeight()",
            ".determineShapeWidth()",
            ".enablePathFinder()",
            ".enableWorldDateTime()",
            ".fetchBodyByTileIndexId()",
            ".fetchPlayerSpeed()",
            ".fetchPositionFromTileIndex()",
            ".fetchPreviousWallTile()",
            ".getSceneChangePoints()",
            ".markPathFinderTile()",
            ".processBodiesQueue()",
            ".removeBodiesFromWorld()",
            ".saveMapData()",
            ".shootBullet()",
            ".shouldGroupBodies()",
            ".tileIndexByRowAndColumn()",
            ".validateMapData()",
            ".validateRequiredProperties()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PathFinder",
        "importPath": "reldens/lib/world/server/path-finder",
        "exportedFrom": {
            "file": "lib/world/server/path-finder.js",
            "line": 109
        },
        "declaredIn": {
            "file": "lib/world/server/path-finder.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".addBodyToProcess()",
            ".constructor()",
            ".createGridFromMap()",
            ".findPath()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "PhysicalBody",
        "importPath": "reldens/lib/world/server/physical-body",
        "exportedFrom": {
            "file": "lib/world/server/physical-body.js",
            "line": 726
        },
        "declaredIn": {
            "file": "lib/world/server/physical-body.js",
            "line": 13
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": "Body",
        "methods": [
            ".alignToTile()",
            ".bodyLogKey()",
            ".calculateMagnitude()",
            ".canJump()",
            ".checkNonZeroComponents()",
            ".constructor()",
            ".getPathFinder()",
            ".hasInvalidSpeed()",
            ".initMove()",
            ".integrate()",
            ".isNotMoving()",
            ".isOutOfWorldBounds()",
            ".moveToOriginalPoint()",
            ".moveToPoint()",
            ".moveUp()",
            ".normalizeSpeed()",
            ".positionToTiles()",
            ".removeInvalidStateBulletBody()",
            ".resetAuto()",
            ".setShapesCollisionGroup()",
            ".simultaneousKeyPressMovement()",
            ".simultaneousMovementDiagonalSpeedFix()",
            ".singleKeyPressMovement()",
            ".speedToNext()",
            ".stopAutoMoving()",
            ".stopFull()",
            ".stopMove()",
            ".stopX()",
            ".stopY()",
            ".updateBodyState()",
            ".updateCurrentPoints()",
            ".validateAndSetDirection()",
            ".worldHeight()",
            ".worldTileHeight()",
            ".worldTileWidth()",
            ".worldWidth()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldWalkableNodesAroundProvider",
        "importPath": "reldens/lib/world/server/world-walkable-nodes-around-provider",
        "exportedFrom": {
            "file": "lib/world/server/world-walkable-nodes-around-provider.js",
            "line": 90
        },
        "declaredIn": {
            "file": "lib/world/server/world-walkable-nodes-around-provider.js",
            "line": 12
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".fetchFirstWorldPosition()",
            ".generateWalkableNodesAround()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldPointsValidator",
        "importPath": "reldens/lib/world/world-points-validator",
        "exportedFrom": {
            "file": "lib/world/world-points-validator.js",
            "line": 41
        },
        "declaredIn": {
            "file": "lib/world/world-points-validator.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".makeValidPoints()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldPositionCalculator",
        "importPath": "reldens/lib/world/world-position-calculator",
        "exportedFrom": {
            "file": "lib/world/world-position-calculator.js",
            "line": 30
        },
        "declaredIn": {
            "file": "lib/world/world-position-calculator.js",
            "line": 9
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".forNode()"
        ],
        "graphInboundEdges": 3,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "WorldTimer",
        "importPath": "reldens/lib/world/world-timer",
        "exportedFrom": {
            "file": "lib/world/world-timer.js",
            "line": 116
        },
        "declaredIn": {
            "file": "lib/world/world-timer.js",
            "line": 16
        },
        "resolution": "declared-in-file",
        "kind": "class",
        "extends": null,
        "methods": [
            ".constructor()",
            ".executeCallbacks()",
            ".setIntervalCallback()",
            ".startWorldSteps()",
            ".stepWorld()",
            ".stepWorldWithSubSteps()"
        ],
        "graphInboundEdges": 4,
        "demonstratedInProjectTemplate": false
    },
    {
        "name": "ServerManager",
        "importPath": "reldens/server",
        "exportedFrom": {
            "file": "server.js",
            "line": 9
        },
        "declaredIn": {
            "file": "lib/game/server/manager.js",
            "line": 35
        },
        "resolution": "re-export-resolved-by-unique-name",
        "kind": "class",
        "extends": null,
        "methods": [
            ".configGuestEmailDomain()",
            ".configRoomsServerUrl()",
            ".constructor()",
            ".createAppServer()",
            ".createGameServer()",
            ".createServers()",
            ".defineServerRooms()",
            ".enableServeStaticsAndHomePage()",
            ".fetchConfigServerFromEnvironmentVariables()",
            ".initializeConfigManager()",
            ".initializeConfiguration()",
            ".initializeFeaturesManager()",
            ".initializeLoginManager()",
            ".initializeMailer()",
            ".initializeManagers()",
            ".initializeRoomsManager()",
            ".initializeStorage()",
            ".initializeUsersManager()",
            ".serverBroadcast()",
            ".setupCustomServerPlugin()",
            ".showInfoLogs()",
            ".start()",
            ".startGameServerInstance()",
            ".validateServer()"
        ],
        "graphInboundEdges": 2,
        "demonstratedInProjectTemplate": true
    }
];
