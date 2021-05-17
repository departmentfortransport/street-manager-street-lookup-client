import { AdditionalSpecialDesignationCodeResponse, AdditionalSpecialDesignationsPeriodicityCodeResponse } from './referenceTypes';
import { GeoJSONGeometry } from './geojsonTypes';
export interface AdditionalSpecialDesignationsResponse {
    street_special_desig_code: AdditionalSpecialDesignationCodeResponse;
    street_special_desig_code_string?: string | null;
    special_desig_location_text?: string | null;
    special_desig_description?: string | null;
    special_desig_start_time?: number | null;
    special_desig_end_time?: number | null;
    special_desig_periodicity_code?: AdditionalSpecialDesignationsPeriodicityCodeResponse | null;
    special_desig_periodicity_code_string?: string | null;
    asd_coordinate_geometry?: GeoJSONGeometry | null;
    whole_road?: boolean | null;
    special_desig_start_date?: Date | null;
    special_desig_end_date?: Date | null;
}
