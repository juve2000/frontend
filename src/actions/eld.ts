import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const ActionTypes = keyMirror({
  GET_ELD_REQUEST: undefined,
  GET_ELD_SUCCESS: undefined,
  GET_ELD_FAILURE: undefined,
  CREATE_ELD_REQUEST: undefined,
  CREATE_ELD_SUCCESS: undefined,
  CREATE_ELD_FAILURE: undefined,
  UPDATE_ELD_REQUEST: undefined,
  UPDATE_ELD_SUCCESS: undefined,
  UPDATE_ELD_FAILURE: undefined,
  DELETE_ELD_REQUEST: undefined,
  DELETE_ELD_SUCCESS: undefined,
  DELETE_ELD_FAILURE: undefined,
  GET_ELD_LIST_REQUEST: undefined,
  GET_ELD_LIST_SUCCESS: undefined,
  GET_ELD_LIST_FAILURE: undefined,
});

export const EldActionTypes = ActionTypes;

// get eld

export const getEldReq = createAction(
  ActionTypes.GET_ELD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getEldSuccess = createAction(
  ActionTypes.GET_ELD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getEldFailed = createAction(
  ActionTypes.GET_ELD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create eld

export const createEldReq = createAction(
  ActionTypes.CREATE_ELD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createEldSuccess = createAction(
  ActionTypes.CREATE_ELD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createEldFailed = createAction(
  ActionTypes.CREATE_ELD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update trailer

export const updateEldReq = createAction(
  ActionTypes.UPDATE_ELD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateEldSuccess = createAction(
  ActionTypes.UPDATE_ELD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateEldFailed = createAction(
  ActionTypes.UPDATE_ELD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete eld

export const deleteEldReq = createAction(
  ActionTypes.DELETE_ELD_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteEldSuccess = createAction(
  ActionTypes.DELETE_ELD_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteEldFailed = createAction(
  ActionTypes.DELETE_ELD_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get eld list

export const getEldListReq = createAction(
  ActionTypes.GET_ELD_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getEldListSuccess = createAction(
  ActionTypes.GET_ELD_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getEldListFailed = createAction(
  ActionTypes.GET_ELD_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
