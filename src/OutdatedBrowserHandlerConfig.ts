export interface BowserFlags {
  android?: any;
  bada?: any;
  blackberry?: any;
  blink?: any;
  chrome?: any;
  chromeos?: any;
  chromium?: any;
  firefox?: any;
  firefoxos?: any;
  gecko?: any;
  ios?: any;
  kMeleon?: any;
  linux?: any;
  mac?: any;
  msedge?: any;
  msie?: any;
  opera?: any;
  phantom?: any;
  qupzilla?: any;
  safari?: any;
  sailfish?: any;
  samsungBrowser?: any;
  seamonkey?: any;
  silk?: any;
  sleipnir?: any;
  tizen?: any;
  ucbrowser?: any;
  vivaldi?: any;
  webkit?: any;
  webos?: any;
  windows?: any;
  windowsphone?: any;
  mobile?: any;
  tablet?: any;
  [key: string]: any
}

export interface OutdatedBrowserHandlerConfigInterface {
  minVersions?: BowserFlags;
  sourceUrl?: string;
  template?: string;
  userAgent?: string;
}

export class OutdatedBrowserHandlerConfig implements OutdatedBrowserHandlerConfigInterface {
  public minVersions: BowserFlags = {};
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
