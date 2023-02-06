import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const CarrierActionTypes = keyMirror({
  GET_CARRIER_REQUEST: undefined,
  GET_CARRIER_SUCCESS: undefined,
  GET_CARRIER_FAILURE: undefined,
  CREATE_CARRIER_REQUEST: undefined,
  CREATE_CARRIER_SUCCESS: undefined,
  CREATE_CARRIER_FAILURE: undefined,
  UPDATE_CARRIER_REQUEST: undefined,
  UPDATE_CARRIER_SUCCESS: undefined,
  UPDATE_CARRIER_FAILURE: undefined,
  DELETE_CARRIER_REQUEST: undefined,
  DELETE_CARRIER_SUCCESS: undefined,
  DELETE_CARRIER_FAILURE: undefined,
  GET_CARRIERS_LIST_REQUEST: undefined,
  GET_CARRIERS_LIST_SUCCESS: undefined,
  GET_CARRIERS_LIST_FAILURE: undefined,
});

// get carrier

export const getCarrierReq = createAction(
  CarrierActionTypes.GET_CARRIER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCarrierSuccess = createAction(
  CarrierActionTypes.GET_CARRIER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCarrierFailed = createAction(
  CarrierActionTypes.GET_CARRIER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create carrier

export const createCarrierReq = createAction(
  CarrierActionTypes.CREATE_CARRIER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createCarrierSuccess = createAction(
  CarrierActionTypes.CREATE_CARRIER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createCarrierFailed = createAction(
  CarrierActionTypes.CREATE_CARRIER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update carrier

export const updateCarrierReq = createAction(
  CarrierActionTypes.UPDATE_CARRIER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateCarrierSuccess = createAction(
  CarrierActionTypes.UPDATE_CARRIER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateCarrierFailed = createAction(
  CarrierActionTypes.UPDATE_CARRIER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete carrier

export const deleteCarrierReq = createAction(
  CarrierActionTypes.DELETE_CARRIER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteCarrierSuccess = createAction(
  CarrierActionTypes.DELETE_CARRIER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteCarrierFailed = createAction(
  CarrierActionTypes.DELETE_CARRIER_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get carriers list

export const getCarriersListReq = createAction(
  CarrierActionTypes.GET_CARRIERS_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCarriersListSuccess = createAction(
  CarrierActionTypes.GET_CARRIERS_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCarriersListFailed = createAction(
  CarrierActionTypes.GET_CARRIERS_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
