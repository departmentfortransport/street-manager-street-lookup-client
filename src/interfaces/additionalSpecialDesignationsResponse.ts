import { AdditionalSpecialDesignationCodeResponse, AdditionalSpecialDesignationsPeriodicityCodeResponse } from './referenceTypes'
import { GeoJSONGeometry } from './geojsonTypes'

export interface AdditionalSpecialDesignationsResponse {
  street_special_desig_code: AdditionalSpecialDesignationCodeResponse
  street_special_desig_code_string?: null | string
  special_desig_location_text?: null | string
  special_desig_description?: null | string
  special_desig_start_time?: null | number
  special_desig_end_time?: null | number
  special_desig_periodicity_code?: null | AdditionalSpecialDesignationsPeriodicityCodeResponse
  special_desig_periodicity_code_string?: null | string
  asd_coordinate_geometry?: null | GeoJSONGeometry
  whole_road?: null | boolean
  special_desig_start_date?: null | Date
  special_desig_end_date?: null | Date
}
