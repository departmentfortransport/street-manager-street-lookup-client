import { AdditionalSpecialDesignationCodeResponse, AdditionalSpecialDesignationsPeriodicityCodeResponse } from './referenceTypes';
import { GeoJSONGeometry } from './geojsonTypes';
export interface AdditionalSpecialDesignationsResponse {
    street_special_desig_code: AdditionalSpecialDesignationCodeResponse;
    street_special_desig_code_string?: string;
    special_desig_location_text?: string;
    special_desig_description?: string;
    special_desig_start_time?: number;
    special_desig_end_time?: number;
    special_desig_periodicity_code?: AdditionalSpecialDesignationsPeriodicityCodeResponse;
    special_desig_periodicity_code_string?: string;
    asd_coordinate_geometry?: GeoJSONGeometry;
    whole_road?: boolean;
    special_desig_start_date?: Date;
    special_desig_end_date?: Date;
}
