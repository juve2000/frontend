import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import { carriers } from "../components/modules/carrier/mock";

import {
  getCarrierReq,
  getCarrierSuccess,
  getCarrierFailed,
  createCarrierReq,
  createCarrierSuccess,
  createCarrierFailed,
  updateCarrierReq,
  updateCarrierSuccess,
  updateCarrierFailed,
  deleteCarrierReq,
  deleteCarrierSuccess,
  deleteCarrierFailed,
  getCarriersListReq,
  getCarriersListSuccess,
  getCarriersListFailed,
  getDeleteCarrierTerminalReq,
  getDeleteCarrierTerminalSuccess,
  getDeleteCarrierTerminalFailed,
} from "../actions";

// import { UserState } from "../types";

export const carrierState = {
  status: STATUS.IDLE,
  carrier: {},
  carrierList: [],
  loading: false,
  errorMessage: "",
  count: 10,
};

export default {
  carrier: createReducer<any>(carrierState, (builder) => {
    // GET CARRIER
    builder
      .addCase(getCarrierReq, (state, payload) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCarrierSuccess, (state, { payload }) => {
        return {
          ...state,
          carrier: {
            ...payload.data,
            settings: {
              ...payload.data.settings,
              period_starting_time: "12:13:14",
            },
          },

          loading: false,
        };
      })
      .addCase(getCarrierFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE CARRIER
    builder
      .addCase(createCarrierReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createCarrierSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(createCarrierFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE CARRIER
    builder
      .addCase(updateCarrierReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateCarrierSuccess, (state, { payload }) => {
        return {
          ...state,
          // driver: payload,
          carrier: payload.data,
          loading: false,
        };
      })
      .addCase(updateCarrierFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE CARRIER
    builder
      .addCase(deleteCarrierReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteCarrierSuccess, (state, { payload }) => {
        return {
          ...state,
          driver: payload,
          loading: false,
        };
      })
      .addCase(deleteCarrierFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF CARRIERS
    builder
      .addCase(getCarriersListReq, (state, { payload }) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getCarriersListSuccess, (state, { payload }) => {
        return {
          ...state,
          // driverList: payload,
          loading: false,
          carrierList: [...payload.data],
          count: payload.params.items.count,
        };
      })
      .addCase(getCarriersListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE CARRIER TERMINAL
    builder
      .addCase(getDeleteCarrierTerminalReq, (state, { payload }) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDeleteCarrierTerminalSuccess, (state, { payload }) => {
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(getDeleteCarrierTerminalFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
