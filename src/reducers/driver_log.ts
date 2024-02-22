import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getDriverLogReq,
  getDriverLogSuccess,
  getDriverLogFailed,
  createDriverLogReq,
  createDriverLogSuccess,
  createDriverLogFailed,
  updateDriverLogReq,
  updateDriverLogSuccess,
  updateDriverLogFailed,
  deleteDriverLogReq,
  deleteDriverLogSuccess,
  deleteDriverLogFailed,
  getDriverLogListReq,
  getDriverLogListSuccess,
  getDriverLogListFailed,
  getDriverDataLogSuccess,
  getDriverDataLogFailed,
  getDriverDataLogReq,
  getDriverDataCarrierLogReq,
  getDriverDataCarrierLogSuccess,
  getDriverDataCarrierLogFailed,
  setDriverLogDate,
} from "../actions";
import { getFormatDateFromTimeStamp } from "../components/modules/driver_log/log-utils";

// import { UserState } from "../types";

export const driverLogState = {
  status: STATUS.IDLE,
  log: {},
  driverlogList: [{}, {}],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
  documents: [],
  documentsLoading: false,
  count: 10,
  driverData: {
    driver: {},
    carrier: {},
  },
  driverLogDate: getFormatDateFromTimeStamp(Date.now() / 1000),
};

export default {
  driverLog: createReducer<any>(driverLogState, (builder) => {
    builder
      .addCase(getDriverLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: {
            ...payload.data,
          },
          loading: false,
        };
      })
      .addCase(getDriverLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      })
      .addCase(setDriverLogDate, (state, { payload }) => {
        return {
          ...state,
          driverLogDate: payload,
        };
      });
    // CREATE LOG
    builder
      .addCase(createDriverLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createDriverLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload,
          loading: false,
        };
      })
      .addCase(createDriverLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE LOG
    builder
      .addCase(updateDriverLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateDriverLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload.data,
          loading: false,
        };
      })
      .addCase(updateDriverLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE LOG
    builder
      .addCase(deleteDriverLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteDriverLogSuccess, (state, { payload }) => {
        return {
          ...state,
          log: payload,
          loading: false,
        };
      })
      .addCase(deleteDriverLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF LOGS
    builder
      .addCase(getDriverLogListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverLogListSuccess, (state, { payload }) => {
        console.log("getDriver data", payload);
        return {
          ...state,
          logList: payload?.data.events ? payload?.data?.events : payload.data,
          loading: false,
          count: payload?.params?.items?.count || 10,
          logUnit: payload?.data?.unit || {},
          logForms: payload?.data?.forms || [],
        };
      })
      .addCase(getDriverLogListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder
      .addCase(getDriverDataLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverDataLogSuccess, (state, { payload }) => {
        return {
          ...state,
          driverData: {
            driver: payload?.data,
            carrier: payload?.data?.carrier,
          },
        };
      })
      .addCase(getDriverDataLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder
      .addCase(getDriverDataCarrierLogReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverDataCarrierLogSuccess, (state, { payload }) => {
        console.log("payload", payload);
        return {
          ...state,
          driverData: {
            ...state?.driverData,
            carrier: payload?.data,
          },
        };
      })
      .addCase(getDriverDataCarrierLogFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
