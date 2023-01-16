import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getUsersListReq,
  getUsersListResFailed,
  getUsersListResSuccess,
  getUsersListInnerCompanyReq,
  getUsersListInnerCompanyResFailed,
  getUsersListInnerCompanyResSuccess,
  getUsersListByCompanyReq,
  getUsersListByCompanyResSuccess,
  getUsersListByCompanyResFailed,
} from "../actions";

import { UserState } from "../types";

export const userState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
  user: {},
  usersListInnerCompany: [],
  usersList: [],
  usersListByCompany: [],
  loading: false,
  errorMessage: "",
};

export default {
  user: createReducer<UserState>(userState, (builder) => {
    builder
      .addCase(getUsersListReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getUsersListResSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          usersList: payload,
          loading: false,
        };
      })
      .addCase(getUsersListResFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          usersList: payload,
          loading: false,
        };
      });
  }),
};
