import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestCarrier";
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
  getVehicleListRootSuccess,
  getVehicleListRootFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/vehicle/${payload.vehicleId}`, {
      params: payload.queryParams,
    });
    yield put(getVehicleSuccess(data.data));
  } catch (e: any) {
    yield put(getVehicleFailed(e.message));
  }
}

export function* createVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/vehicle/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createVehicleSuccess(data));
    yield call(notification.success, {
      message: "Vehicle created successfully",
    });
  } catch (e: any) {
    console.log("E", e);
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(createVehicleFailed(e.message));
  }
}

export function* updateVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/vehicle/${payload.vehicleId}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(updateVehicleSuccess(data));
    yield call(notification.success, {
      message: "Vehicle updated successfully",
    });
  } catch (e: any) {
    yield put(updateVehicleFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteVehicleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/vehicle/${payload.id}`);
    yield put(deleteVehicleSuccess(data));
    yield call(notification.success, {
      message: "Vehicle deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteVehicleFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getVehicleListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/vehicle`, {
      params: payload.queryParams,
    });
    yield put(getVehicleListSuccess(data.data));
  } catch (e: any) {
    yield put(getVehicleListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}
export function* getVehicleListRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/vehicle/root`, {
      params: payload.queryParams,
    });
    yield put(getVehicleListRootSuccess(data.data));
  } catch (e: any) {
    yield put(getVehicleListRootFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(VehicleActionTypes.GET_VEHICLE_REQUEST, getVehicleSaga),
    takeLatest(VehicleActionTypes.CREATE_VEHICLE_REQUEST, createVehicleSaga),
    takeLatest(VehicleActionTypes.UPDATE_VEHICLE_REQUEST, updateVehicleSaga),
    takeLatest(VehicleActionTypes.DELETE_VEHICLE_REQUEST, deleteVehicleSaga),
    takeLatest(VehicleActionTypes.GET_VEHICLE_LIST_REQUEST, getVehicleListSaga),
    takeLatest(
      VehicleActionTypes.GET_VEHICLE_LIST_ROOT_REQUEST,
      getVehicleListRootSaga
    ),
  ]);
}
