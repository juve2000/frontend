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

export const RoleField = {
  NAME: "name",
  DESCRIPTION: "description",
  USERS: "users",
  PERMISSIONS: "permissions",
};

const getPermissionsByRole = (role: string) => {
  let permissions: any = [];
  switch (role) {
    // case ROLES.USER:
    //   permissions = [...permissions, ...USER_PERMISSIONS];
    //   return
    // case ROLES.DIRECTOR:
    //   permissions = [...permissions, ...CARRIER_PERMISSIONS];
    //   return
    case ROLES.ADMIN:
      return [...ALL_PERMISSION];
  }
};

export const ROLES = {
  USER: "USER",
  DIRECTOR: "DIRECTOR",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN" || "Super admin" || 1,
};

export const CarrierPermission = {
  CARRIER_LIST: "CARRIER_LIST",
  CARRIER_SHOW: "CARRIER_SHOW",
  CARRIER_EDIT: "CARRIER_EDIT",
  CARRIER_DELETE: "CARRIER_DELETE",
  CARRIER_CREATE: "CARRIER_CREATE",
};

export const CARRIER_PERMISSIONS = [
  CarrierPermission.CARRIER_LIST,
  CarrierPermission.CARRIER_SHOW,
  CarrierPermission.CARRIER_EDIT,
  CarrierPermission.CARRIER_DELETE,
  CarrierPermission.CARRIER_CREATE,
];

export const DriverPermission = {
  DRIVER_LIST: "DRIVER_LIST",
  DRIVER_SHOW: "DRIVER_SHOW",
  DRIVER_EDIT: "DRIVER_EDIT",
  DRIVER_DELETE: "DRIVER_DELETE",
  DRIVER_CREATE: "DRIVER_CREATE",
};

export const DRIVER_PERMISSIONS = [
  DriverPermission.DRIVER_LIST,
  DriverPermission.DRIVER_SHOW,
  DriverPermission.DRIVER_EDIT,
  DriverPermission.DRIVER_DELETE,
  DriverPermission.DRIVER_CREATE,
];

export const DevicePermission = {
  DEVICE_LIST: "DEVICE_LIST",
  DEVICE_SHOW: "DEVICE_SHOW",
  DEVICE_EDIT: "DEVICE_EDIT",
  DEVICE_DELETE: "DEVICE_DELETE",
  DEVICE_CREATE: "DEVICE_CREATE",
};

export const DEVICE_PERMISSIONS = [
  DevicePermission.DEVICE_LIST,
  DevicePermission.DEVICE_SHOW,
  DevicePermission.DEVICE_EDIT,
  DevicePermission.DEVICE_DELETE,
  DevicePermission.DEVICE_CREATE,
];

export const DriverGroupPermission = {
  DRIVER_GROUP_LIST: "DRIVER_GROUP_LIST",
  DRIVER_GROUP_SHOW: "DRIVER_GROUP_SHOW",
  DRIVER_GROUP_EDIT: "DRIVER_GROUP_EDIT",
  DRIVER_GROUP_DELETE: "DRIVER_GROUP_DELETE",
  DRIVER_GROUP_CREATE: "DRIVER_GROUP_CREATE",
};

export const DRIVER_GROUP_PERMISSIONS = [
  DriverGroupPermission.DRIVER_GROUP_LIST,
  DriverGroupPermission.DRIVER_GROUP_SHOW,
  DriverGroupPermission.DRIVER_GROUP_EDIT,
  DriverGroupPermission.DRIVER_GROUP_DELETE,
  DriverGroupPermission.DRIVER_GROUP_CREATE,
];

export const VehiclePermission = {
  VEHICLE_LIST: "VEHICLE_LIST",
  VEHICLE_SHOW: "VEHICLE_SHOW",
  VEHICLE_EDIT: "VEHICLE_EDIT",
  VEHICLE_DELETE: "VEHICLE_DELETE",
  VEHICLE_CREATE: "VEHICLE_CREATE",
};

export const VEHICLE_PERMISSIONS = [
  VehiclePermission.VEHICLE_LIST,
  VehiclePermission.VEHICLE_SHOW,
  VehiclePermission.VEHICLE_EDIT,
  VehiclePermission.VEHICLE_DELETE,
  VehiclePermission.VEHICLE_CREATE,
];

export const TrailerPermission = {
  TRAILER_LIST: "TRAILER_LIST",
  TRAILER_SHOW: "TRAILER_SHOW",
  TRAILER_EDIT: "TRAILER_EDIT",
  TRAILER_DELETE: "TRAILER_DELETE",
  TRAILER_CREATE: "TRAILER_CREATE",
};

export const TRAILER_PERMISSIONS = [
  TrailerPermission.TRAILER_LIST,
  TrailerPermission.TRAILER_SHOW,
  TrailerPermission.TRAILER_EDIT,
  TrailerPermission.TRAILER_DELETE,
  TrailerPermission.TRAILER_CREATE,
];

