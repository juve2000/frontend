import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { ReportActionTypes } from "../actions/report";
import {
  getReportSuccess,
  getReportFailed,
  createReportSuccess,
  createReportFailed,
  updateReportSuccess,
  updateReportFailed,
  deleteReportSuccess,
  deleteReportFailed,
  getReportListSuccess,
  getReportListFailed,
} from "../actions";

export function* getReportSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/report/${payload.id}`);
    yield put(getReportSuccess(data));
  } catch (e: any) {
    yield put(getReportFailed(e.message));
  }
}

export function* createReportSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/report", {
      payload,
    });
    yield put(createReportSuccess(data));
  } catch (e: any) {
    yield put(createReportFailed(e.message));
  }
}

export function* updateReportSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/report/${payload.id}`, payload);
    yield put(updateReportSuccess(data));
  } catch (e: any) {
    yield put(updateReportFailed(e.message));
  }
}

export function* deleteReportSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/report/${payload.id}`);
    yield put(deleteReportSuccess(data));
  } catch (e: any) {
    yield put(deleteReportFailed(e.message));
  }
}

export function* getReportListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/report/${payload.id}`);
    yield put(getReportListSuccess(data));
  } catch (e: any) {
    yield put(getReportListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(ReportActionTypes.GET_REPORT_REQUEST, getReportSaga),
    takeLatest(ReportActionTypes.CREATE_REPORT_REQUEST, createReportSaga),
    takeLatest(ReportActionTypes.UPDATE_REPORT_REQUEST, updateReportSaga),
    takeLatest(ReportActionTypes.DELETE_REPORT_REQUEST, deleteReportSaga),
    takeLatest(ReportActionTypes.GET_REPORT_LIST_REQUEST, getReportListSaga),
  ]);
}
