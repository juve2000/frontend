import { all, put, takeLatest, call } from "redux-saga/effects";
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
} from "../actions";

export function* getOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/office/${payload.id}`);
    yield put(getOfficeSuccess(data));
  } catch (e: any) {
    yield put(getOfficeFailed(e.message));
  }
}

export function* createOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/office", {
      payload,
    });
    yield put(createOfficeSuccess(data));
  } catch (e: any) {
    yield put(createOfficeFailed(e.message));
  }
}

export function* updateOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/office/${payload.id}`, payload);
    yield put(updateOfficeSuccess(data));
  } catch (e: any) {
    yield put(updateOfficeFailed(e.message));
  }
}

export function* deleteOfficeSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/office/${payload.id}`);
    yield put(deleteOfficeSuccess(data));
  } catch (e: any) {
    yield put(deleteOfficeFailed(e.message));
  }
}

export function* getOfficeListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/office/${payload.id}`);
    yield put(getOfficeListSuccess(data));
  } catch (e: any) {
    yield put(getOfficeListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(OfficeActionTypes.GET_OFFICE_REQUEST, getOfficeSaga),
    takeLatest(OfficeActionTypes.CREATE_OFFICE_REQUEST, createOfficeSaga),
    takeLatest(OfficeActionTypes.UPDATE_OFFICE_REQUEST, updateOfficeSaga),
    takeLatest(OfficeActionTypes.DELETE_OFFICE_REQUEST, deleteOfficeSaga),
    takeLatest(OfficeActionTypes.GET_OFFICE_LIST_REQUEST, getOfficeListSaga),
  ]);
}
