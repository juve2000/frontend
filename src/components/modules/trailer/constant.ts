export const CarrierStatus = {
  ACTIVE: "ACTIVE",
};

export const carrierStatusOptions = [
  {
    value: CarrierStatus.ACTIVE,
    key: "Active",
  },
];

export const COUNTRY = {
  USA: "USA",
  CANADA: "CANADA",
};

export const PAGE_STATUS = {
  VIEW: "VIEW",
  EDIT: "EDIT",
};

export const TrailerField = {
  NAME: "NAME",
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
  LICENSE_NUMBER: "license_number",
  LICENSE_STATE: "license_state",
  TYPE: "type",
  OWNERSHIP: "ownership",
  YEAR: "YEAR",
};

export const TrailerConstant = {
  type: [
    {
      key: 1,
      value: "Enclosed/Dry Van",
    },
    {
      key: 2,
      value: "Standard Flatbed",
    },
    {
      key: 3,
      value: "Reefer",
    },
    {
      key: 4,
      value: "Conestoga",
    },
    {
      key: 5,
      value: "Drop-Desk/Step Deck",
    },
    {
      key: 6,
      value: "Hotshot",
    },
    {
      key: 7,
      value: "Extendable Drop-Deck",
    },
    {
      key: 8,
      value: "RGN",
    },
    {
      key: 9,
      value: "Extendable RGN",
    },
  ],
  ownership: [
    {
      key: 1,
      value: "Owned",
    },
    {
      key: 2,
      value: "Leased",
    },
    {
      key: 3,
      value: "Rented",
    },
    {
      key: 4,
      value: "3rd Party",
    },
  ],
};
