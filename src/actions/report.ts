import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

const ActionTypes = keyMirror({
  GET_REPORT_REQUEST: undefined,
  GET_REPORT_SUCCESS: undefined,
  GET_REPORT_FAILURE: undefined,
  CREATE_REPORT_REQUEST: undefined,
  CREATE_REPORT_SUCCESS: undefined,
  CREATE_REPORT_FAILURE: undefined,
  UPDATE_REPORT_REQUEST: undefined,
  UPDATE_REPORT_SUCCESS: undefined,
  UPDATE_REPORT_FAILURE: undefined,
  DELETE_REPORT_REQUEST: undefined,
  DELETE_REPORT_SUCCESS: undefined,
  DELETE_REPORT_FAILURE: undefined,
  GET_REPORT_LIST_REQUEST: undefined,
  GET_REPORT_LIST_SUCCESS: undefined,
  GET_REPORT_LIST_FAILURE: undefined,
});

export const ReportActionTypes = ActionTypes;

// get eld

export const getReportReq = createAction(
  ActionTypes.GET_REPORT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getReportSuccess = createAction(
  ActionTypes.GET_REPORT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getReportFailed = createAction(
  ActionTypes.GET_REPORT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create report

export const createReportReq = createAction(
  ActionTypes.CREATE_REPORT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createReportSuccess = createAction(
  ActionTypes.CREATE_REPORT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createReportFailed = createAction(
  ActionTypes.CREATE_REPORT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update report

export const updateReportReq = createAction(
  ActionTypes.UPDATE_REPORT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateReportSuccess = createAction(
  ActionTypes.UPDATE_REPORT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateReportFailed = createAction(
  ActionTypes.UPDATE_REPORT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete report

export const deleteReportReq = createAction(
  ActionTypes.DELETE_REPORT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteReportSuccess = createAction(
  ActionTypes.DELETE_REPORT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteReportFailed = createAction(
  ActionTypes.DELETE_REPORT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get report list

export const getReportListReq = createAction(
  ActionTypes.GET_REPORT_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getReportListSuccess = createAction(
  ActionTypes.GET_REPORT_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getReportListFailed = createAction(
  ActionTypes.GET_REPORT_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
