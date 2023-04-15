import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_DRIVER_GROUP_REQUEST: undefined,
  GET_DRIVER_GROUP_SUCCESS: undefined,
  GET_DRIVER_GROUP_FAILURE: undefined,
  CREATE_DRIVER_GROUP_SUCCESS: undefined,
  CREATE_DRIVER_GROUP_REQUEST: undefined,
  CREATE_DRIVER_GROUP_FAILURE: undefined,
  UPDATE_DRIVER_GROUP_REQUEST: undefined,
  UPDATE_DRIVER_GROUP_SUCCESS: undefined,
  UPDATE_DRIVER_GROUP_FAILURE: undefined,
  DELETE_DRIVER_GROUP_REQUEST: undefined,
  DELETE_DRIVER_GROUP_SUCCESS: undefined,
  DELETE_DRIVER_GROUP_FAILURE: undefined,
  GET_DRIVER_GROUP_LIST_REQUEST: undefined,
  GET_DRIVER_GROUP_LIST_SUCCESS: undefined,
  GET_DRIVER_GROUP_LIST_FAILURE: undefined,
  GET_DRIVER_GROUP_LIST_ROOT_REQUEST: undefined,
  GET_DRIVER_GROUP_LIST_ROOT_SUCCESS: undefined,
  GET_DRIVER_GROUP_LIST_ROOT_FAILURE: undefined,
  SET_CURRENT_DRIVER_GROUP_CARRIER: undefined,
});

export const DriverGroupActionTypes = ActionTypes;

//SET_CURRENT_CARRIER

export const setCurrentDriverGroupCarrier = createAction(
  ActionTypes.SET_CURRENT_DRIVER_GROUP_CARRIER,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get driver group

export const getDriverGroupReq = createAction(
  ActionTypes.GET_DRIVER_GROUP_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverGroupSuccess = createAction(
  ActionTypes.GET_DRIVER_GROUP_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverGroupFailed = createAction(
  ActionTypes.GET_DRIVER_GROUP_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create driver group

export const createDriverGroupReq = createAction(
  ActionTypes.CREATE_DRIVER_GROUP_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createDriverGroupSuccess = createAction(
  ActionTypes.CREATE_DRIVER_GROUP_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createDriverGroupFailed = createAction(
  ActionTypes.CREATE_DRIVER_GROUP_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update driver group

export const updateDriverGroupReq = createAction(
  ActionTypes.UPDATE_DRIVER_GROUP_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateDriverGroupSuccess = createAction(
  ActionTypes.UPDATE_DRIVER_GROUP_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateDriverGroupFailed = createAction(
  ActionTypes.UPDATE_DRIVER_GROUP_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete driver group

export const deleteDriverGroupReq = createAction(
  ActionTypes.DELETE_DRIVER_GROUP_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteDriverGroupSuccess = createAction(
  ActionTypes.DELETE_DRIVER_GROUP_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteDriverGroupFailed = createAction(
  ActionTypes.DELETE_DRIVER_GROUP_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get Driver list

export const getDriverGroupListReq = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverGroupListSuccess = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverGroupListFailed = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
//SET_CURRENT_CARRIER

export const getDriverGroupListRootReq = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverGroupListRootSuccess = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverGroupListRootFailed = createAction(
  ActionTypes.GET_DRIVER_GROUP_LIST_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