export const RolePermission = {
  ROLE_LIST: "ROLE_LIST",
  ROLE_SHOW: "ROLE_SHOW",
  ROLE_EDIT: "ROLE_EDIT",
  ROLE_DELETE: "ROLE_DELETE",
  ROLE_CREATE: "ROLE_CREATE",
};

export const ROLE_PERMISSIONS = [
  RolePermission.ROLE_LIST,
  RolePermission.ROLE_SHOW,
  RolePermission.ROLE_EDIT,
  RolePermission.ROLE_DELETE,
  RolePermission.ROLE_CREATE,
];

export const MechanicPermission = {
  MECHANIC_LIST: "MECHANIC_LIST",
  MECHANIC_SHOW: "MECHANIC_SHOW",
  MECHANIC_EDIT: "MECHANIC_EDIT",
  MECHANIC_DELETE: "MECHANIC_DELETE",
  MECHANIC_CREATE: "MECHANIC_CREATE",
};

export const MECHANIC_PERMISSIONS = [
  MechanicPermission.MECHANIC_LIST,
  MechanicPermission.MECHANIC_SHOW,
  MechanicPermission.MECHANIC_EDIT,
  MechanicPermission.MECHANIC_DELETE,
  MechanicPermission.MECHANIC_CREATE,
];

export const UserPermission = {
  USER_LIST: "USER_LIST",
  USER_SHOW: "USER_SHOW",
  USER_EDIT: "USER_EDIT",
  USER_DELETE: "USER_DELETE",
  USER_CREATE: "USER_CREATE",
};

export const USER_PERMISSIONS = [
  UserPermission.USER_LIST,
  UserPermission.USER_SHOW,
  UserPermission.USER_EDIT,
  UserPermission.USER_DELETE,
  UserPermission.USER_CREATE,
];

export const CompanyPermission = {
  COMPANY_LIST: "COMPANY_LIST",
  COMPANY_SHOW: "COMPANY_SHOW",
  COMPANY_EDIT: "COMPANY_EDIT",
  COMPANY_DELETE: "COMPANY_DELETE",
  COMPANY_CREATE: "COMPANY_CREATE",
};

export const COMPANY_PERMISSIONS = [
  CompanyPermission.COMPANY_LIST,
  CompanyPermission.COMPANY_SHOW,
  CompanyPermission.COMPANY_EDIT,
  CompanyPermission.COMPANY_DELETE,
  CompanyPermission.COMPANY_CREATE,
];

export const OfficePermission = {
  OFFICE_LIST: "OFFICE_LIST",
  OFFICE_SHOW: "OFFICE_SHOW",
  OFFICE_EDIT: "OFFICE_EDIT",
  OFFICE_DELETE: "OFFICE_DELETE",
  OFFICE_CREATE: "OFFICE_CREATE",
};

export const OFFICE_PERMISSIONS = [
  OfficePermission.OFFICE_LIST,
  OfficePermission.OFFICE_SHOW,
  OfficePermission.OFFICE_EDIT,
  OfficePermission.OFFICE_DELETE,
  OfficePermission.OFFICE_CREATE,
];

export const SuperAdminPermission = {
  SUPER_ADMIN: "SUPER_ADMIN",
};

export const SUPER_ADMIN = [SuperAdminPermission.SUPER_ADMIN];

export const ALL_PERMISSION = [
  ...CARRIER_PERMISSIONS,
  ...USER_PERMISSIONS,
  ...COMPANY_PERMISSIONS,
  ...OFFICE_PERMISSIONS,
  ...DRIVER_PERMISSIONS,
  ...VEHICLE_PERMISSIONS,
  ...TRAILER_PERMISSIONS,
  ...DEVICE_PERMISSIONS,
  ...DRIVER_GROUP_PERMISSIONS,
  ...MECHANIC_PERMISSIONS,
  ...ROLE_PERMISSIONS,
  ...SUPER_ADMIN,
];

export const STRICT_PERMISSION = [
  ...CARRIER_PERMISSIONS,
  ...USER_PERMISSIONS,
  ...COMPANY_PERMISSIONS,
  ...OFFICE_PERMISSIONS,
  ...DRIVER_PERMISSIONS,
  ...VEHICLE_PERMISSIONS,
  ...TRAILER_PERMISSIONS,
  ...DEVICE_PERMISSIONS,
  ...DRIVER_GROUP_PERMISSIONS,
  ...MECHANIC_PERMISSIONS,
  ...ROLE_PERMISSIONS,
];

export const AllPermissionsType = {
  ...CarrierPermission,
  ...UserPermission,
  ...CompanyPermission,
  ...OfficePermission,
  ...DriverPermission,
  ...VehiclePermission,
  ...TrailerPermission,
  ...DevicePermission,
  ...DriverGroupPermission,
  ...MechanicPermission,
  ...RolePermission,
  ...SuperAdminPermission,
};

export const getPermissionsListByRole = (role: any) => {
  switch (role) {
    case ROLES.SUPER_ADMIN:
      return [...ALL_PERMISSION];
    default:
      return [...STRICT_PERMISSION];
  }
};
