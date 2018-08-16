import { StreetResponse } from '../interfaces/StreetResponse';
export interface StreetManagerStreetLookupClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerStreetLookupClient {
    private config;
    private axios;
    constructor(config: StreetManagerStreetLookupClientConfig);
    isAvailable(): Promise<boolean>;
    getStreet(easting: number, northing: number): Promise<StreetResponse>;
    private httpHandler;
}
