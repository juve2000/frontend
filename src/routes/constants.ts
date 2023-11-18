const Root = "/client";

const CARRIERS = `${Root}/carriers`;
const CARRIER_PAGE = `${CARRIERS}/:id`;

const DRIVERS = `${Root}/drivers`;
const DRIVER_PAGE = `${DRIVERS}/:id`;

const DRIVER_GROUP = `${Root}/driver_group`;
const DRIVER_GROUP_PAGE = `${DRIVER_GROUP}/:id`;

const MECHANIC = `${Root}/mechanic`;
const MECHANIC_PAGE = `${MECHANIC}/:id`;

const VEHICLE = `${Root}/vehicle`;
const VEHICLE_PAGE = `${VEHICLE}/:id`;

const TRAILER = `${Root}/trailer`;
const TRAILER_PAGE = `${VEHICLE}/:id`;

const DEVICE = `${Root}/device`;
const DEVICE_PAGE = `${DEVICE}/:id`;

const ROLE = `${Root}/role`;
const ROLE_PAGE = `${ROLE}/:id`;

const USER = `${Root}/user`;
const USER_PAGE = `${USER}/:id`;

const COMPANY = `${Root}/company`;
const COMPANY_PAGE = `${COMPANY}/:id`;

const OFFICE = `${Root}/office`;
const OFFICE_PAGE = `${OFFICE}/:id`;

const ALERTS = `${Root}/alerts`;
const ALERTS_PAGE = `${ALERTS}/:id`;

const UNITS = `${Root}/units`;
const UNITS_PAGE = `${UNITS}/:id`;

export const ROUTES = {
  Root,
  CARRIERS,
  CARRIER_PAGE,
  DRIVERS,
  DRIVER_PAGE,
  DRIVER_GROUP,
  DRIVER_GROUP_PAGE,
  MECHANIC,
  MECHANIC_PAGE,
  VEHICLE,
  VEHICLE_PAGE,
  TRAILER,
  TRAILER_PAGE,
  DEVICE,
  DEVICE_PAGE,
  ROLE,
  ROLE_PAGE,
  USER,
  USER_PAGE,
  COMPANY,
  COMPANY_PAGE,
  OFFICE,
  OFFICE_PAGE,
  ALERTS,
  ALERTS_PAGE,
  UNITS,
  UNITS_PAGE,
};
