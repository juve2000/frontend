import alerts, { alertsState } from "./alerts";
import app, { appState } from "./app";
import user, { userState } from "./user";
import auth, { authState } from "./auth";
import company, { companyState } from "./company";
import office, { officeState } from "./office";
import role, { roleState } from "./role";
import vehicle, { vehicleState } from "./vehicle";
import trailer, { trailerState } from "./trailer";
import eld, { eldState } from "./eld";
import driver, { driverState } from "./driver";
import report, { reportState } from "./report";
import carrier, { carrierState } from "./carrier";
import driverGroup, { driverGroupState } from "./driver_group";
import mechanic, { mechanicState } from "./mechanic";
import device, { deviceState } from "./device";
import units, { unitState } from "./unit";
import log, { logState } from "./log";
import driverLog, { driverLogState } from "./driver_log";
import screen, { screenState } from "./screen";
import shop, { shopState } from "./shop";

export const initialState = {
  alerts: alertsState,
  app: appState,
  user: userState,
  auth: authState,
  company: companyState,
  office: officeState,
  role: roleState,
  vehicle: vehicleState,
  trailer: trailerState,
  eld: eldState,
  driver: driverState,
  report: reportState,
  carrier: carrierState,
  driverGroup: driverGroupState,
  mechanic: mechanicState,
  device: deviceState,
  units: unitState,
  log: logState,
  driverLog: driverLogState,
  screen: screenState,
  shop: shopState,
};

export default {
  ...alerts,
  ...app,
  ...user,
  ...auth,
  ...company,
  ...office,
  ...role,
  ...vehicle,
  ...trailer,
  ...eld,
  ...driver,
  ...report,
  ...carrier,
  ...driverGroup,
  ...mechanic,
  ...device,
  ...units,
  ...log,
  ...driverLog,
  ...screen,
  ...shop,
};
