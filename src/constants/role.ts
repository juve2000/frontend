import { keys } from "lodash";

export const ROLE = {
  ADMIN: "ADMIN",
  CEO: "CEO",
  USER: "USER",
};

export const generatePermitionByPrefix = (
  prefix: string,
  typePermission?: object
) => {
  const obj = typePermission || TYPE_PERMISSION;
  const permissions = Object.keys(obj).map(
    (permission) => `${prefix}_${permission}`
  );
  return permissions;
};

export const TYPE_PERMISSION = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  READ: "READ",
};

export const UNIT_PERMISSION = "UNIT";
export const DRIVER_PERMISSION = "DRIVER";
export const ELD_PERMISSION = "ELD";
export const REPORT_PERMISSION = "REPORT";
export const COMPANY_PERMISSION = "COMPANY";
export const OFFICE_PERMISSION = "OFFICE";
export const ROLE_PERMISSION = "ROLE";
export const VEHICLE_PERMISSION = "VEHICLE";
export const TRAILER_PERMISSION = "TRAILER";

export const ALL_PERMISSION_TYPES = [
  UNIT_PERMISSION,
  DRIVER_PERMISSION,
  ELD_PERMISSION,
  REPORT_PERMISSION,
  COMPANY_PERMISSION,
  OFFICE_PERMISSION,
  ROLE_PERMISSION,
  VEHICLE_PERMISSION,
  TRAILER_PERMISSION,
];

export const generateAllPermissions = (prefixes: any[]): any[] => {
  const allTypes: any[] = [];
  prefixes.forEach((prefix) => {
    allTypes.push(...generatePermitionByPrefix(prefix));
  });
  return allTypes;
};

export const generateByTypePermission = (): any => {
  const obj: any = {};
  ALL_PERMISSION_TYPES.forEach((prefix) => {
    obj[prefix] = generatePermitionByPrefix(prefix);
  });
  return obj;
};

export const generatePermission = (): any => {
  const obj: any = {};
  ALL_PERMISSION_TYPES.forEach((prefix) => {
    const typePermit: any = {};
    generatePermitionByPrefix(prefix).forEach((item) => {
      typePermit[item] = item;
    });
    obj[prefix] = typePermit;
  });
  return obj;
};

export const PERMISSIONS = {};
