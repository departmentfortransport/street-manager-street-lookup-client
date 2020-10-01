export declare enum GeoJSONFeatureTypeResponse {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiLineString = "MultiLineString",
    upcoming_enum = "upcoming_enum"
}
export declare enum GeoJSONCentrePointType {
    Point = "Point"
}
export declare enum GeoJSONMultiLineStringType {
    MultiLineString = "MultiLineString"
}
export interface GeoJSONGeometry {
    type: GeoJSONFeatureTypeResponse;
    type_string: string;
    coordinates: any;
}
export interface GeoJSONCentrePoint {
    type: GeoJSONCentrePointType;
    coordinates: number[];
}
export interface GeoJSONMultiLineString {
    type: GeoJSONMultiLineStringType;
    coordinates: number[][][];
}
