import { OutdatedBrowserHandler } from './index';

describe('OutdatedBrowserHandler Tests', () => {
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
    templateUrl: 'http://frequencythemes.com/old-browser-theme/',
    userAgent: ''
  });
  it('should create prototype of `OutdatedBrowserHandler` class', () => {
    expect(obh).toBeTruthy();
    obh.run();
  });
  // it('should run browser testing script', () => {
  //   expect(obh.run).toHaveBeenCalled();
  // });
});
