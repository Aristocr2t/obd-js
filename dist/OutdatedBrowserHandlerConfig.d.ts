export interface OutdatedBrowserHandlerConfigInterface {
    minVersions?: {
        [key: string]: any;
    };
    templateUrl?: string;
    template?: string;
    userAgent?: string;
}
export declare class OutdatedBrowserHandlerConfig implements OutdatedBrowserHandlerConfigInterface {
    minVersions: {
        [key: string]: any;
    };
    templateUrl: string;
    template: string;
    userAgent: string;
    constructor(config?: OutdatedBrowserHandlerConfigInterface);
}
