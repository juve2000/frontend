import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getOfficeReq,
  getOfficeSuccess,
  getOfficeFailed,
  createOfficeReq,
  createOfficeSuccess,
  createOfficeFailed,
  updateOfficeReq,
  updateOfficeSuccess,
  updateOfficeFailed,
  deleteOfficeReq,
  deleteOfficeSuccess,
  deleteOfficeFailed,
  getOfficeListReq,
  getOfficeListSuccess,
  getOfficeListFailed,
} from "../actions";

// import { UserState } from "../types";

export const officeState = {
  status: STATUS.IDLE,
  office: {},
  officeList: [],
  loading: false,
  errorMessage: "",
};

export default {
  office: createReducer<any>(officeState, (builder) => {
    // GET COMPANY
    builder
      .addCase(getOfficeReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getOfficeSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(getOfficeFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE COMPANY
    builder
      .addCase(createOfficeReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createOfficeSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(createOfficeFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE COMPANY
    builder
      .addCase(updateOfficeReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateOfficeSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(updateOfficeFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE COMPANY
    builder
      .addCase(deleteOfficeReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteOfficeSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(deleteOfficeFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF COMPANIES
    builder
      .addCase(getOfficeListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getOfficeListSuccess, (state, { payload }) => {
        return {
          ...state,
          officeList: payload,
          loading: false,
        };
      })
      .addCase(getOfficeListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
