import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestMonitoring";
import { LogActionTypes } from "../actions/logs";
import {
  getLogSuccess,
  getLogFailed,
  createLogSuccess,
  createLogFailed,
  updateLogSuccess,
  updateLogFailed,
  deleteLogSuccess,
  deleteLogFailed,
  getLogListSuccess,
  getLogListFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.driverId}`, {
      params: payload.queryParams,
    });
    yield put(getLogSuccess(data));
  } catch (e: any) {
    yield put(getLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/driver/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createLogSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Driver created successfully",
    });
  } catch (e: any) {
    yield put(createLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateLogSaga({ payload }: any): any {
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
    yield put(updateLogSuccess(data));
    yield call(getLogSaga, {
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
    yield put(updateLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteLogSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteLogSuccess(data));
    yield call(notification.success, {
      message: "Log deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteLogFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getLogListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/log`, {
      params: payload.queryParams,
    });
    yield put(getLogListSuccess(data));
  } catch (e: any) {
    yield put(getLogListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(LogActionTypes.GET_LOG_REQUEST, getLogSaga),
    takeLatest(LogActionTypes.CREATE_LOG_REQUEST, createLogSaga),
    takeLatest(LogActionTypes.UPDATE_LOG_REQUEST, updateLogSaga),
    takeLatest(LogActionTypes.DELETE_LOG_REQUEST, deleteLogSaga),
    takeLatest(LogActionTypes.GET_LOG_LIST_REQUEST, getLogListSaga),
  ]);
}
