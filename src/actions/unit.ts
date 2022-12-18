import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_UNIT_REQUEST: undefined,
  GET_UNIT_SUCCESS: undefined,
  GET_UNIT_FAILURE: undefined,
  CREATE_UNIT_REQUEST: undefined,
  CREATE_UNIT_SUCCESS: undefined,
  CREATE_UNIT_FAILURE: undefined,
  UPDATE_UNIT_REQUEST: undefined,
  UPDATE_UNIT_SUCCESS: undefined,
  UPDATE_UNIT_FAILURE: undefined,
  DELETE_UNIT_REQUEST: undefined,
  DELETE_UNIT_SUCCESS: undefined,
  DELETE_UNIT_FAILURE: undefined,
  GET_UNIT_LIST_REQUEST: undefined,
  GET_UNIT_LIST_SUCCESS: undefined,
  GET_UNIT_LIST_FAILURE: undefined,
});

export const UnitActionTypes = ActionTypes;

// get unit

export const getUnitReq = createAction(
  ActionTypes.GET_UNIT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUnitSuccess = createAction(
  ActionTypes.GET_UNIT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUnitFailed = createAction(
  ActionTypes.GET_UNIT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create unit

export const createUnitReq = createAction(
  ActionTypes.CREATE_UNIT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createUnitSuccess = createAction(
  ActionTypes.CREATE_UNIT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createUnitFailed = createAction(
  ActionTypes.CREATE_UNIT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update unit

export const updateUnitReq = createAction(
  ActionTypes.UPDATE_UNIT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateUnitSuccess = createAction(
  ActionTypes.UPDATE_UNIT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateUnitFailed = createAction(
  ActionTypes.UPDATE_UNIT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete unit

export const deleteUnitReq = createAction(
  ActionTypes.DELETE_UNIT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteUnitSuccess = createAction(
  ActionTypes.DELETE_UNIT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteUnitFailed = createAction(
  ActionTypes.DELETE_UNIT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get eld list

export const getUnitListReq = createAction(
  ActionTypes.GET_UNIT_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUnitListSuccess = createAction(
  ActionTypes.GET_UNIT_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUnitListFailed = createAction(
  ActionTypes.GET_UNIT_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
