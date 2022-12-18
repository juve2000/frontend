import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getCompanyReq,
  getCompanySuccess,
  getCompanyFailed,
  createCompanyReq,
  createCompanySuccess,
  createCompanyFailed,
  updateCompanyReq,
  updateCompanySuccess,
  updateCompanyFailed,
  deleteCompanyReq,
  deleteCompanySuccess,
  deleteCompanyFailed,
  getCompaniesListReq,
  getCompaniesListSuccess,
  getCompaniesListFailed,
} from "../actions";

// import { UserState } from "../types";

export const companyState = {
  status: STATUS.IDLE,
  company: {},
  companiesList: [],
  loading: false,
  errorMessage: "",
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
    // CREATE COMPANY
    builder
      .addCase(createCompanyReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createCompanySuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(createCompanyFailed, (state, { payload }) => {
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
    // DELETE COMPANY
    builder
      .addCase(deleteCompanyReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteCompanySuccess, (state, { payload }) => {
        return {
          ...state,
          company: payload,
          loading: false,
        };
      })
      .addCase(deleteCompanyFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF COMPANIES
    builder
      .addCase(getCompaniesListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCompaniesListSuccess, (state, { payload }) => {
        return {
          ...state,
          companiesList: payload,
          loading: false,
        };
      })
      .addCase(getCompaniesListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
