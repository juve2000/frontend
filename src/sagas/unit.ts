import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestMonitoring";
import { UnitActionTypes } from "../actions/unit";
import {
  getUnitSuccess,
  getUnitFailed,
  createUnitSuccess,
  createUnitFailed,
  updateUnitSuccess,
  updateUnitFailed,
  deleteUnitSuccess,
  deleteUnitFailed,
  getUnitListSuccess,
  getUnitListFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getUnitSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/unit/${payload.unitId}`, {
      params: payload.queryParams,
    });
    yield put(getUnitSuccess(data));
    payload.onSuccess(data?.data?.carrier?.id);
  } catch (e: any) {
    yield put(getUnitFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createUnitSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/unit/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createUnitSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Unit created successfully",
    });
  } catch (e: any) {
    yield put(createUnitFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateUnitSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/unit/${payload.unitId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateUnitSuccess(data));
    yield call(getUnitSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        unitId: payload.unitId,
      },
    });
    yield call(notification.success, {
      message: "Unit updated successfully",
    });
  } catch (e: any) {
    yield put(updateUnitFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteUnitSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/unit/${payload.id}`);
    yield put(deleteUnitSuccess(data));
    yield call(notification.success, {
      message: "Unit deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteUnitFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getUnitListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/unit`, {
      params: payload.queryParams,
    });
    yield put(getUnitListSuccess(data));
  } catch (e: any) {
    yield put(getUnitListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(UnitActionTypes.GET_UNIT_REQUEST, getUnitSaga),
    takeLatest(UnitActionTypes.CREATE_UNIT_REQUEST, createUnitSaga),
    takeLatest(UnitActionTypes.UPDATE_UNIT_REQUEST, updateUnitSaga),
    takeLatest(UnitActionTypes.DELETE_UNIT_REQUEST, deleteUnitSaga),
    takeLatest(UnitActionTypes.GET_UNIT_LIST_REQUEST, getUnitListSaga),
  ]);
}
