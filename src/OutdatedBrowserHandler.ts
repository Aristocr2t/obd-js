import * as bowser from 'bowser';
import { OutdatedBrowserHandlerConfigInterface, OutdatedBrowserHandlerConfig } from "./OutdatedBrowserHandlerConfig";

export class OutdatedBrowserHandler {
  private element: HTMLDivElement;
  private config: OutdatedBrowserHandlerConfig;

  constructor(private parentElement: HTMLElement, config?: OutdatedBrowserHandlerConfigInterface) {
    this.config = new OutdatedBrowserHandlerConfig(config);
  }

  public async run(): Promise<void> {
    if (bowser.isUnsupportedBrowser(this.config.minVersions, this.config.userAgent) && this.parentElement) {
      if (this.config.templateUrl) {
        this.config.template = await this.createRequest({
          url: this.config.templateUrl,
          methid: 'GET',
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      this.element = document.createElement('div');
      Object.assign(this.element.style, {
        position: 'fixed',
        top: '0', left: '0', bottom: '0', right: '0',
        backgroundColor: '#fff'
      });
      this.parentElement.appendChild(this.element);
      this.element.innerHTML = this.config.template;
    }
  }

  private createRequest(options: any): Promise<string> {
    return new Promise<string>((resolve: any, reject: any) => {
      let xhr = new XMLHttpRequest();
      xhr.open(options.method || 'GET', options.url);
      if (options.headers) {
        Object.keys(options.headers).forEach(key => {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response.body || '');
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(options.body);
    });
  }
}
