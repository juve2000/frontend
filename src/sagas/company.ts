import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { CompanyActionTypes } from "../actions/company";
import {
  getCompanySuccess,
  getCompanyFailed,
  createCompanySuccess,
  createCompanyFailed,
  updateCompanySuccess,
  updateCompanyFailed,
  deleteCompanySuccess,
  deleteCompanyFailed,
  getCompaniesListSuccess,
  getCompaniesListFailed,
} from "../actions";

export function* getCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/company/${payload.id}`);
    yield put(getCompanySuccess(data));
  } catch (e: any) {
    yield put(getCompanyFailed(e.message));
  }
}

export function* createCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/company", {
      payload,
    });
    yield put(createCompanySuccess(data));
  } catch (e: any) {
    yield put(createCompanyFailed(e.message));
  }
}

export function* updateCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/company/${payload.id}`, payload);
    yield put(updateCompanySuccess(data));
  } catch (e: any) {
    yield put(updateCompanyFailed(e.message));
  }
}

export function* deleteCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/company/${payload.id}`);
    yield put(deleteCompanySuccess(data));
  } catch (e: any) {
    yield put(deleteCompanyFailed(e.message));
  }
}

export function* getCompaniesListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/company/${payload.id}`);
    yield put(getCompaniesListSuccess(data));
  } catch (e: any) {
    yield put(getCompaniesListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(CompanyActionTypes.GET_COMPANY_REQUEST, getCompanySaga),
    takeLatest(CompanyActionTypes.CREATE_COMPANY_REQUEST, createCompanySaga),
    takeLatest(CompanyActionTypes.UPDATE_COMPANY_REQUEST, updateCompanySaga),
    takeLatest(CompanyActionTypes.DELETE_COMPANY_REQUEST, deleteCompanySaga),
    takeLatest(
      CompanyActionTypes.GET_COMPANIES_LIST_REQUEST,
      getCompaniesListSaga
    ),
  ]);
}
