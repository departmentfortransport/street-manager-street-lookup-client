import { StreetResponse } from '../interfaces/streetResponse';
export interface StreetManagerStreetLookupClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerStreetLookupClient {
    private config;
    private axios;
    constructor(config: StreetManagerStreetLookupClientConfig);
    setAuthTokenHeader(token: string): void;
    isAvailable(): Promise<boolean>;
    getStreet(easting: number, northing: number): Promise<StreetResponse>;
    private httpHandler;
}
