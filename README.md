# Outdated-Browser Handler
helps to detect old browsers and show warning message. Browser detection's based on [bowser](https://github.com/lancedikson/bowser).

## Installation
`npm install obh --save`

## How to use
```typescript
const { OutdatedBrowserHandler } from 'obh';

OutdatedBrowserHandler.handle(document.body, {
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
}).then(isOkay => {
  if (isOkay) {
    <...> // continue to work
  }
});
```
or you can use
```typescript
const { OutdatedBrowserHandler } from 'obh';

OutdatedBrowserHandler.handle(document.body, {
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
}).then(isOkay => {
  if (isOkay) {
    <...> // continue to work
  }
});
```

## License
Licensed as MIT. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
