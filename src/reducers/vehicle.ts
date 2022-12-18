import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getVehicleReq,
  getVehicleSuccess,
  getVehicleFailed,
  createVehicleReq,
  createVehicleSuccess,
  createVehicleFailed,
  updateVehicleReq,
  updateVehicleSuccess,
  updateVehicleFailed,
  deleteVehicleReq,
  deleteVehicleSuccess,
  deleteVehicleFailed,
  getVehicleListReq,
  getVehicleListSuccess,
  getVehicleListFailed,
} from "../actions";

// import { UserState } from "../types";

export const vehicleState = {
  status: STATUS.IDLE,
  vehicle: {},
  vehicleList: [],
  loading: false,
  errorMessage: "",
};

export default {
  vehicle: createReducer<any>(vehicleState, (builder) => {
    // GET COMPANY
    builder
      .addCase(getVehicleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getVehicleSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicle: payload,
          loading: false,
        };
      })
      .addCase(getVehicleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE VEHICLE
    builder
      .addCase(createVehicleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createVehicleSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicle: payload,
          loading: false,
        };
      })
      .addCase(createVehicleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE VEHICLE
    builder
      .addCase(updateVehicleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateVehicleSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicle: payload,
          loading: false,
        };
      })
      .addCase(updateVehicleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE VEHICLE
    builder
      .addCase(deleteVehicleReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteVehicleSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicle: payload,
          loading: false,
        };
      })
      .addCase(deleteVehicleFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF VEHICLE
    builder
      .addCase(getVehicleListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getVehicleListSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicleList: payload,
          loading: false,
        };
      })
      .addCase(getVehicleListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
