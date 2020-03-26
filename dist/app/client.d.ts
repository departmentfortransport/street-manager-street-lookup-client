import { StreetResponse } from '../interfaces/streetResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { StreetSummaryResponse } from '../interfaces/streetSummaryResponse';
export interface StreetManagerStreetLookupClientConfig {
    baseURL: string;
    timeout?: number;
    disableCertificateVerification?: boolean;
}
export declare class StreetManagerStreetLookupClient {
    private config;
    private axios;
    constructor(config: StreetManagerStreetLookupClientConfig);
    status(): Promise<void>;
    getStreets(config: RequestConfig, easting: number, northing: number): Promise<StreetResponse[]>;
    getStreetsByUsrn(config: RequestConfig, usrn: number): Promise<StreetResponse>;
    getStreetsByQuery(config: RequestConfig, query: string): Promise<StreetSummaryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
