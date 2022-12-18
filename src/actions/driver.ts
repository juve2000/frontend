import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_DRIVER_REQUEST: undefined,
  GET_DRIVER_SUCCESS: undefined,
  GET_DRIVER_FAILURE: undefined,
  CREATE_DRIVER_REQUEST: undefined,
  CREATE_DRIVER_SUCCESS: undefined,
  CREATE_DRIVER_FAILURE: undefined,
  UPDATE_DRIVER_REQUEST: undefined,
  UPDATE_DRIVER_SUCCESS: undefined,
  UPDATE_DRIVER_FAILURE: undefined,
  DELETE_DRIVER_REQUEST: undefined,
  DELETE_DRIVER_SUCCESS: undefined,
  DELETE_DRIVER_FAILURE: undefined,
  GET_DRIVER_LIST_REQUEST: undefined,
  GET_DRIVER_LIST_SUCCESS: undefined,
  GET_DRIVER_LIST_FAILURE: undefined,
});

export const DriverActionTypes = ActionTypes;

// get eld

export const getDriverReq = createAction(
  ActionTypes.GET_DRIVER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverSuccess = createAction(
  ActionTypes.GET_DRIVER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverFailed = createAction(
  ActionTypes.GET_DRIVER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create driver

export const createDriverReq = createAction(
  ActionTypes.CREATE_DRIVER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createDriverSuccess = createAction(
  ActionTypes.CREATE_DRIVER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createDriverFailed = createAction(
  ActionTypes.CREATE_DRIVER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update traidriver

export const updateDriverReq = createAction(
  ActionTypes.UPDATE_DRIVER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateDriverSuccess = createAction(
  ActionTypes.UPDATE_DRIVER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateDriverFailed = createAction(
  ActionTypes.UPDATE_DRIVER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete driver

export const deleteDriverReq = createAction(
  ActionTypes.DELETE_DRIVER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteDriverSuccess = createAction(
  ActionTypes.DELETE_DRIVER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteDriverFailed = createAction(
  ActionTypes.DELETE_DRIVER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get Driver list

export const getDriverListReq = createAction(
  ActionTypes.GET_DRIVER_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverListSuccess = createAction(
  ActionTypes.GET_DRIVER_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverListFailed = createAction(
  ActionTypes.GET_DRIVER_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
