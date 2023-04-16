import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestCarrier";
import { DeviceActionTypes } from "../actions/device";
import {
  getDeviceSuccess,
  getDeviceFailed,
  createDeviceSuccess,
  createDeviceFailed,
  updateDeviceSuccess,
  updateDeviceFailed,
  deleteDeviceSuccess,
  deleteDeviceFailed,
  getDeviceListSuccess,
  getDeviceListFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getDeviceSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/device/${payload.deviceId}`, {
      params: payload.queryParams,
    });
    yield put(getDeviceSuccess(data));
  } catch (e: any) {
    yield put(getDeviceFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createDeviceSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/device/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDeviceSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Device created successfully",
    });
  } catch (e: any) {
    yield put(createDeviceFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateDeviceSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      `/device/${payload.deviceId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateDeviceSuccess(data));
    yield call(getDeviceSaga, {
      payload: {
        queryParams: {
          with: ["terminal", "group", "carrier"],
        },
        driverId: payload.deviceId,
      },
    });
    yield call(notification.success, {
      message: "Device group updated successfully",
    });
  } catch (e: any) {
    yield put(updateDeviceFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteDeviceSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/device/${payload.id}`);
    yield put(deleteDeviceSuccess(data));
    yield call(notification.success, {
      message: "Device deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDeviceFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDeviceListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/device`, {
      params: payload.queryParams,
    });
    yield put(getDeviceListSuccess(data));
  } catch (e: any) {
    yield put(getDeviceListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(DeviceActionTypes.GET_DEVICE_REQUEST, getDeviceSaga),
    takeLatest(DeviceActionTypes.CREATE_DEVICE_REQUEST, createDeviceSaga),
    takeLatest(DeviceActionTypes.UPDATE_DEVICE_REQUEST, updateDeviceSaga),
    takeLatest(DeviceActionTypes.DELETE_DEVICE_REQUEST, deleteDeviceSaga),
    takeLatest(DeviceActionTypes.GET_DEVICE_LIST_REQUEST, getDeviceListSaga),
  ]);
}
