export interface OutdatedBrowserHandlerConfigInterface {
  minVersions?: { [key: string]: any };
  templateUrl?: string;
  template?: string;
  userAgent?: string;
}

export class OutdatedBrowserHandlerConfig implements OutdatedBrowserHandlerConfigInterface {
  public minVersions: { [key: string]: any } = {};
  public templateUrl: string;
  public template = ``;
  public userAgent: string;

  constructor(config?: OutdatedBrowserHandlerConfigInterface) {
    const { minVersions, userAgent, templateUrl, template } = config || {} as OutdatedBrowserHandlerConfigInterface;
    if (minVersions && typeof minVersions === 'object') {
      Object.assign(this.minVersions, minVersions);
    }
    if (typeof userAgent === 'string') {
      this.userAgent = userAgent;
    }
    if (typeof templateUrl === 'string') {
      this.templateUrl = templateUrl;
    } else if (typeof template === 'string') {
      this.template = template;
    }
  }
}
