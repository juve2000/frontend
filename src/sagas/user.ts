import { all, delay, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { UserActionTypes } from "../actions/user";
import jwtDecode from "jwt-decode";

import {
  // createUserResSuccess,
  // createUserResFailed,
  // registerUserResSuccess,
  // registerUserResFailed,
  getUsersListInnerCompanyResFailed,
  getUsersListInnerCompanyResSuccess,
  getUsersListResFailed,
  getUsersListResSuccess,
  getUsersListByCompanyResSuccess,
  getUsersListByCompanyResFailed,
  deleteUserResSuccess,
  deleteUserResFailed,
  updateUserResSuccess,
  updateUserResFailed,
  getUserResSuccess,
  getUserResFailed,
} from "../actions";

export function* getListOfUsersInnerCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, "/user/list");
    yield put(getUsersListInnerCompanyResSuccess(data));
  } catch (e: any) {
    yield put(getUsersListInnerCompanyResFailed(e.message));
  }
}

export function* getListOfUsersSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, "/user/root/list");
    yield put(getUsersListResSuccess(data));
  } catch (e: any) {
    yield put(getUsersListResFailed(e.message));
  }
}

export function* getListOfUsersByCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      `/user/root/list/${payload.id}`,
      payload
    );
    yield put(getUsersListByCompanyResSuccess(data));
  } catch (e: any) {
    yield put(getUsersListByCompanyResFailed(e.message));
  }
}

export function* deleteUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/user/${payload.userId}`);
    yield put(deleteUserResSuccess(data));
  } catch (e: any) {
    yield put(deleteUserResFailed(e.message));
  }
}

export function* updateUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/user/${payload.id}`, {
      ...payload,
      userId: undefined,
    });
    yield put(updateUserResSuccess(data));
  } catch (e: any) {
    yield put(updateUserResFailed(e.message));
  }
}

export function* getUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/user/${payload.userId}`);
    yield put(getUserResSuccess(data));
  } catch (e: any) {
    yield put(getUserResFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(
      UserActionTypes.GET_USERS_LIST_INNER_COMPANY_REQUEST,
      getListOfUsersInnerCompanySaga
    ),
    takeLatest(UserActionTypes.GET_USERS_LIST_REQUEST, getListOfUsersSaga),
    takeLatest(
      UserActionTypes.GET_USERS_LIST_BY_COMPANY_REQUEST,
      getListOfUsersByCompanySaga
    ),
    takeLatest(UserActionTypes.DELETE_USER_REQUEST, deleteUserSaga),
    takeLatest(UserActionTypes.UPDATE_USER_REQUEST, updateUserSaga),
    takeLatest(UserActionTypes.GET_USER_REQUEST, getUserSaga),
  ]);
}
