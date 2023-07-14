import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/request";
import { OfficeActionTypes } from "../actions/office";
import {
  getOfficeSuccess,
  getOfficeFailed,
  createOfficeSuccess,
  createOfficeFailed,
  updateOfficeSuccess,
  updateOfficeFailed,
  deleteOfficeSuccess,
  deleteOfficeFailed,
  getOfficeListSuccess,
  getOfficeListFailed,
  getOfficeListRootSuccess,
  getOfficeListRootFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/office/${payload.officeId}`, {
      params: payload.queryParams,
    });
    yield put(getOfficeSuccess(data.data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getOfficeFailed(e.message));
  }
}

export function* createOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/office", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createOfficeSuccess(data));
    yield call(notification.success, {
      message: "Office created successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(createOfficeFailed(e.message));
  }
}

export function* updateOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/office/${payload.officeId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateOfficeSuccess(data));
    yield call(notification.success, {
      message: "Office updated successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(updateOfficeFailed(e.message));
  }
}

export function* deleteOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/office/${payload.officeId}`);
    yield put(deleteOfficeSuccess(data));
    yield call(notification.success, {
      message: "Office deleted successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(deleteOfficeFailed(e.message));
  }
}

export function* getOfficeListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/office`, {
      params: payload.queryParams,
    });
    yield put(getOfficeListSuccess(data));
    console.log("data", data);
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getOfficeListFailed(e.message));
  }
}

export function* getOfficeListRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/office/root/`);
    yield put(getOfficeListRootSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getOfficeListRootFailed(e.message));
  }
}

export function* createOfficeRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/office/root", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createOfficeSuccess(data));
    yield call(notification.success, {
      message: "Office created successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(createOfficeFailed(e.message));
  }
}

export function* updateOfficeRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/office/root/${payload.officeId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateOfficeSuccess(data));
    yield call(notification.success, {
      message: "Office updated successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(updateOfficeFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(OfficeActionTypes.GET_OFFICE_REQUEST, getOfficeSaga),
    takeLatest(OfficeActionTypes.CREATE_OFFICE_REQUEST, createOfficeSaga),
    takeLatest(OfficeActionTypes.UPDATE_OFFICE_REQUEST, updateOfficeSaga),
    takeLatest(
      OfficeActionTypes.CREATE_OFFICE_ROOT_REQUEST,
      createOfficeRootSaga
    ),
    takeLatest(
      OfficeActionTypes.UPDATE_OFFICE_ROOT_REQUEST,
      updateOfficeRootSaga
    ),
    takeLatest(OfficeActionTypes.DELETE_OFFICE_REQUEST, deleteOfficeSaga),
    takeLatest(OfficeActionTypes.GET_OFFICE_LIST_REQUEST, getOfficeListSaga),
    takeLatest(
      OfficeActionTypes.GET_OFFICE_LIST_ROOT_REQUEST,
      getOfficeListRootSaga
    ),
  ]);
}
