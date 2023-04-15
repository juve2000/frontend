import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const TrailerActionTypes = keyMirror({
  GET_TRAILER_REQUEST: undefined,
  GET_TRAILER_SUCCESS: undefined,
  GET_TRAILER_FAILURE: undefined,
  CREATE_TRAILER_REQUEST: undefined,
  CREATE_TRAILER_SUCCESS: undefined,
  CREATE_TRAILER_FAILURE: undefined,
  UPDATE_TRAILER_REQUEST: undefined,
  UPDATE_TRAILER_SUCCESS: undefined,
  UPDATE_TRAILER_FAILURE: undefined,
  DELETE_TRAILER_REQUEST: undefined,
  DELETE_TRAILER_SUCCESS: undefined,
  DELETE_TRAILER_FAILURE: undefined,
  GET_TRAILER_LIST_REQUEST: undefined,
  GET_TRAILER_LIST_SUCCESS: undefined,
  GET_TRAILER_LIST_FAILURE: undefined,
  SET_CURRENT_CARRIER_TRAILER: undefined,
});

// get vehicle

export const getTrailerReq = createAction(
  TrailerActionTypes.GET_TRAILER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getTrailerSuccess = createAction(
  TrailerActionTypes.GET_TRAILER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getTrailerFailed = createAction(
  TrailerActionTypes.GET_TRAILER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create trailer

export const createTrailerReq = createAction(
  TrailerActionTypes.CREATE_TRAILER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createTrailerSuccess = createAction(
  TrailerActionTypes.CREATE_TRAILER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createTrailerFailed = createAction(
  TrailerActionTypes.CREATE_TRAILER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update trailer

export const updateTrailerReq = createAction(
  TrailerActionTypes.UPDATE_TRAILER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateTrailerSuccess = createAction(
  TrailerActionTypes.UPDATE_TRAILER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateTrailerFailed = createAction(
  TrailerActionTypes.UPDATE_TRAILER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete trailer

export const deleteTrailerReq = createAction(
  TrailerActionTypes.DELETE_TRAILER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteTrailerSuccess = createAction(
  TrailerActionTypes.DELETE_TRAILER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteTrailerFailed = createAction(
  TrailerActionTypes.DELETE_TRAILER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get trailer list

export const getTrailerListReq = createAction(
  TrailerActionTypes.GET_TRAILER_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getTrailerListSuccess = createAction(
  TrailerActionTypes.GET_TRAILER_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getTrailerListFailed = createAction(
  TrailerActionTypes.GET_TRAILER_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const setCurrentCarrierTrailer = createAction(
  TrailerActionTypes.SET_CURRENT_CARRIER_TRAILER,
  (payload: any) => {
    return actionPayload(payload);
  }
);
