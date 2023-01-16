import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const AuthActionTypes = keyMirror({
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  USER_CREATE_REQUEST: undefined,
  USER_CREATE_RES_SUCCESS: undefined,
  USER_CREATE_RES_FAILURE: undefined,
  USER_REGISTER_REQUEST: undefined,
  USER_REGISTER_RES_SUCCESS: undefined,
  USER_REGISTER_RES_FAILURE: undefined,
  USER_RESET_PASSWORD_REQUEST: undefined,
  USER_RESET_PASSWORD_SUCCESS: undefined,
  USER_RESET_PASSWORD_FAILURE: undefined,
  USER_FORGOT_PASSWORD_REQUEST: undefined,
  USER_FORGOT_PASSWORD_SUCCESS: undefined,
  USER_FORGOT_PASSWORD_FAILURE: undefined,
  GET_LOGGED_IN_USER_REQUEST: undefined,
  GET_LOGGED_IN_USER_SUCCESS: undefined,
  GET_LOGGED_IN_USER_FAILED: undefined,
});

export const login = createAction(
  AuthActionTypes.USER_LOGIN_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const loginSuccess = createAction(
  AuthActionTypes.USER_LOGIN_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const loginFailed = createAction(
  AuthActionTypes.USER_LOGIN_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const logOut = createAction(
  AuthActionTypes.USER_LOGOUT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const logOutSuccess = createAction(AuthActionTypes.USER_LOGOUT_SUCCESS);

// Register user actions

export const registerUserReq = createAction(
  AuthActionTypes.USER_REGISTER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const registerUserResFailed = createAction(
  AuthActionTypes.USER_REGISTER_RES_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const registerUserResSuccess = createAction(
  AuthActionTypes.USER_REGISTER_RES_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// Create user actions

export const createUserReq = createAction(
  AuthActionTypes.USER_CREATE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createUserResSuccess = createAction(
  AuthActionTypes.USER_CREATE_RES_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createUserResFailed = createAction(
  AuthActionTypes.USER_CREATE_RES_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// Reset password

export const resetPasswordReq = createAction(
  AuthActionTypes.USER_RESET_PASSWORD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const resetPasswordResSuccess = createAction(
  AuthActionTypes.USER_RESET_PASSWORD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const resetPasswordResFailed = createAction(
  AuthActionTypes.USER_RESET_PASSWORD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// Forgot password

export const forgotPasswordUserReq = createAction(
  AuthActionTypes.USER_FORGOT_PASSWORD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const forgotPasswordResSuccess = createAction(
  AuthActionTypes.USER_FORGOT_PASSWORD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const forgotPasswordResFailed = createAction(
  AuthActionTypes.USER_FORGOT_PASSWORD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get logged in user

export const getLoggedInUserReq = createAction(
  AuthActionTypes.GET_LOGGED_IN_USER_REQUEST
);
export const getLoggedInUserResSuccess = createAction(
  AuthActionTypes.GET_LOGGED_IN_USER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getLoggedInUserResFailed = createAction(
  AuthActionTypes.GET_LOGGED_IN_USER_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);
