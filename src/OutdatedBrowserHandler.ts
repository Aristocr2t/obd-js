import * as bowser from 'bowser';
import { OutdatedBrowserHandlerConfigInterface, OutdatedBrowserHandlerConfig } from "./OutdatedBrowserHandlerConfig";

export class OutdatedBrowserHandler {
  public static async handle(parentElement: HTMLElement, config?: OutdatedBrowserHandlerConfigInterface): Promise<boolean> {
    config = new OutdatedBrowserHandlerConfig(config);
    if (bowser.isUnsupportedBrowser(config.minVersions, config.userAgent) && parentElement) {
      if (config.sourceUrl) {
        config.template = await this.createRequest({
          url: config.sourceUrl,
          methid: 'GET',
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      const element = document.createElement('div');
      element.setAttribute('class', 'obh-wrapper');
      Object.assign(element.style, {
        zIndex: '10000',
        position: 'fixed',
        top: '0', left: '0', bottom: '0', right: '0',
        backgroundColor: '#fff'
      });
      parentElement.appendChild(element);
      const elementContainer = document.createElement('div');
      elementContainer.setAttribute('class', 'obh-container');
      Object.assign(elementContainer.style, {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden'
      });
      element.appendChild(elementContainer);
      elementContainer.innerHTML = config.template;
      return false;
    }
    return true;
  }

  private static createRequest(options: any): Promise<string> {
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
          resolve(xhr.responseText || '');
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(options.body);
    });
  }
}
