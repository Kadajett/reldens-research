# Class: PageRangeProvider

Singleton pagination-range builder.

## Constructors

### Constructor

```ts
new PageRangeProvider(): PageRangeProvider;
```

#### Returns

`PageRangeProvider`

## Methods

### fetch()

```ts
fetch(
   page, 
   totalPages, 
   totalDisplayedPages?, 
   firstLabel?, 
   lastLabel?): object[];
```

A windowed page range centered on `page`, with first/last entries.

#### Parameters

##### page

`number`

##### totalPages

`number`

##### totalDisplayedPages?

`number`

##### firstLabel?

`string`

##### lastLabel?

`string`

#### Returns

`object`[]
