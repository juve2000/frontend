import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const OfficeActionTypes = keyMirror({
  GET_OFFICE_REQUEST: undefined,
  GET_OFFICE_SUCCESS: undefined,
  GET_OFFICE_FAILURE: undefined,
  CREATE_OFFICE_REQUEST: undefined,
  CREATE_OFFICE_SUCCESS: undefined,
  CREATE_OFFICE_FAILURE: undefined,
  UPDATE_OFFICE_REQUEST: undefined,
  UPDATE_OFFICE_SUCCESS: undefined,
  UPDATE_OFFICE_FAILURE: undefined,
  DELETE_OFFICE_REQUEST: undefined,
  DELETE_OFFICE_SUCCESS: undefined,
  DELETE_OFFICE_FAILURE: undefined,
  GET_OFFICE_LIST_REQUEST: undefined,
  GET_OFFICE_LIST_SUCCESS: undefined,
  GET_OFFICE_LIST_FAILURE: undefined,
});

// get office

export const getOfficeReq = createAction(
  OfficeActionTypes.GET_OFFICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getOfficeSuccess = createAction(
  OfficeActionTypes.GET_OFFICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getOfficeFailed = createAction(
  OfficeActionTypes.GET_OFFICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create office

export const createOfficeReq = createAction(
  OfficeActionTypes.CREATE_OFFICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createOfficeSuccess = createAction(
  OfficeActionTypes.CREATE_OFFICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createOfficeFailed = createAction(
  OfficeActionTypes.CREATE_OFFICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update office

export const updateOfficeReq = createAction(
  OfficeActionTypes.UPDATE_OFFICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateOfficeSuccess = createAction(
  OfficeActionTypes.UPDATE_OFFICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateOfficeFailed = createAction(
  OfficeActionTypes.UPDATE_OFFICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete office

export const deleteOfficeReq = createAction(
  OfficeActionTypes.DELETE_OFFICE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteOfficeSuccess = createAction(
  OfficeActionTypes.DELETE_OFFICE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteOfficeFailed = createAction(
  OfficeActionTypes.DELETE_OFFICE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get office list

export const getOfficeListReq = createAction(
  OfficeActionTypes.GET_OFFICE_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getOfficeListSuccess = createAction(
  OfficeActionTypes.GET_OFFICE_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getOfficeListFailed = createAction(
  OfficeActionTypes.GET_OFFICE_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
