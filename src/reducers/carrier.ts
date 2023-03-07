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
} from "../actions";

// import { UserState } from "../types";

export const carrierState = {
  status: STATUS.IDLE,
  carrier: {},
  carrierList: carriers,
  loading: false,
  errorMessage: "",
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
          driver: payload,
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
          carrierList: [
            ...payload.data,
            {
              ...payload.data[0],
              id: "2",
              terminals: [
                {
                  name: "Carrier Terminal Name 1",
                  tz: "2",
                  country: "USA",
                  area: "Area name terminal 1",
                  state: "AL",
                  number_street: "Vasile Alexandri 33/4 of 33",
                  address_index: "MD-2044",
                },
              ],
            },
          ],
        };
      })
      .addCase(getCarriersListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
