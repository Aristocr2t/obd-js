export interface OutdatedBrowserHandlerConfigInterface {
  minVersions?: { [key: string]: any };
  sourceUrl?: string;
  template?: string;
  userAgent?: string;
}

export class OutdatedBrowserHandlerConfig implements OutdatedBrowserHandlerConfigInterface {
  public minVersions: {
    android?: string,
    chrome?: string,
    edge?: string,
    firefox?: string,
    ios?: string,
    msie?: string,
    opera?: string,
    safari?: string,
    [key: string]: any
  } = {};
  public sourceUrl: string;
  public template = ``;
  public userAgent: string;

  constructor(config?: OutdatedBrowserHandlerConfigInterface) {
    const { minVersions, userAgent, sourceUrl, template } = config || {} as OutdatedBrowserHandlerConfigInterface;
    if (minVersions && typeof minVersions === 'object') {
      Object.assign(this.minVersions, minVersions);
    }
    if (typeof userAgent === 'string') {
      this.userAgent = userAgent;
    }
    if (typeof sourceUrl === 'string') {
      this.sourceUrl = sourceUrl;
    } else if (typeof template === 'string') {
      this.template = template;
    }
  }
}
