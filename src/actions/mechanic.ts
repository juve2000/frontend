import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_MECHANIC_REQUEST: undefined,
  GET_MECHANIC_SUCCESS: undefined,
  GET_MECHANIC_FAILURE: undefined,
  CREATE_MECHANIC_REQUEST: undefined,
  CREATE_MECHANIC_SUCCESS: undefined,
  CREATE_MECHANIC_FAILURE: undefined,
  UPDATE_MECHANIC_REQUEST: undefined,
  UPDATE_MECHANIC_SUCCESS: undefined,
  UPDATE_MECHANIC_FAILURE: undefined,
  DELETE_MECHANIC_REQUEST: undefined,
  DELETE_MECHANIC_SUCCESS: undefined,
  DELETE_MECHANIC_FAILURE: undefined,
  GET_MECHANIC_LIST_REQUEST: undefined,
  GET_MECHANIC_LIST_SUCCESS: undefined,
  GET_MECHANIC_LIST_FAILURE: undefined,
  GET_MECHANIC_LIST_ROOT_REQUEST: undefined,
  GET_MECHANIC_LIST_ROOT_SUCCESS: undefined,
  GET_MECHANIC_LIST_ROOT_FAILURE: undefined,
  SET_CURRENT_MECHANIC_CARRIER: undefined,
});

export const MechanicActionTypes = ActionTypes;

// get mechanic

export const getMechanicReq = createAction(
  ActionTypes.GET_MECHANIC_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getMechanicSuccess = createAction(
  ActionTypes.GET_MECHANIC_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getMechanicFailed = createAction(
  ActionTypes.GET_MECHANIC_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create mechanic

export const createMechanicReq = createAction(
  ActionTypes.CREATE_MECHANIC_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createMechanicSuccess = createAction(
  ActionTypes.CREATE_MECHANIC_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createMechanicFailed = createAction(
  ActionTypes.CREATE_MECHANIC_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update mechanic

export const updateMechanicReq = createAction(
  ActionTypes.UPDATE_MECHANIC_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateMechanicSuccess = createAction(
  ActionTypes.UPDATE_MECHANIC_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateMechanicFailed = createAction(
  ActionTypes.UPDATE_MECHANIC_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete mechanic

export const deleteMechanicReq = createAction(
  ActionTypes.DELETE_MECHANIC_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteMechanicSuccess = createAction(
  ActionTypes.DELETE_MECHANIC_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteMechanicFailed = createAction(
  ActionTypes.DELETE_MECHANIC_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get mechanic list

export const getMechanicListReq = createAction(
  ActionTypes.GET_MECHANIC_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getMechanicListSuccess = createAction(
  ActionTypes.GET_MECHANIC_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getMechanicListFailed = createAction(
  ActionTypes.GET_MECHANIC_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// GET MECHANIC LIST ROOT

export const getMechanicListRootReq = createAction(
  ActionTypes.GET_MECHANIC_LIST_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getMechanicListRootSuccess = createAction(
  ActionTypes.GET_MECHANIC_LIST_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getMechanicListRootFailed = createAction(
  ActionTypes.GET_MECHANIC_LIST_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
//SET_CURRENT_MECHANIC_CARRIER

export const setCurrentMechanicCarrier = createAction(
  ActionTypes.SET_CURRENT_MECHANIC_CARRIER,
  (payload: any) => {
    return actionPayload(payload);
  }
);
