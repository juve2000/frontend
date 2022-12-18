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
};
