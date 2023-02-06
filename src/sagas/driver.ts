import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/requestCarrier";
import { DriverActionTypes } from "../actions/driver";
import {
  getDriverSuccess,
  getDriverFailed,
  createDriverSuccess,
  createDriverFailed,
  updateDriverSuccess,
  updateDriverFailed,
  deleteDriverSuccess,
  deleteDriverFailed,
  getDriverListSuccess,
  getDriverListFailed,
} from "../actions";

export function* getDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.id}`);
    yield put(getDriverSuccess(data));
  } catch (e: any) {
    yield put(getDriverFailed(e.message));
  }
}

export function* createDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/driver", {
      payload,
    });
    yield put(createDriverSuccess(data));
  } catch (e: any) {
    yield put(createDriverFailed(e.message));
  }
}

export function* updateDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/driver/${payload.id}`, payload);
    yield put(updateDriverSuccess(data));
  } catch (e: any) {
    yield put(updateDriverFailed(e.message));
  }
}

export function* deleteDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteDriverSuccess(data));
  } catch (e: any) {
    yield put(deleteDriverFailed(e.message));
  }
}

export function* getDriverListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.id}`);
    yield put(getDriverListSuccess(data));
  } catch (e: any) {
    yield put(getDriverListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(DriverActionTypes.GET_DRIVER_REQUEST, getDriverSaga),
    takeLatest(DriverActionTypes.CREATE_DRIVER_REQUEST, createDriverSaga),
    takeLatest(DriverActionTypes.UPDATE_DRIVER_REQUEST, updateDriverSaga),
    takeLatest(DriverActionTypes.DELETE_DRIVER_REQUEST, deleteDriverSaga),
    takeLatest(DriverActionTypes.GET_DRIVER_LIST_REQUEST, getDriverListSaga),
  ]);
}
