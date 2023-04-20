import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getRoleReq,
  getRoleSuccess,
  getRoleFailed,
  getDefaultRoleReq,
  getDefaultRoleSuccess,
  getDefaultRoleFailed,
  createRoleReq,
  createRoleSuccess,
  createRoleFailed,
  updateRoleReq,
  updateRoleSuccess,
  updateRoleFailed,
  deleteRoleReq,
  deleteRoleSuccess,
  deleteRoleFailed,
  getRoleListReq,
  getRoleListSuccess,
  getRoleListFailed,
} from "../actions";

// import { UserState } from "../types";

export const roleState = {
  status: STATUS.IDLE,
  role: {},
  roleList: [],
  loading: false,
  errorMessage: "",
  count: 10,
};

export default {
  role: createReducer<any>(roleState, (builder) => {
    // GET ROLE
    builder
      .addCase(getRoleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getRoleSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(getRoleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE ROLE
    builder
      .addCase(createRoleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createRoleSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(createRoleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE ROLE
    builder
      .addCase(updateRoleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateRoleSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(updateRoleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE ROLE
    builder
      .addCase(deleteRoleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteRoleSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(deleteRoleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF ROLES
    builder
      .addCase(getRoleListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getRoleListSuccess, (state, { payload }) => {
        return {
          ...state,
          roleList: payload.data,
          loading: false,
          count: payload?.count || 10,
        };
      })
      .addCase(getRoleListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET DEFAULT ROLE
    builder
      .addCase(getDefaultRoleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDefaultRoleSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(getDefaultRoleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
