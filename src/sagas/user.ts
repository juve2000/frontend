import { all, delay, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { UserActionTypes } from "../actions/user";
import jwtDecode from "jwt-decode";
import { notification } from "antd";

import {
  getCreateUserResSuccess,
  getCreateUserResFailed,
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
  getUsersListResRootFailed,
  getUsersListResRootSuccess,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getListOfUsersInnerCompanySaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, "/user/list", {
      params: payload.queryParams,
    });
    yield put(getUsersListInnerCompanyResSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getUsersListInnerCompanyResFailed(e.message));
  }
}

export function* getListOfUsersRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, "/user/root/list");

    yield put(getUsersListResRootSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getUsersListResRootFailed(e.message));
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
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getUsersListByCompanyResFailed(e.message));
  }
}

export function* deleteUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/user/${payload.userId}`);
    yield put(deleteUserResSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(deleteUserResFailed(e.message));
  }
}

export function* updateUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/user/${payload.userId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateUserResSuccess(data));
    yield call(notification.success, {
      message: "User updated successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(updateUserResFailed(e.message));
  }
}

export function* createUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, `/user/`, payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(getCreateUserResSuccess(data));
    yield call(notification.success, {
      message: "User created successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getCreateUserResFailed(e.message));
  }
}

export function* getUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/user/${payload.userId}`);
    yield put(getUserResSuccess(data));
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(getUserResFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(
      UserActionTypes.GET_USERS_LIST_INNER_COMPANY_REQUEST,
      getListOfUsersInnerCompanySaga
    ),
    takeLatest(
      UserActionTypes.GET_USERS_LIST_ROOT_REQUEST,
      getListOfUsersRootSaga
    ),
    takeLatest(
      UserActionTypes.GET_USERS_LIST_BY_COMPANY_REQUEST,
      getListOfUsersByCompanySaga
    ),
    takeLatest(UserActionTypes.DELETE_USER_REQUEST, deleteUserSaga),
    takeLatest(UserActionTypes.UPDATE_USER_REQUEST, updateUserSaga),
    takeLatest(UserActionTypes.CREATE_USER_REQUEST, createUserSaga),

    takeLatest(UserActionTypes.GET_USER_REQUEST, getUserSaga),
  ]);
}
