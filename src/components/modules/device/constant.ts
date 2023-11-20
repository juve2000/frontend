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

export const DeviceField = {
  identificator: "identificator",
  TYPE: "type",
  MAC_ADDRESS: "mac_address",
  MODEL: "model",
  FUEL_TYPE: "fuel_type",
  CARRIER: "carrier",
  STATUS: "status",
  SERIAL_NUMBER: "serial_number",
  FIRMWARE: "firmware",
  NOTES: "notes",
  NAME: "name",
};

export const DeviceConstant = {
  type: [
    {
      key: 1,
      value: "ELD",
    },
    {
      key: 2,
      value: "GPS Tracker",
    },
    {
      key: 3,
      value: "Dash Cam",
    },
  ],
};
