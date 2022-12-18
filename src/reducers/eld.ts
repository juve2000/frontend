import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getEldReq,
  getEldSuccess,
  getEldFailed,
  createEldReq,
  createEldSuccess,
  createEldFailed,
  updateEldReq,
  updateEldSuccess,
  updateEldFailed,
  deleteEldReq,
  deleteEldSuccess,
  deleteEldFailed,
  getEldListReq,
  getEldListSuccess,
  getEldListFailed,
} from "../actions";

// import { UserState } from "../types";

export const eldState = {
  status: STATUS.IDLE,
  eld: {},
  eldList: [],
  loading: false,
  errorMessage: "",
};

export default {
  eld: createReducer<any>(eldState, (builder) => {
    // GET ELD
    builder
      .addCase(getEldReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getEldSuccess, (state, { payload }) => {
        return {
          ...state,
          eld: payload,
          loading: false,
        };
      })
      .addCase(getEldFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE ELD
    builder
      .addCase(createEldReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createEldSuccess, (state, { payload }) => {
        return {
          ...state,
          eld: payload,
          loading: false,
        };
      })
      .addCase(createEldFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE ELD
    builder
      .addCase(updateEldReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateEldSuccess, (state, { payload }) => {
        return {
          ...state,
          eld: payload,
          loading: false,
        };
      })
      .addCase(updateEldFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE ELD
    builder
      .addCase(deleteEldReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteEldSuccess, (state, { payload }) => {
        return {
          ...state,
          eld: payload,
          loading: false,
        };
      })
      .addCase(deleteEldFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF ELD
    builder
      .addCase(getEldListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getEldListSuccess, (state, { payload }) => {
        return {
          ...state,
          eldList: payload,
          loading: false,
        };
      })
      .addCase(getEldListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
