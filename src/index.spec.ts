import { OutdatedBrowserHandler } from './index';

describe('OutdatedBrowserHandler Tests', () => {
  it('should handle browser', () => {
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
      userAgent: ''
    }).then(result => {
      expect(result).toBeDefined();
    });
  });
});
