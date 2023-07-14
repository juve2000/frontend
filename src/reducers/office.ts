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
  getOfficeListRootReq,
  getOfficeListRootSuccess,
  getOfficeListRootFailed,
  createOfficeRootReq,
  createOfficeRootSuccess,
  createOfficeRootFailed,
  updateOfficeRootReq,
  updateOfficeRootSuccess,
  updateOfficeRootFailed,
} from "../actions";

// import { UserState } from "../types";

export const officeState = {
  status: STATUS.IDLE,
  office: {},
  officeList: [],
  loading: false,
  errorMessage: "",
  count: 10,
};

export default {
  office: createReducer<any>(officeState, (builder) => {
    // GET OFFICE
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
    // CREATE OFFICE
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
    // UPDATE OFFICE
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
    // DELETE OFFICE
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
    // GET LIST OF OFFICES
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
          officeList: payload.data,
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
    // GET LIST OF OFFICES ROOT
    builder
      .addCase(getOfficeListRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getOfficeListRootSuccess, (state, { payload }) => {
        return {
          ...state,
          officeList: payload.data,
          loading: false,
        };
      })
      .addCase(getOfficeListRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE OFFICE ROOT
    builder
      .addCase(createOfficeRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createOfficeRootSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(createOfficeRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE OFFICE ROOT
    builder
      .addCase(updateOfficeRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateOfficeRootSuccess, (state, { payload }) => {
        return {
          ...state,
          office: payload,
          loading: false,
        };
      })
      .addCase(updateOfficeRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
