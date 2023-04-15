import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getDriverGroupReq,
  getDriverGroupSuccess,
  getDriverGroupFailed,
  createDriverGroupReq,
  createDriverGroupSuccess,
  createDriverGroupFailed,
  updateDriverGroupReq,
  updateDriverGroupSuccess,
  updateDriverGroupFailed,
  deleteDriverGroupReq,
  deleteDriverGroupSuccess,
  deleteDriverGroupFailed,
  getDriverGroupListReq,
  getDriverGroupListSuccess,
  getDriverGroupListFailed,
  getDriverGroupListRootReq,
  getDriverGroupListRootSuccess,
  getDriverGroupListRootFailed,
  setCurrentDriverGroupCarrier,
} from "../actions";

// import { UserState } from "../types";

export const driverGroupState = {
  status: STATUS.IDLE,
  driverGroup: {},
  driverGroupList: [],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
  driverGroupListRoot: [],
};

export default {
  driverGroup: createReducer<any>(driverGroupState, (builder) => {
    // GET DRIVER GROUP
    builder
      .addCase(getDriverGroupReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverGroupSuccess, (state, { payload }) => {
        return {
          ...state,
          driverGroup: payload.data,
          loading: false,
        };
      })
      .addCase(getDriverGroupFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE DRIVER GROUP
    builder
      .addCase(createDriverGroupReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createDriverGroupSuccess, (state, { payload }) => {
        return {
          ...state,
          //   driverGroup: payload.data,
          loading: false,
        };
      })
      .addCase(createDriverGroupFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE DRIVER GROUP
    builder
      .addCase(updateDriverGroupReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateDriverGroupSuccess, (state, { payload }) => {
        return {
          ...state,
          // driver: payload,
          loading: false,
        };
      })
      .addCase(updateDriverGroupFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE DRIVER GROUP
    builder
      .addCase(deleteDriverGroupReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteDriverGroupSuccess, (state, { payload }) => {
        return {
          ...state,
          driverGroup: payload.data,
          loading: false,
        };
      })
      .addCase(deleteDriverGroupFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF DRIVER GROUPS
    builder
      .addCase(getDriverGroupListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverGroupListSuccess, (state, { payload }) => {
        return {
          ...state,
          driverGroupList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 20,
        };
      })
      .addCase(getDriverGroupListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder.addCase(setCurrentDriverGroupCarrier, (state, { payload }) => {
      return {
        ...state,
        currentCarrier: payload,
      };
    });
    builder
      .addCase(getDriverGroupListRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverGroupListRootSuccess, (state, { payload }) => {
        return {
          ...state,
          driverGroupList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 20,
        };
      })
      .addCase(getDriverGroupListRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
