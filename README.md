# Outdated-Browser Handler

## Installation
`npm install obh --save`

## How to use
```typescript
const obh = new OutdatedBrowserHandler(document.body, {
    minVersions: {
      msie: '10',
      ios: '7.1',
      safari: '6.1',
      firefox: '28',
      opera: '12.1',
      edge: '12',
      chrome: '21',
      android: '4'
    },
    sourceUrl: 'https://path/to/file.html',
    userAgent: navigator.userAgent
  });

obh.run();
```
or you can use
```typescript
const obh = new OutdatedBrowserHandler(document.body, {
    minVersions: {
      msie: '10',
      ios: '7.1',
      safari: '6.1',
      firefox: '28',
      opera: '12.1',
      edge: '12',
      chrome: '21',
      android: '4'
    },
    template: `
      <h1>Your browser is outdated</h1>
    `,
    userAgent: navigator.userAgent
  });

obh.run();
```

## License
Licensed as MIT. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
