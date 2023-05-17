import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestCarrier";

import { TrailerActionTypes } from "../actions/trailer";
import {
  getTrailerSuccess,
  getTrailerFailed,
  createTrailerSuccess,
  createTrailerFailed,
  updateTrailerSuccess,
  updateTrailerFailed,
  deleteTrailerSuccess,
  deleteTrailerFailed,
  getTrailerListSuccess,
  getTrailerListFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getTrailerSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/trailer/${payload.trailerId}`, {
      params: payload.queryParams,
    });
    yield put(getTrailerSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getTrailerFailed(e.message));
  }
}

export function* createTrailerSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/trailer", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createTrailerSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(createTrailerFailed(e.message));
  }
}

export function* updateTrailerSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/trailer/${payload.trailerId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateTrailerSuccess(data));
  } catch (e: any) {
    yield put(updateTrailerFailed(e.message));
  }
}

export function* deleteTrailerSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/trailer/${payload.id}`);
    yield put(deleteTrailerSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(deleteTrailerFailed(e.message));
  }
}

export function* getTrailerListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/trailer/`, {
      params: payload.querParams,
    });
    yield put(getTrailerListSuccess(data.data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getTrailerListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(TrailerActionTypes.GET_TRAILER_REQUEST, getTrailerSaga),
    takeLatest(TrailerActionTypes.CREATE_TRAILER_REQUEST, createTrailerSaga),
    takeLatest(TrailerActionTypes.UPDATE_TRAILER_REQUEST, updateTrailerSaga),
    takeLatest(TrailerActionTypes.DELETE_TRAILER_REQUEST, deleteTrailerSaga),
    takeLatest(TrailerActionTypes.GET_TRAILER_LIST_REQUEST, getTrailerListSaga),
  ]);
}
