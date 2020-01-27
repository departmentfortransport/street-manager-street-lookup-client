export enum AdditionalSpecialDesignationCode {
  protected_street = 1,
  traffic_sensitive = 2,
  special_engineering_difficulty = 3,
  proposed_special_engineering_difficulty = 6,
  level_crossing_safety_zone = 8,
  environmentally_sensitive_areas = 9,
  structures_not_designated_special_engineering_difficulty = 10,
  pipelines_and_specialist_cables = 12,
  priority_lanes = 13,
  lane_rental = 16,
  streets_subject_to_early_notification_of_immediate_activities = 17,
  special_events = 18,
  parking_bays_and_restrictions = 19,
  pedestrian_crossings_traffic_signals_and_traffic_sensors = 20,
  speed_limits = 21,
  transport_authority_critical_apparatus = 22,
  strategic_route = 23,
  street_lighting = 24,
  drainage_and_flood_risk = 25,
  unusual_traffic_layout = 26,
  local_considerations = 27,
  winter_maintenance_routes = 28,
  hgv_approved_routes = 29,
  emergency_services_routes = 30
}

export enum AdditionalSpecialDesignationsPeriodicityCode {
  everyday = 1,
  working_days_only = 2,
  weekends = 3,
  monday_only = 7,
  tuesday_only = 8,
  wednesday_only = 9,
  thursday_only = 10,
  friday_only = 11,
  saturday_only = 12,
  sunday_only = 13,
  public_and_bank_holidays = 14,
  continuous_62 = 15,
  special_arrangements_63 = 16
}

export enum Role {
  Planner = 'Planner',
  HighwayAuthority = 'HighwayAuthority',
  Admin = 'Admin',
  Contractor = 'Contractor',
  API = 'API',
  UI = 'UI',
  DataExport = 'DataExport'
}
