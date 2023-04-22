import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  login,
  loginSuccess,
  loginFailed,
  logOut,
  logOutSuccess,
  createUserReq,
  createUserResSuccess,
  createUserResFailed,
  registerUserReq,
  registerUserResSuccess,
  registerUserResFailed,
  resetPasswordReq,
  resetPasswordResSuccess,
  resetPasswordResFailed,
  forgotPasswordUserReq,
  forgotPasswordResSuccess,
  forgotPasswordResFailed,
  getLoggedInUserReq,
  getLoggedInUserResFailed,
  getLoggedInUserResSuccess,
} from "../actions";
import { ALL_PERMISSION } from "../components/modules/role/constant";

// import { UserState } from "../types";
import {
  generateAllPermissions,
  ALL_PERMISSION_TYPES,
} from "../constants/role";

export const authState = {
  isAuthenticated: false,
  status: "AUTH",
  loading: true,
  errorMessage: "",
  user: {},
  // permissions: generateAllPermissions(ALL_PERMISSION_TYPES),
  permissions: ALL_PERMISSION,
};

export default {
  auth: createReducer<any>(authState, (builder) => {
    // LOGIN
    builder
      .addCase(login, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(loginSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false,
        };
      })
      .addCase(loginFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          errorMessage: payload,
        };
      });
    // LOGOUT
    builder
      .addCase(logOut, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(logOutSuccess, (state) => {
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
        };
      });
    // GET LOGGED IN USER
    builder
      .addCase(getLoggedInUserReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getLoggedInUserResSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            ...payload,
            //TODO: REMOVE HARDCODED ROLE
            role: "SUPER_ADMIN",
          },
          loading: false,
        };
      })
      .addCase(getLoggedInUserResFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          errorMessage: payload,
        };
      });
    // REGISTER
    builder
      .addCase(registerUserReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(registerUserResSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          // user: payload,
          loading: false,
        };
      })
      .addCase(registerUserResFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          errorMessage: payload,
        };
      });
  }),
};
