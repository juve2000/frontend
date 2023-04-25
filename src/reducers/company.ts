import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getCompanyReq,
  getCompanySuccess,
  getCompanyFailed,
  getCompanyRootReq,
  getCompanyRootSuccess,
  getCompanyRootFailed,
  createCompanyRootReq,
  createCompanyRootSuccess,
  createCompanyRootFailed,
  updateCompanyReq,
  updateCompanySuccess,
  updateCompanyFailed,
  updateCompanyRootReq,
  updateCompanyRootSuccess,
  updateCompanyRootFailed,
  deleteCompanyRootReq,
  deleteCompanyRootSuccess,
  deleteCompanyRootFailed,
  getCompaniesListRootReq,
  getCompaniesListRootSuccess,
  getCompaniesListRootFailed,
} from "../actions";

// import { UserState } from "../types";

export const companyState = {
  status: STATUS.IDLE,
  company: {},
  companiesList: [],
  loading: false,
  errorMessage: "",
  count: 10,
  companyRoot: {},
};

export default {
  company: createReducer<any>(companyState, (builder) => {
    // GET COMPANY
    builder
      .addCase(getCompanyReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCompanySuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(getCompanyFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET COMPANY ROOT
    builder
      .addCase(getCompanyRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCompanyRootSuccess, (state, { payload }) => {
        return {
          ...state,
          companyRoot: payload,
          loading: false,
        };
      })
      .addCase(getCompanyRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE COMPANY ROOT
    builder
      .addCase(createCompanyRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createCompanyRootSuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(createCompanyRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE COMPANY
    builder
      .addCase(updateCompanyReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateCompanySuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(updateCompanyFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE COMPANY ROOT
    builder
      .addCase(updateCompanyRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateCompanyRootSuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(updateCompanyRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE COMPANY
    builder
      .addCase(deleteCompanyRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteCompanyRootSuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(deleteCompanyRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF COMPANIES ROOT
    builder
      .addCase(getCompaniesListRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCompaniesListRootSuccess, (state, { payload }) => {
        return {
          ...state,
          companiesList: payload.data,
          loading: false,
          count: payload.count || 10,
        };
      })
      .addCase(getCompaniesListRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
