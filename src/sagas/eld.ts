import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { EldActionTypes } from "../actions/eld";
import {
  getEldSuccess,
  getEldFailed,
  createEldSuccess,
  createEldFailed,
  updateEldSuccess,
  updateEldFailed,
  deleteEldSuccess,
  deleteEldFailed,
  getEldListSuccess,
  getEldListFailed,
} from "../actions";

export function* getEldSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/eld/${payload.id}`);
    yield put(getEldSuccess(data));
  } catch (e: any) {
    yield put(getEldFailed(e.message));
  }
}

export function* createEldSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/eld", {
      payload,
    });
    yield put(createEldSuccess(data));
  } catch (e: any) {
    yield put(createEldFailed(e.message));
  }
}

export function* updateEldSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/eld/${payload.id}`, payload);
    yield put(updateEldSuccess(data));
  } catch (e: any) {
    yield put(updateEldFailed(e.message));
  }
}

export function* deleteEldSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/eld/${payload.id}`);
    yield put(deleteEldSuccess(data));
  } catch (e: any) {
    yield put(deleteEldFailed(e.message));
  }
}

export function* getEldListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/eld/${payload.id}`);
    yield put(getEldListSuccess(data));
  } catch (e: any) {
    yield put(getEldListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(EldActionTypes.GET_ELD_REQUEST, getEldSaga),
    takeLatest(EldActionTypes.CREATE_ELD_REQUEST, createEldSaga),
    takeLatest(EldActionTypes.UPDATE_ELD_REQUEST, updateEldSaga),
    takeLatest(EldActionTypes.DELETE_ELD_REQUEST, deleteEldSaga),
    takeLatest(EldActionTypes.GET_ELD_LIST_REQUEST, getEldListSaga),
  ]);
}
