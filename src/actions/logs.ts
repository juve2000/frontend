import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_LOG_REQUEST: undefined,
  GET_LOG_SUCCESS: undefined,
  GET_LOG_FAILURE: undefined,
  CREATE_LOG_REQUEST: undefined,
  CREATE_LOG_SUCCESS: undefined,
  CREATE_LOG_FAILURE: undefined,
  UPDATE_LOG_REQUEST: undefined,
  UPDATE_LOG_SUCCESS: undefined,
  UPDATE_LOG_FAILURE: undefined,
  DELETE_LOG_REQUEST: undefined,
  DELETE_LOG_SUCCESS: undefined,
  DELETE_LOG_FAILURE: undefined,
  GET_LOG_LIST_REQUEST: undefined,
  GET_LOG_LIST_SUCCESS: undefined,
  GET_LOG_LIST_FAILURE: undefined,
  SET_CURRENT_CARRIER: undefined,
});

export const LogActionTypes = ActionTypes;

// get log

export const getLogReq = createAction(
  ActionTypes.GET_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getLogSuccess = createAction(
  ActionTypes.GET_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getLogFailed = createAction(
  ActionTypes.GET_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create log

export const createLogReq = createAction(
  ActionTypes.CREATE_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createLogSuccess = createAction(
  ActionTypes.CREATE_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createLogFailed = createAction(
  ActionTypes.CREATE_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update log

export const updateLogReq = createAction(
  ActionTypes.UPDATE_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateLogSuccess = createAction(
  ActionTypes.UPDATE_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateLogFailed = createAction(
  ActionTypes.UPDATE_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete log

export const deleteLogReq = createAction(
  ActionTypes.DELETE_LOG_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteLogSuccess = createAction(
  ActionTypes.DELETE_LOG_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteLogFailed = createAction(
  ActionTypes.DELETE_LOG_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get log list

export const getLogListReq = createAction(
  ActionTypes.GET_LOG_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getLogListSuccess = createAction(
  ActionTypes.GET_LOG_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getLogListFailed = createAction(
  ActionTypes.GET_LOG_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
//SET_CURRENT_CARRIER
