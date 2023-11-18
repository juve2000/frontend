import { all, fork } from "redux-saga/effects";

import user from "./user";
import auth from "./auth";
import company from "./company";
import office from "./office";
import role from "./role";
import vehicle from "./vehicle";
import trailer from "./trailer";
import eld from "./eld";
import driver from "./driver";
import carrier from "./carrier";
import driver_group from "./driver_group";
import mechanic from "./mechanic";
import device from "./device";
import alerts from "./alerts";
import unit from "./unit";

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user),
    fork(auth),
    fork(company),
    fork(office),
    fork(role),
    fork(vehicle),
    fork(trailer),
    fork(eld),
    fork(driver),
    fork(carrier),
    fork(driver_group),
    fork(mechanic),
    fork(device),
    fork(alerts),
    fork(unit),
  ]);
}
