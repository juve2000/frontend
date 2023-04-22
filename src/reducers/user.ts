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
  getUsersListRootReq,
  getUsersListResRootFailed,
  getUsersListResRootSuccess,
  getUserReq,
  getUserResSuccess,
  getUserResFailed,
  updateUserReq,
  updateUserResFailed,
  updateUserResSuccess,
  getCreateUserReq,
  getCreateUserResFailed,
  getCreateUserResSuccess,
  deleteUserReq,
  deleteUserResFailed,
  deleteUserResSuccess,
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
  count: 10,
};

export default {
  user: createReducer<UserState>(userState, (builder) => {
    //get single user
    builder
      .addCase(getUserReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getUserResSuccess, (state, { payload }) => {
        return {
          ...state,
          user: payload.data,
          loading: false,
        };
      })
      .addCase(getUserResFailed, (state, { payload }) => {
        return {
          ...state,
          loading: false,
        };
      });
    // UPDATE USER
    builder
      .addCase(updateUserReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(updateUserResSuccess, (state, { payload }) => {
        return {
          ...state,
          users: payload.data,
          loading: false,
        };
      })
      .addCase(updateUserResFailed, (state, { payload }) => {
        return {
          ...state,
          loading: false,
        };
      });
    //create user
    builder
      .addCase(getCreateUserReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getCreateUserResSuccess, (state, { payload }) => {
        return {
          ...state,
          users: payload.data,
          loading: false,
        };
      })
      .addCase(getCreateUserResFailed, (state, { payload }) => {
        return {
          ...state,
          loading: false,
        };
      });
    // get users list
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
          usersList: payload.data,
          count: payload?.count || 10,

          loading: false,
        };
      })
      .addCase(getUsersListResFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
        };
      });
    builder
      .addCase(getUsersListInnerCompanyReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getUsersListInnerCompanyResSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          usersList: payload.data,
          loading: false,
          count: payload?.count || 10,
        };
      })
      .addCase(getUsersListInnerCompanyResFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
        };
      });
    // GET USERS LIST ROOT
    builder
      .addCase(getUsersListRootReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getUsersListResRootSuccess, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          usersList: payload.data,
          loading: false,
          count: payload?.count || 10,
        };
      })
      .addCase(getUsersListResRootFailed, (state, { payload }) => {
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
        };
      });
  }),
};
