import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getLogReq,
  getLogSuccess,
  getLogFailed,
  createLogReq,
  createLogSuccess,
  createLogFailed,
  updateLogReq,
  updateLogSuccess,
  updateLogFailed,
  deleteLogReq,
  deleteLogSuccess,
  deleteLogFailed,
  getLogListReq,
  getLogListSuccess,
  getLogListFailed,
} from "../actions";

// import { UserState } from "../types";

export const logState = {
  status: STATUS.IDLE,
  log: {},
  logList: [{}, {}],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
  documents: [],
  documentsLoading: false,
  count: 10,
};

export default {
  log: createReducer<any>(logState, (builder) => {
    builder
      .addCase(getLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: {
            ...payload.data,
          },
          loading: false,
        };
      })
      .addCase(getLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE LOG
    builder
      .addCase(createLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload,
          loading: false,
        };
      })
      .addCase(createLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE LOG
    builder
      .addCase(updateLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload.data,
          loading: false,
        };
      })
      .addCase(updateLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE LOG
    builder
      .addCase(deleteLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload,
          loading: false,
        };
      })
      .addCase(deleteLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF LOGS
    builder
      .addCase(getLogListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getLogListSuccess, (state, { payload }) => {
        return {
          ...state,
          logList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 10,
        };
      })
      .addCase(getLogListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
