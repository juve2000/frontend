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
  getVehicleListRootReq,
  getVehicleListRootSuccess,
  getVehicleListRootFailed,
  setCurrentVehicleCarrier,
} from "../actions";

// import { UserState } from "../types";

export const vehicleState = {
  status: STATUS.IDLE,
  vehicle: {},
  vehicleList: [],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
  count: 10,
};

export default {
  vehicle: createReducer<any>(vehicleState, (builder) => {
    // GET VEHICLE
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
    // GET LIST OF VEHICLE ROOT
    builder
      .addCase(getVehicleListRootReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getVehicleListRootSuccess, (state, { payload }) => {
        return {
          ...state,
          vehicleList: payload,
          loading: false,
          count: payload?.params?.items?.count || 10,
        };
      })
      .addCase(getVehicleListRootFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // SET CURRENT VEHICLE CARRIER
    builder.addCase(setCurrentVehicleCarrier, (state, { payload }) => {
      return {
        ...state,
        errorMessage: "",
        currentCarrier: payload,
      };
    });
  }),
};
