import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getDriverReq,
  getDriverSuccess,
  getDriverFailed,
  createDriverReq,
  createDriverSuccess,
  createDriverFailed,
  updateDriverReq,
  updateDriverSuccess,
  updateDriverFailed,
  deleteDriverReq,
  deleteDriverSuccess,
  deleteDriverFailed,
  getDriverListReq,
  getDriverListSuccess,
  getDriverListFailed,
} from "../actions";

// import { UserState } from "../types";

export const driverState = {
  status: STATUS.IDLE,
  driver: {},
  driverList: [],
  loading: false,
  errorMessage: "",
};

export default {
  driver: createReducer<any>(driverState, (builder) => {
    // GET DRIVER
    builder
      .addCase(getDriverReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(getDriverFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE DRIVER
    builder
      .addCase(createDriverReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createDriverSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(createDriverFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE DRIVER
    builder
      .addCase(updateDriverReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateDriverSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(updateDriverFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE DRIVER
    builder
      .addCase(deleteDriverReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteDriverSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(deleteDriverFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF DRIVERS
    builder
      .addCase(getDriverListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverListSuccess, (state, { payload }) => {
        return {
          ...state,
          driverList: payload,
          loading: false,
        };
      })
      .addCase(getDriverListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
