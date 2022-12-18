import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const CompanyActionTypes = keyMirror({
  GET_COMPANY_REQUEST: undefined,
  GET_COMPANY_SUCCESS: undefined,
  GET_COMPANY_FAILURE: undefined,
  CREATE_COMPANY_REQUEST: undefined,
  CREATE_COMPANY_SUCCESS: undefined,
  CREATE_COMPANY_FAILURE: undefined,
  UPDATE_COMPANY_REQUEST: undefined,
  UPDATE_COMPANY_SUCCESS: undefined,
  UPDATE_COMPANY_FAILURE: undefined,
  DELETE_COMPANY_REQUEST: undefined,
  DELETE_COMPANY_SUCCESS: undefined,
  DELETE_COMPANY_FAILURE: undefined,
  GET_COMPANIES_LIST_REQUEST: undefined,
  GET_COMPANIES_LIST_SUCCESS: undefined,
  GET_COMPANIES_LIST_FAILURE: undefined,
});

// get company

export const getCompanyReq = createAction(
  CompanyActionTypes.GET_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCompanySuccess = createAction(
  CompanyActionTypes.GET_COMPANY_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCompanyFailed = createAction(
  CompanyActionTypes.GET_COMPANY_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create company

export const createCompanyReq = createAction(
  CompanyActionTypes.CREATE_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createCompanySuccess = createAction(
  CompanyActionTypes.CREATE_COMPANY_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createCompanyFailed = createAction(
  CompanyActionTypes.CREATE_COMPANY_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update company

export const updateCompanyReq = createAction(
  CompanyActionTypes.UPDATE_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateCompanySuccess = createAction(
  CompanyActionTypes.UPDATE_COMPANY_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateCompanyFailed = createAction(
  CompanyActionTypes.UPDATE_COMPANY_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete company

export const deleteCompanyReq = createAction(
  CompanyActionTypes.DELETE_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteCompanySuccess = createAction(
  CompanyActionTypes.DELETE_COMPANY_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteCompanyFailed = createAction(
  CompanyActionTypes.DELETE_COMPANY_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get companies list

export const getCompaniesListReq = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCompaniesListSuccess = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCompaniesListFailed = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
