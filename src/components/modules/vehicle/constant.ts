export const CarrierStatus = {
  ACTIVE: "ACTIVE",
};

export const carrierStatusOptions = [
  {
    value: CarrierStatus.ACTIVE,
    key: "Active",
  },
];

export const DocumentType = {
  CDL: "CDL",
  MC: "MC",
  BOL: "BOL",
  FUEL_RECEIPT: "Fuel Receipt",
  ACCIDENT_PHOTO: "Accident Photo",
  CITATION: "Citation",
  SCALE_TICKET: "Scale Ticket",
  OTHER: "Other",
};

export const getDocumentByType = (type: any) => {
  return carrierData.documents.find((doc: any) => doc.value === type)?.key;
};
export const getDocumentNameByType = (type: any) => {
  return carrierData.documents.find((doc: any) => doc.key === type)?.value;
};

export const COUNTRY = {
  USA: "USA",
  CANADA: "CANADA",
};

export const PAGE_STATUS = {
  VIEW: "VIEW",
  EDIT: "EDIT",
};

export const VehicleField = {
  IDENTIFICATOR: "identificator",
  VIN: "vin",
  MAKE: "make",
  MODEL: "model",
  FUEL_TYPE: "fuel_type",
  CARRIER: "carrier",
  STATUS: "status",
  NOTES: "notes",
  LICENSE_PLATE: "license_plate",
  LICENSE_ISSUING: "license_issuing",
  LICENSE_EXPIRATION: "license_expiration",
};

export const DriverField = {
  CARRIER: "carrier",
  FIRST_NAME: "first_name",
  LAST_NAME: "last_name",
  USERNAME: "username",
  STATUS: "status",
  PHONE: "phone",
  EMAIL: "email",
  CDL: "cdl",
  CDL_STATE: "cdl_state",
  CDL_EXPIRATION: "cdl_expiration",
  MEDICAL_CARD: "medical_card",
  MEDICAL_CARD_EXPIRATION: "medical_card_expiration",
  MEASUREMENT_SYSTEM: "measurement_system",
  DST: "dst",
  FIRST_DAY: "first_day",
  PERIOD_STARTING_TIME: "period_starting_time",
  COMPLIANCE_MODE: "compliance_mode",
  MOTION_TRASHOLD: "motion_threshold",
  CARGO_TYPE: "cargo_type",
  RESTART: "restart",
  REST_BREAK: "rest_break",
  SHORT_HAUL: "short_haul",
  PERSONAL_CONVEYANCE: "personal_conveyance",
  ADVERSE_CONDITIONS: "adverse_conditions",
  UNLIMITED_DOCUMENTS: "unlimited_documents",
  UNLIMITED_TRAILERS: "unlimited_trailers",
  YARD_MOVE: "yard_move",
  NOTES: "notes",
  SIGNATURES: "signatures",
  DRIVER_GROUP: "driver_group",
  TERMINAL: "terminal",
  DOCUMENTS: "documents",
};

export const CarrierField = {
  NAME: "name",
  ID: "id",
  DOT: "usdot",
  COMPANY: "company",
  EMAIL: "email",
  PASSWORD: "password",
  PHONE: "phone",
  EMAIL_SECOND: "email_second",
  PERSON: "person",
  ACTIVE: "active",
  TZ: "tz",
  STATUS: "status",
  NOTES: "notes",
  MCNUMBER: "mcnumber",
  LOGO: "logo",
  ADDRESS: {
    COUNTRY: "country",
    AREA: "area",
    STATE: "state",
    NUMBER_STREET: "number_street",
    ADDRESS_INDEX: "address_index",
  },
  SETTINGS: {
    DST: "dst",
    FIRST_DAY: "first_day",
    MEASURENMENT_SYSTEM: "measurement_system",
    COMPLIANCE_MODE: "compliance_mode",
    MOTION_TRASHOLD: "motion_trashhold",
    MOTION_TRASHOLD_TYPE: "motion_trashold_type",
    CARGO_TYPE: "cargo_type",
    RESTART: "restart",
    REST_BREAK: "rest_break",
    SHORT_HAUL: "short_haul",
    PERSONAL_CONVEYANCE: "personal_conveyance",
    ADVERSE_CONDITIONS: "adverse_conditions",
    UNLIMITED_DOCUMENTS: "unlimited_documents",
    UNLIMITED_TRAILERS: "unlimited_trailers",
    YARD_MOVE: "yard_move",
    EXEMPT_DRIVER: "exempt_driver",
    EXEMPT_DRIVER_NOTICE: "exempt_driver_notice",
    NOTES: "notes",

    PERIOD_STARTING_TIME: "period_starting_time",
    NOTICE: "notice",
  },
};

