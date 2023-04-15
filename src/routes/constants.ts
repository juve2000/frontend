const Root = "/client";

const CARRIERS = `${Root}/carriers`;
const CARRIER_PAGE = `${CARRIERS}/:id`;

const DRIVERS = `${Root}/drivers`;
const DRIVER_PAGE = `${DRIVERS}/:id`;

const DRIVER_GROUP = `${Root}/driver_group`;
const DRIVER_GROUP_PAGE = `${DRIVER_GROUP}/:id`;

const MECHANIC = `${Root}/mechanic`;
const MECHANIC_PAGE = `${MECHANIC}/:id`;

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
};
