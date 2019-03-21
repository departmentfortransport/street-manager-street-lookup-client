import { StreetResponse } from '../interfaces/streetResponse';
import { RequestConfig } from '../interfaces/requestConfig';
export interface StreetManagerStreetLookupClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerStreetLookupClient {
    private config;
    private axios;
    constructor(config: StreetManagerStreetLookupClientConfig);
    status(): Promise<void>;
    getStreets(config: RequestConfig, easting: number, northing: number): Promise<StreetResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