export const carrierCheckboxGroup = [
  {
    key: "Short-Haul Exception",
    value: CarrierField.SETTINGS.SHORT_HAUL,
  },
  {
    key: "Exempt Driver",
    value: CarrierField.SETTINGS.EXEMPT_DRIVER,
  },
  {
    key: "Personal Conveyance",
    value: CarrierField.SETTINGS.PERSONAL_CONVEYANCE,
  },
  {
    key: "Yard Moves",
    value: CarrierField.SETTINGS.YARD_MOVE,
  },
  {
    key: "Adverse Driver Conditions",
    value: CarrierField.SETTINGS.ADVERSE_CONDITIONS,
  },
  {
    key: "Unlimited Trailers",
    value: CarrierField.SETTINGS.UNLIMITED_TRAILERS,
  },
  {
    key: "Unlimited Shipping Documents",
    value: CarrierField.SETTINGS.UNLIMITED_DOCUMENTS,
  },
];
// Alaska Standard Time (-09)

// Central Standard Time (-06)

// Eastern Standard Time (-05)

// Hawaiian Standard Time (-10)

// Arizona Mountain Standard Time (-07)

// Mountain Standard Time (-07)

// Pacific Standard Time (-08)

export const timeZoneOptions = [
  {
    key: "Eastern Standard Time (-05)",
    value: "-5",
  },
  {
    key: "Central Standard Time (-06)",
    value: "-6",
  },
  {
    key: "Arizona Mountain Standard Time (-07)",
    value: "-7",
  },
  {
    key: "Mountain Standard Time (-07)",
    value: "-7",
  },

  {
    key: "Pacific Standard Time (-08)",
    value: "-08",
  },
  {
    key: "Alaska Standard Time (-09)",
    value: "-9",
  },

  {
    key: "Hawaiian Standard Time (-10)",
    value: "-10",
  },
];

export const statusOption = [
  {
    key: "Active",
    value: "Active",
  },
  {
    key: "Inactive",
    value: "Inactive",
  },
  {
    key: "Blocked",
    value: "Blocked",
  },
];

export const countriesOption = [
  {
    value: COUNTRY.USA,
    key: "USA",
  },
  {
    value: COUNTRY.CANADA,
    key: "Canada",
  },
];

