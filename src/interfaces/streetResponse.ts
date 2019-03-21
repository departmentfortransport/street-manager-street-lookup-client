import { AdditionalSpecialDesignationsResponse } from './additionalSpecialDesignationsResponse'

export interface StreetResponse {
  usrn: number
  street_descriptor: string
  area: string
  town: string
  authority: string
  authority_swa_code: string
  road_category: number
  traffic_sensitive: boolean
  additional_special_designations_response: AdditionalSpecialDesignationsResponse[]
  street_line: string
}
