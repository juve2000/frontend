import React from "react";
import { uuid } from "@gilbarbara/helpers";
import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

import { ActionTypes as AT } from "../literals";

import { ShowAlertOptions } from "../types";

export const hideAlert = createAction<string>(AT.HIDE_ALERT);

export const showAlert = createAction(
  AT.SHOW_ALERT,
  (message: React.ReactNode, options: ShowAlertOptions) => {
    const timeout = options.variant === "danger" ? 0 : 5;

    return actionPayload({
      id: options.id || uuid(),
      icon: options.icon || "dot-circle-o",
      message,
      position: options.position || "bottom-right",
      variant: options.variant || "dark",
      timeout: typeof options.timeout === "number" ? options.timeout : timeout,
    });
  }
);

const ActionTypes = keyMirror({
  GET_DRIVER_ALERTS_REQUEST: undefined,
  GET_DRIVER_ALERTS_SUCCESS: undefined,
  GET_DRIVER_ALERTS_FAILURE: undefined,
  CREATE_DRIVER_ALERTS_REQUEST: undefined,
  CREATE_DRIVER_ALERTS_SUCCESS: undefined,
  CREATE_DRIVER_ALERTS_FAILURE: undefined,
  UPDATE_DRIVER_ALERTS_REQUEST: undefined,
  UPDATE_DRIVER_ALERTS_SUCCESS: undefined,
  UPDATE_DRIVER_ALERTS_FAILURE: undefined,
  DELETE_DRIVER_ALERTS_REQUEST: undefined,
  DELETE_DRIVER_ALERTS_SUCCESS: undefined,
  DELETE_DRIVER_ALERTS_FAILURE: undefined,
  GET_DRIVER_LIST_ALERTS_REQUEST: undefined,
  GET_DRIVER_LIST_ALERTS_SUCCESS: undefined,
  GET_DRIVER_LIST_ALERTS_FAILURE: undefined,
  SET_CURRENT_CARRIER: undefined,
});

export const AlertActionTypes = ActionTypes;

// get driver alerts

export const getDriverAlertsReq = createAction(
  ActionTypes.GET_DRIVER_ALERTS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverAlertsSuccess = createAction(
  ActionTypes.GET_DRIVER_ALERTS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverAlertsFailed = createAction(
  ActionTypes.GET_DRIVER_ALERTS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create driver alerts

export const createDriverAlertsReq = createAction(
  ActionTypes.CREATE_DRIVER_ALERTS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createDriverAlertsSuccess = createAction(
  ActionTypes.CREATE_DRIVER_ALERTS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createDriverAlertsFailed = createAction(
  ActionTypes.CREATE_DRIVER_ALERTS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update driver alerts

export const updateDriverAlertsReq = createAction(
  ActionTypes.UPDATE_DRIVER_ALERTS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateDriverAlertsSuccess = createAction(
  ActionTypes.UPDATE_DRIVER_ALERTS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateDriverAlertsFailed = createAction(
  ActionTypes.UPDATE_DRIVER_ALERTS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete driver alerts

export const deleteDriverAlertsReq = createAction(
  ActionTypes.DELETE_DRIVER_ALERTS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteDriverAlertsSuccess = createAction(
  ActionTypes.DELETE_DRIVER_ALERTS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteDriverAlertsFailed = createAction(
  ActionTypes.DELETE_DRIVER_ALERTS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get Driver list alerts

export const getDriverListAlertsReq = createAction(
  ActionTypes.GET_DRIVER_LIST_ALERTS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDriverListAlertsSuccess = createAction(
  ActionTypes.GET_DRIVER_LIST_ALERTS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDriverListAlertsFailed = createAction(
  ActionTypes.GET_DRIVER_LIST_ALERTS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
