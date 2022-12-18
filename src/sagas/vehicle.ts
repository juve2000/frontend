import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { VehicleActionTypes } from "../actions/vehicle";
import {
  getVehicleSuccess,
  getVehicleFailed,
  createVehicleSuccess,
  createVehicleFailed,
  updateVehicleSuccess,
  updateVehicleFailed,
  deleteVehicleSuccess,
  deleteVehicleFailed,
  getVehicleListSuccess,
  getVehicleListFailed,
} from "../actions";

export function* getVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/vehicle/${payload.id}`);
    yield put(getVehicleSuccess(data));
  } catch (e: any) {
    yield put(getVehicleFailed(e.message));
  }
}

export function* createVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/vehicle", {
      payload,
    });
    yield put(createVehicleSuccess(data));
  } catch (e: any) {
    yield put(createVehicleFailed(e.message));
  }
}

export function* updateVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/vehicle/${payload.id}`, payload);
    yield put(updateVehicleSuccess(data));
  } catch (e: any) {
    yield put(updateVehicleFailed(e.message));
  }
}

export function* deleteVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/vehicle/${payload.id}`);
    yield put(deleteVehicleSuccess(data));
  } catch (e: any) {
    yield put(deleteVehicleFailed(e.message));
  }
}

export function* getVehicleListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/vehicle/${payload.id}`);
    yield put(getVehicleListSuccess(data));
  } catch (e: any) {
    yield put(getVehicleListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(VehicleActionTypes.GET_VEHICLE_REQUEST, getVehicleSaga),
    takeLatest(VehicleActionTypes.CREATE_VEHICLE_REQUEST, createVehicleSaga),
    takeLatest(VehicleActionTypes.UPDATE_VEHICLE_REQUEST, updateVehicleSaga),
    takeLatest(VehicleActionTypes.DELETE_VEHICLE_REQUEST, deleteVehicleSaga),
    takeLatest(VehicleActionTypes.GET_VEHICLE_LIST_REQUEST, getVehicleListSaga),
  ]);
}
