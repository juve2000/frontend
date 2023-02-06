export const CarrierStatus = {
  ACTIVE: "ACTIVE",
};

export const carrierStatusOptions = [
  {
    value: CarrierStatus.ACTIVE,
    key: "Active",
  },
];

export const CarrierField = {
  NAME: "name",
  DOT: "dot",
  COMPANY: "company",
  EMAIL: "email",
  PHONE: "phone",
  EMAIL_SECOND: "email_second",
  PERSON: "person",
  ACTIVE: "active",
  ADDRESS: {
    COUNTRY: "country",
    AREA: "area",
    STATE: "state",
    NUMBER_STREET: "number_street",
  },
  SETTINGS: {
    DST: "dst",
    FIRST_DAY: "first_day",
    COMPLIANCE_MODE: "compliance_mode",
    MOTION_TRASHOLD: "motion_trashhold",
    MOTION_TRASHOLD_TYPE: "motion_trashold_type",
    CARGO_TYPE: "cargo_type",
    RESTART: "restart",
    REST_BREAK: "rest_break",
    SHORT_HAUL: "short_haul",
    PERSONAL_CONVEYANCE: "personal_conveyance",
    YARD_MOVE: "yard_move",
    EXEMPT_DRIVER: "exempt_driver",
    PERIOD_STARTING_TIME: "period_starting_time",
  },
};
