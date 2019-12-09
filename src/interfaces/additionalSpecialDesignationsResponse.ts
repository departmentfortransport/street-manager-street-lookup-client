import { AdditionalSpecialDesignationCode, AdditionalSpecialDesignationsPeriodicityCode } from './referenceTypes'

export interface AdditionalSpecialDesignationsResponse {
  street_special_desig_code: AdditionalSpecialDesignationCode
  special_desig_location_text?: string
  special_desig_description: string
  special_desig_start_time?: number
  special_desig_end_time?: number
  special_desig_periodicity_code?: AdditionalSpecialDesignationsPeriodicityCode
}
