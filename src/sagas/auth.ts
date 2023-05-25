import { all, delay, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/request";
import { notification } from "antd";

import { AuthActionTypes } from "../actions/auth";
import jwtDecode from "jwt-decode";

import {
  loginSuccess,
  loginFailed,
  logOutSuccess,
  createUserResSuccess,
  createUserResFailed,
  registerUserResSuccess,
  registerUserResFailed,
  resetPasswordResSuccess,
  resetPasswordResFailed,
  forgotPasswordResSuccess,
  forgotPasswordResFailed,
  getLoggedInUserResFailed,
  getLoggedInUserResSuccess,
  getCompanySuccess,
} from "../actions";

export function* loginSaga({ payload }: any) {
  try {
    const { data } = yield call(request.post, "/user/login", payload.values);
    window.localStorage.setItem("accessToken", data.token);
    yield put(
      loginSuccess({
        user: jwtDecode(data.token),
        isAuth: true,
      })
    );
    yield call(notification.open, { message: "text", type: "info" });
    payload.navigate("/client");
    window.location.reload();
  } catch (e: any) {
    yield put(loginFailed(e.message));
  }
}

export function* logoutSaga({ payload }: any): any {
  yield delay(200);
  window.localStorage.clear();
  yield call(notification.open, { message: "Log out success", type: "info" });

  payload.navigate("/signin");
  yield put(logOutSuccess());
}

export function* createUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/user/registration", payload);
    yield put(createUserResSuccess(data));
  } catch (e: any) {
    yield put(createUserResFailed(e.message));
  }
}

export function* registerUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      "/user/registration",
      payload.values
    );
    yield put(registerUserResSuccess(data));
    payload.navigate("/client");
  } catch (e: any) {
    yield put(registerUserResFailed(e.message));
  }
}

export function* resetPasswordUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, `/user/reset/${payload.token}`, {
      password: payload.password,
      confirm_password: payload.confirm_password,
    });
    yield put(resetPasswordResSuccess(data));
  } catch (e: any) {
    yield put(resetPasswordResFailed(e.message));
  }
}

export function* forgotPasswordUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, `/user/forgot`, payload.values);
    yield put(forgotPasswordResSuccess(data));
  } catch (e: any) {
    yield put(forgotPasswordResFailed(e.message));
  }
}

export function* getLoggedInUserSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, "/user");

    if (data.status === "success") {
      yield put(getLoggedInUserResSuccess(data.data));
      yield put(getCompanySuccess(data.data.company));
    }
  } catch (e: any) {
    yield put(getLoggedInUserResFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(AuthActionTypes.USER_LOGIN_REQUEST, loginSaga),
    takeLatest(AuthActionTypes.USER_LOGOUT_REQUEST, logoutSaga),
    takeLatest(AuthActionTypes.USER_CREATE_REQUEST, createUserSaga),
    takeLatest(AuthActionTypes.USER_REGISTER_REQUEST, registerUserSaga),
    takeLatest(
      AuthActionTypes.USER_RESET_PASSWORD_REQUEST,
      resetPasswordUserSaga
    ),
    takeLatest(
      AuthActionTypes.USER_FORGOT_PASSWORD_REQUEST,
      forgotPasswordUserSaga
    ),
    takeLatest(AuthActionTypes.GET_LOGGED_IN_USER_REQUEST, getLoggedInUserSaga),
  ]);
}
