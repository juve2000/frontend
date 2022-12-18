import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const VehicleActionTypes = keyMirror({
  GET_VEHICLE_REQUEST: undefined,
  GET_VEHICLE_SUCCESS: undefined,
  GET_VEHICLE_FAILURE: undefined,
  CREATE_VEHICLE_REQUEST: undefined,
  CREATE_VEHICLE_SUCCESS: undefined,
  CREATE_VEHICLE_FAILURE: undefined,
  UPDATE_VEHICLE_REQUEST: undefined,
  UPDATE_VEHICLE_SUCCESS: undefined,
  UPDATE_VEHICLE_FAILURE: undefined,
  DELETE_VEHICLE_REQUEST: undefined,
  DELETE_VEHICLE_SUCCESS: undefined,
  DELETE_VEHICLE_FAILURE: undefined,
  GET_VEHICLE_LIST_REQUEST: undefined,
  GET_VEHICLE_LIST_SUCCESS: undefined,
  GET_VEHICLE_LIST_FAILURE: undefined,
});

// get vehicle

export const getVehicleReq = createAction(
  VehicleActionTypes.GET_VEHICLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getVehicleSuccess = createAction(
  VehicleActionTypes.GET_VEHICLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getVehicleFailed = createAction(
  VehicleActionTypes.GET_VEHICLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create vehicle

export const createVehicleReq = createAction(
  VehicleActionTypes.CREATE_VEHICLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createVehicleSuccess = createAction(
  VehicleActionTypes.CREATE_VEHICLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createVehicleFailed = createAction(
  VehicleActionTypes.CREATE_VEHICLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update office

export const updateVehicleReq = createAction(
  VehicleActionTypes.UPDATE_VEHICLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateVehicleSuccess = createAction(
  VehicleActionTypes.UPDATE_VEHICLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateVehicleFailed = createAction(
  VehicleActionTypes.UPDATE_VEHICLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete vehicle

export const deleteVehicleReq = createAction(
  VehicleActionTypes.DELETE_VEHICLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteVehicleSuccess = createAction(
  VehicleActionTypes.DELETE_VEHICLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteVehicleFailed = createAction(
  VehicleActionTypes.DELETE_VEHICLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get vehicle list

export const getVehicleListReq = createAction(
  VehicleActionTypes.GET_VEHICLE_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getVehicleListSuccess = createAction(
  VehicleActionTypes.GET_VEHICLE_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getVehicleListFailed = createAction(
  VehicleActionTypes.GET_VEHICLE_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
