import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_DEVICE_REQUEST: undefined,
  GET_DEVICE_SUCCESS: undefined,
  GET_DEVICE_FAILURE: undefined,
  CREATE_DEVICE_REQUEST: undefined,
  CREATE_DEVICE_SUCCESS: undefined,
  CREATE_DEVICE_FAILURE: undefined,
  UPDATE_DEVICE_REQUEST: undefined,
  UPDATE_DEVICE_SUCCESS: undefined,
  UPDATE_DEVICE_FAILURE: undefined,
  DELETE_DEVICE_REQUEST: undefined,
  DELETE_DEVICE_SUCCESS: undefined,
  DELETE_DEVICE_FAILURE: undefined,
  GET_DEVICE_LIST_REQUEST: undefined,
  GET_DEVICE_LIST_SUCCESS: undefined,
  GET_DEVICE_LIST_FAILURE: undefined,
  SET_CURRENT_DEVICE_CARRIER: undefined,
});

export const DeviceActionTypes = ActionTypes;

// get device

export const getDeviceReq = createAction(
  ActionTypes.GET_DEVICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDeviceSuccess = createAction(
  ActionTypes.GET_DEVICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDeviceFailed = createAction(
  ActionTypes.GET_DEVICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create device

export const createDeviceReq = createAction(
  ActionTypes.CREATE_DEVICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createDeviceSuccess = createAction(
  ActionTypes.CREATE_DEVICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createDeviceFailed = createAction(
  ActionTypes.CREATE_DEVICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update device

export const updateDeviceReq = createAction(
  ActionTypes.UPDATE_DEVICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateDeviceSuccess = createAction(
  ActionTypes.UPDATE_DEVICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateDeviceFailed = createAction(
  ActionTypes.UPDATE_DEVICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete device

export const deleteDeviceReq = createAction(
  ActionTypes.DELETE_DEVICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteDeviceSuccess = createAction(
  ActionTypes.DELETE_DEVICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteDeviceFailed = createAction(
  ActionTypes.DELETE_DEVICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get device list

export const getDeviceListReq = createAction(
  ActionTypes.GET_DEVICE_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDeviceListSuccess = createAction(
  ActionTypes.GET_DEVICE_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDeviceListFailed = createAction(
  ActionTypes.GET_DEVICE_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
//SET_CURRENT_CARRIER

export const setCurrentDeviceCarrier = createAction(
  ActionTypes.SET_CURRENT_DEVICE_CARRIER,
  (payload: any) => {
    return actionPayload(payload);
  }
);
