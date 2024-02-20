import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestMonitoring";
import requestDriverCarrier from "../utils/requestCarrier";

import { DriverLogActionTypes } from "../actions/driver_log";
import {
  getDriverLogSuccess,
  getDriverLogFailed,
  createDriverLogSuccess,
  createDriverLogFailed,
  updateDriverLogSuccess,
  updateDriverLogFailed,
  deleteDriverLogSuccess,
  deleteDriverLogFailed,
  getDriverLogListSuccess,
  getDriverLogListFailed,
  getDriverDataLogSuccess,
  getDriverDataLogFailed,
  getDriverDataCarrierLogSuccess,
  getDriverDataCarrierLogFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getDriverDataLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      requestDriverCarrier.get,
      `/driver/${payload.driverId}`,
      {
        params: payload.queryParams,
      }
    );
    yield put(getDriverDataLogSuccess(data));
    console.log("data", data);
    payload.onSuccess(data?.data?.carrier?.id);
  } catch (e: any) {
    yield put(getDriverDataLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDriverDataLogCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      requestDriverCarrier.get,
      `/carrier/${payload.carrierId}`,
      {
        params: payload.queryParams,
      }
    );
    yield put(getDriverDataCarrierLogSuccess(data));
    payload.onSuccess();
  } catch (e: any) {
    yield put(getDriverDataCarrierLogFailed(e.message));
  }
}

export function* getDriverLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.driverId}`, {
      params: payload.queryParams,
    });
    yield put(getDriverLogSuccess(data));
  } catch (e: any) {
    yield put(getDriverLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createDriverLogSaga({ payload }: any): any {
  console.log("PAYLOAD LOG", payload);
  try {
    const { data } = yield call(request.post, "/log/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDriverLogSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Driver created successfully",
    });
  } catch (e: any) {
    yield put(createDriverLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateDriverLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      `/driver/${payload.driverId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateDriverLogSuccess(data));
    yield call(getDriverLogSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        driverId: payload.driverId,
      },
    });
    yield call(notification.success, {
      message: "Log updated successfully",
    });
  } catch (e: any) {
    yield put(updateDriverLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteDriverLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteDriverLogSuccess(data));
    yield call(notification.success, {
      message: "Log deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDriverLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDriverLogListSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.get,
      `/log/daily/${payload.driverid}/2024-02-14`,
      {
        params: payload.queryParams,
      }
    );
    yield put(getDriverLogListSuccess(data));
  } catch (e: any) {
    yield put(getDriverLogListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(
      DriverLogActionTypes.GET_DRIVER_DATA_LOG_REQUEST,
      getDriverDataLogSaga
    ),
    takeLatest(
      DriverLogActionTypes.GET_DRIVER_DATA_CARRIER_LOG_REQUEST,
      getDriverDataLogCarrierSaga
    ),
    takeLatest(DriverLogActionTypes.GET_DRIVER_LOG_REQUEST, getDriverLogSaga),
    takeLatest(
      DriverLogActionTypes.CREATE_DRIVER_LOG_REQUEST,
      createDriverLogSaga
    ),
    takeLatest(
      DriverLogActionTypes.UPDATE_DRIVER_LOG_REQUEST,
      updateDriverLogSaga
    ),
    takeLatest(
      DriverLogActionTypes.DELETE_DRIVER_LOG_REQUEST,
      deleteDriverLogSaga
    ),
    takeLatest(
      DriverLogActionTypes.GET_DRIVER_LOG_LIST_REQUEST,
      getDriverLogListSaga
    ),
  ]);
}
