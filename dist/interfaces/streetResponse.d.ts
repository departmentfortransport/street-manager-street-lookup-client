import { AdditionalSpecialDesignationsResponse } from './additionalSpecialDesignationsResponse';
import { PrimaryNoticeAuthority } from './primaryNoticeAuthority';
import { InterestAuthority } from './interestAuthority';
import { GeoJSONCentrePoint, GeoJSONMultiLineString } from './geojsonTypes';
export interface StreetResponse {
    usrn: number;
    street_descriptor: string;
    area: string;
    town: string;
    authority: string;
    authority_swa_code: string;
    road_category: number;
    traffic_sensitive: boolean;
    primary_notice_authorities: PrimaryNoticeAuthority[];
    interest_authorities: InterestAuthority[];
    additional_special_designations_response: AdditionalSpecialDesignationsResponse[];
    street_line?: GeoJSONMultiLineString;
    street_centre_point?: GeoJSONCentrePoint;
}
