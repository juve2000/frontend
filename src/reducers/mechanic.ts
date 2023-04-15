import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getMechanicReq,
  getMechanicSuccess,
  getMechanicFailed,
  createMechanicReq,
  createMechanicSuccess,
  createMechanicFailed,
  updateMechanicReq,
  updateMechanicSuccess,
  updateMechanicFailed,
  deleteMechanicReq,
  deleteMechanicSuccess,
  deleteMechanicFailed,
  getMechanicListReq,
  getMechanicListSuccess,
  getMechanicListFailed,
  setCurrentMechanicCarrier,
  getMechanicListRootReq,
  getMechanicListRootSuccess,
  getMechanicListRootFailed,
} from "../actions";

// import { UserState } from "../types";

export const mechanicState = {
  status: STATUS.IDLE,
  mechanic: {},
  mechanicList: [],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
  documents: [],
  mechanicListRoot: [],
};

export default {
  mechanic: createReducer<any>(mechanicState, (builder) => {
    // GET MECHANIC
    builder
      .addCase(getMechanicReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getMechanicSuccess, (state, { payload }) => {
        return {
          ...state,
          mechanic: payload.data,
          documents: payload.data?.documents,
          loading: false,
        };
      })
      .addCase(getMechanicFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE MECHANIC
    builder
      .addCase(createMechanicReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createMechanicSuccess, (state, { payload }) => {
        return {
          ...state,
          mechanic: payload,
          loading: false,
        };
      })
      .addCase(createMechanicFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE MECHANIC
    builder
      .addCase(updateMechanicReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateMechanicSuccess, (state, { payload }) => {
        return {
          ...state,
          // driver: payload,
          loading: false,
        };
      })
      .addCase(updateMechanicFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE MECHANIC
    builder
      .addCase(deleteMechanicReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteMechanicSuccess, (state, { payload }) => {
        return {
          ...state,
          mechanic: payload,
          loading: false,
        };
      })
      .addCase(deleteMechanicFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF MECHANIC
    builder
      .addCase(getMechanicListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getMechanicListSuccess, (state, { payload }) => {
        return {
          ...state,
          mechanicList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 20,
        };
      })
      .addCase(getMechanicListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder.addCase(setCurrentMechanicCarrier, (state, { payload }) => {
      return {
        ...state,
        currentCarrier: payload,
      };
    });
    // GET LIST OF MECHANIC ROOT
    builder
      .addCase(getMechanicListRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getMechanicListRootSuccess, (state, { payload }) => {
        return {
          ...state,
          mechanicList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 10,
        };
      })
      .addCase(getMechanicListRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
