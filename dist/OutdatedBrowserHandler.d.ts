import { OutdatedBrowserHandlerConfigInterface } from "./OutdatedBrowserHandlerConfig";
export declare class OutdatedBrowserHandler {
    private parentElement;
    private element;
    private config;
    constructor(parentElement: HTMLElement, config?: OutdatedBrowserHandlerConfigInterface);
    run(): Promise<void>;
    private createRequest(options);
}
