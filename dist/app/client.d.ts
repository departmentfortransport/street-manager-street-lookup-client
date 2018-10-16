import { StreetResponse } from '../interfaces/streetResponse';
export interface StreetManagerStreetLookupClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerStreetLookupClient {
    private config;
    private axios;
    constructor(config: StreetManagerStreetLookupClientConfig);
    isAvailable(): Promise<boolean>;
    getStreet(requestId: string, easting: number, northing: number): Promise<StreetResponse>;
    private httpHandler;
    private generateRequestConfig;
}
