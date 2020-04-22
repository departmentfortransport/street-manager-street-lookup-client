export enum GeoJSONFeatureType {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  MultiLineString = 'MultiLineString'
}

export enum GeoJSONCentrePointType {
  Point = 'Point'
}

export enum GeoJSONMultiLineStringType {
  MultiLineString = 'MultiLineString'
}

export interface GeoJSONGeometry {
  type: GeoJSONFeatureType
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
