export enum GeoJSONFeatureTypeResponse {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  MultiLineString = 'MultiLineString',
  upcoming_enum = 'upcoming_enum'
}

export enum GeoJSONCentrePointType {
  Point = 'Point'
}

export enum GeoJSONMultiLineStringType {
  MultiLineString = 'MultiLineString'
}

export interface GeoJSONGeometry {
  type: GeoJSONFeatureTypeResponse
  coordinates: any
}

export interface GeoJSONCentrePoint {
  type: GeoJSONCentrePointType
  coordinates: number[]
}

export interface GeoJSONMultiLineString {
  type: GeoJSONMultiLineStringType
  coordinates: number[][][]
}
