import { StreetResponse } from '../interfaces/streetResponse';
import { AdditionalStreetDataResponse } from '../interfaces/additionalStreetDataResponse';
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
    getStreetGeojson(requestId: string, usrn: string): Promise<string>;
    getStreetAdditionalStreetData(requestId: string, usrn: string): Promise<AdditionalStreetDataResponse[]>;
    private httpHandler;
    private generateRequestConfig;
}
