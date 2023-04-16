import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getDeviceReq,
  getDeviceSuccess,
  getDeviceFailed,
  createDeviceReq,
  createDeviceSuccess,
  createDeviceFailed,
  updateDeviceReq,
  updateDeviceSuccess,
  updateDeviceFailed,
  deleteDeviceReq,
  deleteDeviceSuccess,
  deleteDeviceFailed,
  getDeviceListReq,
  getDeviceListSuccess,
  getDeviceListFailed,
  setCurrentDeviceCarrier,
} from "../actions";

export const deviceState = {
  status: STATUS.IDLE,
  device: {},
  deviceList: [],
  loading: false,
  errorMessage: "",
  currentCarrier: {},
};

export default {
  device: createReducer<any>(deviceState, (builder) => {
    // GET DEVICE
    builder
      .addCase(getDeviceReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDeviceSuccess, (state, { payload }) => {
        return {
          ...state,
          device: {
            ...payload.data,
          },
          loading: false,
        };
      })
      .addCase(getDeviceFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE DEVICE
    builder
      .addCase(createDeviceReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createDeviceSuccess, (state, { payload }) => {
        return {
          ...state,
          device: payload,
          loading: false,
        };
      })
      .addCase(createDeviceFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE DEVICE
    builder
      .addCase(updateDeviceReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateDeviceSuccess, (state, { payload }) => {
        return {
          ...state,
          // driver: payload,
          loading: false,
        };
      })
      .addCase(updateDeviceFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE DEVICE
    builder
      .addCase(deleteDeviceReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteDeviceSuccess, (state, { payload }) => {
        return {
          ...state,
          device: payload,
          loading: false,
        };
      })
      .addCase(deleteDeviceFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF DEVICES
    builder
      .addCase(getDeviceListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getDeviceListSuccess, (state, { payload }) => {
        return {
          ...state,
          deviceList: payload.data,
          loading: false,
          count: payload?.params?.items?.count || 10,
        };
      })
      .addCase(getDeviceListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    builder.addCase(setCurrentDeviceCarrier, (state, { payload }) => {
      return {
        ...state,
        currentCarrier: payload,
      };
    });
  }),
};
