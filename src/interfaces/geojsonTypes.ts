export enum GeoJSONCentrePointType {
  Point = 'Point'
}

export enum GeoJSONMultiLineStringType {
  MultiLineString = 'MultiLineString'
}

export interface GeoJSONCentrePoint {
  type: GeoJSONCentrePointType
  coordinates: number[]
}

export interface GeoJSONMultiLineString {
  type: GeoJSONMultiLineStringType
  coordinates: number[][][]
}

