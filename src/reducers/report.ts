import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getReportReq,
  getReportSuccess,
  getReportFailed,
  createReportReq,
  createReportSuccess,
  createReportFailed,
  updateReportReq,
  updateReportSuccess,
  updateReportFailed,
  deleteReportReq,
  deleteReportSuccess,
  deleteReportFailed,
  getReportListReq,
  getReportListSuccess,
  getReportListFailed,
} from "../actions";

// import { UserState } from "../types";

export const reportState = {
  status: STATUS.IDLE,
  report: {},
  reportList: [],
  loading: false,
  errorMessage: "",
};

export default {
  report: createReducer<any>(reportState, (builder) => {
    // GET REPORT
    builder
      .addCase(getReportReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getReportSuccess, (state, { payload }) => {
        return {
          ...state,
          report: payload,
          loading: false,
        };
      })
      .addCase(getReportFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE REPORT
    builder
      .addCase(createReportReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createReportSuccess, (state, { payload }) => {
        return {
          ...state,
          report: payload,
          loading: false,
        };
      })
      .addCase(createReportFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE REPORT
    builder
      .addCase(updateReportReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateReportSuccess, (state, { payload }) => {
        return {
          ...state,
          eld: payload,
          loading: false,
        };
      })
      .addCase(updateReportFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE REPORT
    builder
      .addCase(deleteReportReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteReportSuccess, (state, { payload }) => {
        return {
          ...state,
          report: payload,
          loading: false,
        };
      })
      .addCase(deleteReportFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF REPORTS
    builder
      .addCase(getReportListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getReportListSuccess, (state, { payload }) => {
        return {
          ...state,
          reportList: payload,
          loading: false,
        };
      })
      .addCase(getReportListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
