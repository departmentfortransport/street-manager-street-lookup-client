import { GeoJSONCentrePoint } from './geojsonTypes'

export interface StreetSummaryResponse {
  street_descriptor: string
  area: string
  town: string
  usrn: number
  administrative_area: string
  street_centre_point: GeoJSONCentrePoint
}
