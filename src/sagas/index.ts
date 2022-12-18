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
  ]);
}
