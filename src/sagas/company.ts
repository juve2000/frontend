import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { CompanyActionTypes } from "../actions/company";
import {
  getCompanySuccess,
  getCompanyFailed,
  getCompanyRootSuccess,
  getCompanyRootFailed,
  createCompanyRootSuccess,
  createCompanyRootFailed,
  updateCompanySuccess,
  updateCompanyFailed,
  updateCompanyRootSuccess,
  updateCompanyRootFailed,
  deleteCompanyRootSuccess,
  deleteCompanyRootFailed,
  getCompaniesListRootSuccess,
  getCompaniesListRootFailed,
} from "../actions";

export function* getCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/company/${payload.companyId}`, {
      params: payload.queryParams,
    });
    yield put(getCompanySuccess(data));
  } catch (e: any) {
    yield put(getCompanyFailed(e.message));
  }
}

export function* getCompanyRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/company/${payload.companyId}`, {
      params: payload.queryParams,
    });
    yield put(getCompanySuccess(data));
  } catch (e: any) {
    yield put(getCompanyFailed(e.message));
  }
}

export function* createCompanyRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/company/root", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createCompanyRootSuccess(data));
  } catch (e: any) {
    yield put(createCompanyRootFailed(e.message));
  }
}

export function* updateCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/company/${payload.companyId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateCompanySuccess(data));
  } catch (e: any) {
    yield put(updateCompanyFailed(e.message));
  }
}

export function* updateCompanyRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/company/root/${payload.companyId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateCompanyRootSuccess(data));
  } catch (e: any) {
    yield put(updateCompanyRootFailed(e.message));
  }
}

export function* deleteCompanyRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.delete,
      `/company/root/${payload.companyId}`
    );
    yield put(deleteCompanyRootSuccess(data));
  } catch (e: any) {
    yield put(deleteCompanyRootFailed(e.message));
  }
}

export function* getCompaniesListRootSaga({ payload }: any): any {
  try {
    //TODO: decide which route will be used for fetsh companies list '/' or '/root'
    const { data } = yield call(request.get, `/company`, {
      params: payload.queryParams,
    });

    // const { data } = yield call(request.get, `/company/root/${payload.companyId}`);
    yield put(getCompaniesListRootSuccess(data));
  } catch (e: any) {
    yield put(getCompaniesListRootFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(CompanyActionTypes.GET_COMPANY_REQUEST, getCompanySaga),
    takeLatest(CompanyActionTypes.GET_COMPANY_ROOT_REQUEST, getCompanyRootSaga),
    takeLatest(
      CompanyActionTypes.CREATE_COMPANY_ROOT_REQUEST,
      createCompanyRootSaga
    ),
    takeLatest(CompanyActionTypes.UPDATE_COMPANY_REQUEST, updateCompanySaga),
    takeLatest(
      CompanyActionTypes.UPDATE_COMPANY_ROOT_REQUEST,
      updateCompanyRootSaga
    ),

    takeLatest(
      CompanyActionTypes.DELETE_COMPANY_ROOT_REQUEST,
      deleteCompanyRootSaga
    ),
    takeLatest(
      CompanyActionTypes.GET_COMPANIES_LIST_ROOT_REQUEST,
      getCompaniesListRootSaga
    ),
  ]);
}
