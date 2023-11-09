import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getDriverAlertsReq,
  getDriverAlertsSuccess,
  getDriverAlertsFailed,
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
  setCurrentCarrier,
  deleteDriverDocumentReq,
  deleteDriverDocumentSuccess,
  deleteDriverDocumentFailed,
} from "../actions";

// import { UserState } from "../types";

export const alertsState = {
  alerts: [],
  loading: false,
  errorMessage: "",
  documents: [],
  documentsLoading: false,
  count: 10,
};

export default {
  alerts: createReducer<any>(alertsState, (builder) => {
    // GET DRIVER ALERTS
    builder
      .addCase(getDriverAlertsReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDriverAlertsSuccess, (state, { payload }) => {
        console.log("payload", payload);
        return {
          ...state,
          alerts: {
            ...payload.data,
            cargo_type: payload.data?.cargo_type?.map((ct: any) => +ct),
          },
          documents: payload.data?.documents,
          loading: false,
        };
      })
      .addCase(getDriverAlertsFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