export const carrierData = {
  hos_rules: [
    {
      key: 1,
      value: "USA 70 h / 8 day",
    },
    {
      key: 2,
      value: "USA 60 h / 7 day",
    },
  ],
  compliance_mode: [
    {
      key: 1,
      value: "ELD",
    },
    {
      key: 2,
      value: "ELog",
    },
  ],
  dst: [
    {
      key: 0,
      value: "None",
    },
    {
      key: 1,
      value: "USA and Canada",
    },
  ],
  first_day: [
    {
      key: 1,
      value: "Monday",
    },
    {
      key: 0,
      value: "Sunday",
    },
  ],
  measurement_system: [
    {
      key: 1,
      value: "Metric (km., km/h., l.,)",
    },
    {
      key: 2,
      value: "Imperial (mi., mph., gal.,)",
    },
    {
      key: 3,
      value: "Metric with gallons",
    },
  ],
  restart: [
    {
      key: 1,
      value: "24 Hour Restart",
    },
    {
      key: 2,
      value: "34 Hour Restart",
    },
  ],
  rest_break: [
    {
      key: 1,
      value: "30 Minute Rest Break Required",
    },
    {
      key: 2,
      value: "No Rest Break Required",
    },
  ],
  cargo_type: [
    {
      key: 1,
      value: "Property",
    },
    {
      key: 2,
      value: "Passenger",
    },
    {
      key: 3,
      value: "Oil and Gas",
    },
  ],
  status: [
    {
      key: 1,
      value: "Active",
    },
    {
      key: 0,
      value: "Inactive",
    },
    {
      key: 2,
      value: "Blocked",
    },
  ],
  countries: [
    {
      key: 1,
      value: "USA",
    },
  ],
  states: [
    {
      key: 1,
      code: "AL",
      value: "Alabama",
    },
    {
      key: 2,
      code: "AK",
      value: "Alaska",
    },
    {
      key: 3,
      code: "AZ",
      value: "Arizona",
    },
    {
      key: 4,
      code: "AR",
      value: "Arkansas",
    },
    {
      key: 5,
      code: "CA",
      value: "California",
    },
    {
      key: 6,
      code: "CO",
      value: "Colorado",
    },
    {
      key: 7,
      code: "CT",
      value: "Connecticut",
    },
    {
      key: 8,
      code: "DE",
      value: "Delaware",
    },
    {
      key: 9,
      code: "FL",
      value: "Florida",
    },
    {
      key: 10,
      code: "GA",
      value: "Georgia",
    },
    {
      key: 11,
      code: "HI",
      value: "Hawaii",
    },
    {
      key: 12,
      code: "ID",
      value: "Idaho",
    },
    {
      key: 13,
      code: "IL",
      value: "Illinois",
    },
    {
      key: 14,
      code: "IN",
      value: "Indiana",
    },
    {
      key: 15,
      code: "IA",
      value: "Iowa",
    },
    {
      key: 16,
      code: "KS",
      value: "Kansas",
    },
    {
      key: 17,
      code: "KY",
      value: "Kentucky",
    },
    {
      key: 18,
      code: "LA",
      value: "Louisiana",
    },
    {
      key: 19,
      code: "ME",
      value: "Maine",
    },
    {
      key: 20,
      code: "MD",
      value: "Maryland",
    },
    {
      key: 21,
      code: "MA",
      value: "Massachusetts",
    },
    {
      key: 22,
      code: "MI",
      value: "Michigan",
    },
    {
      key: 23,
      code: "MN",
      value: "Minnesota",
    },
    {
      key: 24,
      code: "MS",
      value: "Mississippi",
    },
    {
      key: 25,
      code: "MO",
      value: "Missouri",
    },
    {
      key: 26,
      code: "MT",
      value: "Montana",
    },
    {
      key: 27,
      code: "NE",
      value: "Nebraska",
    },
    {
      key: 28,
      code: "NV",
      value: "Nevada",
    },
    {
      key: 29,
      code: "NH",
      value: "New Hampshire",
    },
    {
      key: 30,
      code: "NJ",
      value: "New Jersey",
    },
    {
      key: 31,
      code: "NM",
      value: "New Mexico",
    },
    {
      key: 32,
      code: "NY",
      value: "New York",
    },
    {
      key: 33,
      code: "NC",
      value: "North Carolina",
    },
    {
      key: 34,
      code: "ND",
      value: "North Dakota",
    },
    {
      key: 35,
      code: "OH",
      value: "Ohio",
    },
    {
      key: 36,
      code: "OK",
      value: "Oklahoma",
    },
    {
      key: 37,
      code: "OR",
      value: "Oregon",
    },
    {
      key: 38,
      code: "PA",
      value: "Pennsylvania",
    },
    {
      key: 39,
      code: "RI",
      value: "Rhode Island",
    },
    {
      key: 40,
      code: "SC",
      value: "South Carolina",
    },
    {
      key: 41,
      code: "SD",
      value: "South Dakota",
    },
    {
      key: 42,
      code: "TN",
      value: "Tennessee",
    },
    {
      key: 43,
      code: "TX",
      value: "Texas",
    },
    {
      key: 44,
      code: "UT",
      value: "Utah",
    },
    {
      key: 45,
      code: "VT",
      value: "Vermont",
    },
    {
      key: 46,
      code: "VA",
      value: "Virginia",
    },
    {
      key: 47,
      code: "WA",
      value: "Washington",
    },
    {
      key: 48,
      code: "WV",
      value: "West Virginia",
    },
    {
      key: 49,
      code: "WI",
      value: "Wisconsin",
    },
    {
      key: 50,
      code: "WY",
      value: "Wyoming",
    },
  ],
  tz: [
    {
      key: 1,
      value: "Alaska Standard Time (AKST /-09)",
    },
    {
      key: 2,
      value: "Central Standard Time (CST /-06)",
    },
    {
      key: 3,
      value: "Eastern Standard Time (EST /-05)",
    },
    {
      key: 4,
      value: "Hawaiian Standard Time (HST /-10)",
    },
    {
      key: 5,
      value: "Arizona Mountain Standard Time (AMST /-07)",
    },
    {
      key: 6,
      value: "Mountain Standard Time (MST /-07)",
    },
    {
      key: 7,
      value: "Pacific Standard Time (PST /-08)",
    },
  ],
  documents: [
    {
      key: 1,
      value: "CDL",
    },
    {
      key: 2,
      value: "MC",
    },
    {
      key: 3,
      value: "BOL",
    },
    {
      key: 4,
      value: "Fuel Receipt",
    },
    {
      key: 5,
      value: "Accident Photo",
    },
    {
      key: 6,
      value: "Citation",
    },
    {
      key: 7,
      value: "Scale Ticket",
    },
    {
      key: 8,
      value: "Other",
    },
  ],
};
