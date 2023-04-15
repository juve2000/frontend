import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getTrailerReq,
  getTrailerSuccess,
  getTrailerFailed,
  createTrailerReq,
  createTrailerSuccess,
  createTrailerFailed,
  updateTrailerReq,
  updateTrailerSuccess,
  updateTrailerFailed,
  deleteTrailerReq,
  deleteTrailerSuccess,
  deleteTrailerFailed,
  getTrailerListReq,
  getTrailerListSuccess,
  getTrailerListFailed,
  setCurrentCarrierTrailer,
} from "../actions";

// import { UserState } from "../types";

export const trailerState = {
  status: STATUS.IDLE,
  trailer: {},
  trailerList: [],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
};

export default {
  trailer: createReducer<any>(trailerState, (builder) => {
    // GET TRAILER
    builder
      .addCase(getTrailerReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getTrailerSuccess, (state, { payload }) => {
        return {
          ...state,
          trailer: payload,
          loading: false,
        };
      })
      .addCase(getTrailerFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE TRAILER
    builder
      .addCase(createTrailerReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createTrailerSuccess, (state, { payload }) => {
        return {
          ...state,
          trailer: payload,
          loading: false,
        };
      })
      .addCase(createTrailerFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE TRAILER
    builder
      .addCase(updateTrailerReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateTrailerSuccess, (state, { payload }) => {
        return {
          ...state,
          trailer: payload,
          loading: false,
        };
      })
      .addCase(updateTrailerFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE TRAILER
    builder
      .addCase(deleteTrailerReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteTrailerSuccess, (state, { payload }) => {
        return {
          ...state,
          trailer: payload,
          loading: false,
        };
      })
      .addCase(deleteTrailerFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF TRAILERS
    builder
      .addCase(getTrailerListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getTrailerListSuccess, (state, { payload }) => {
        return {
          ...state,
          trailerList: payload,
          loading: false,
        };
      })
      .addCase(getTrailerListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder.addCase(setCurrentCarrierTrailer, (state, { payload }) => {
      return {
        ...state,
        loading: true,
        errorMessage: "",
        currentCarrier: payload,
      };
    });
  }),
};
