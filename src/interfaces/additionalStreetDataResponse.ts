export interface AdditionalStreetDataResponse {
  // Fields defined by Data Transfer Format 8.1 for the National Street Gazetteer (NSG), Special Designation Record (type 63)
  street_special_desig_num,
  street_special_desig_code,
  whole_road,
  record_start_date,
  last_update_date,
  record_end_date,
  special_desig_periodicity_code,
  special_desig_location_text,
  special_desig_start_date,
  special_desig_end_date,
  special_desig_start_time,
  special_desig_end_time,
  special_desig_description,
  swa_org_ref_consultant,
  district_ref_consultant,
  source_text,
  special_desig_geojson
}
