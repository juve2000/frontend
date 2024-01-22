import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_DRIVER_LOG_REQUEST: undefined,
  GET_DRIVER_LOG_SUCCESS: undefined,
  GET_DRIVER_LOG_FAILURE: undefined,
  CREATE_DRIVER_LOG_REQUEST: undefined,
  CREATE_DRIVER_LOG_SUCCESS: undefined,
  CREATE_DRIVER_LOG_FAILURE: undefined,
  UPDATE_DRIVER_LOG_REQUEST: undefined,
  UPDATE_DRIVER_LOG_SUCCESS: undefined,
  UPDATE_DRIVER_LOG_FAILURE: undefined,
  DELETE_DRIVER_LOG_REQUEST: undefined,
  DELETE_DRIVER_LOG_SUCCESS: undefined,
  DELETE_DRIVER_LOG_FAILURE: undefined,
  GET_DRIVER_LOG_LIST_REQUEST: undefined,
  GET_DRIVER_LOG_LIST_SUCCESS: undefined,
  GET_DRIVER_LOG_LIST_FAILURE: undefined,
  SET_CURRENT_CARRIER: undefined,
});

export const DriverLogActionTypes = ActionTypes;

// get log

export const getDriverLogReq = createAction(
  ActionTypes.GET_DRIVER_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverLogSuccess = createAction(
  ActionTypes.GET_DRIVER_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverLogFailed = createAction(
  ActionTypes.GET_DRIVER_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create log

export const createDriverLogReq = createAction(
  ActionTypes.CREATE_DRIVER_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createDriverLogSuccess = createAction(
  ActionTypes.CREATE_DRIVER_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createDriverLogFailed = createAction(
  ActionTypes.CREATE_DRIVER_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update log

export const updateDriverLogReq = createAction(
  ActionTypes.UPDATE_DRIVER_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateDriverLogSuccess = createAction(
  ActionTypes.UPDATE_DRIVER_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateDriverLogFailed = createAction(
  ActionTypes.UPDATE_DRIVER_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete log

export const deleteDriverLogReq = createAction(
  ActionTypes.DELETE_DRIVER_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteDriverLogSuccess = createAction(
  ActionTypes.DELETE_DRIVER_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteDriverLogFailed = createAction(
  ActionTypes.DELETE_DRIVER_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get log list

export const getDriverLogListReq = createAction(
  ActionTypes.GET_DRIVER_LOG_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverLogListSuccess = createAction(
  ActionTypes.GET_DRIVER_LOG_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverLogListFailed = createAction(
  ActionTypes.GET_DRIVER_LOG_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
//SET_CURRENT_CARRIER
