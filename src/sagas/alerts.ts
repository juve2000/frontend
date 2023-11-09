import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestAlerts";
import { AlertActionTypes } from "../actions/alerts";
import {
  getDriverAlertsSuccess,
  getDriverAlertsFailed,
  createDriverAlertsSuccess,
  createDriverAlertsFailed,
  updateDriverAlertsSuccess,
  updateDriverAlertsFailed,
  deleteDriverAlertsSuccess,
  deleteDriverAlertsFailed,
  getDriverListAlertsSuccess,
  getDriverListAlertsFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getAlertSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/notification/list`, {
      params: payload.queryParams,
    });
    yield put(getDriverAlertsSuccess(data));
  } catch (e: any) {
    yield put(getDriverAlertsFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createAlertSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/driver/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDriverAlertsSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Driver created successfully",
    });
  } catch (e: any) {
    yield put(createDriverAlertsFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateAlertSaga({ payload }: any): any {
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
    yield put(updateDriverAlertsSuccess(data));
    yield call(getAlertSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        driverId: payload.driverId,
      },
    });
    yield call(notification.success, {
      message: "Driver group updated successfully",
    });
  } catch (e: any) {
    yield put(updateDriverAlertsFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteAlertSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteDriverAlertsSuccess(data));
    yield call(notification.success, {
      message: "Driver deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDriverAlertsFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDriverListAlertSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver`, {
      params: payload.queryParams,
    });
    yield put(getDriverListAlertsSuccess(data));
  } catch (e: any) {
    yield put(getDriverListAlertsFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(AlertActionTypes.GET_DRIVER_ALERTS_REQUEST, getAlertSaga),
    takeLatest(AlertActionTypes.CREATE_DRIVER_ALERTS_REQUEST, createAlertSaga),
    takeLatest(AlertActionTypes.UPDATE_DRIVER_ALERTS_REQUEST, updateAlertSaga),
    takeLatest(AlertActionTypes.DELETE_DRIVER_ALERTS_REQUEST, deleteAlertSaga),
    takeLatest(
      AlertActionTypes.GET_DRIVER_LIST_ALERTS_REQUEST,
      getDriverListAlertSaga
    ),
  ]);
}
