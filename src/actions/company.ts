import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const CompanyActionTypes = keyMirror({
  GET_COMPANY_REQUEST: undefined,
  GET_COMPANY_SUCCESS: undefined,
  GET_COMPANY_FAILURE: undefined,
  UPDATE_COMPANY_REQUEST: undefined,
  UPDATE_COMPANY_SUCCESS: undefined,
  UPDATE_COMPANY_FAILURE: undefined,
  GET_COMPANY_ROOT_REQUEST: undefined,
  GET_COMPANY_ROOT_SUCCESS: undefined,
  GET_COMPANY_ROOT_FAILURE: undefined,
  CREATE_COMPANY_ROOT_REQUEST: undefined,
  CREATE_COMPANY_ROOT_SUCCESS: undefined,
  CREATE_COMPANY_ROOT_FAILURE: undefined,
  UPDATE_COMPANY_ROOT_REQUEST: undefined,
  UPDATE_COMPANY_ROOT_SUCCESS: undefined,
  UPDATE_COMPANY_ROOT_FAILURE: undefined,
  DELETE_COMPANY_ROOT_REQUEST: undefined,
  DELETE_COMPANY_ROOT_SUCCESS: undefined,
  DELETE_COMPANY_ROOT_FAILURE: undefined,
  GET_COMPANIES_LIST_ROOT_REQUEST: undefined,
  GET_COMPANIES_LIST_ROOT_SUCCESS: undefined,
  GET_COMPANIES_LIST_ROOT_FAILURE: undefined,
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

// get company root

export const getCompanyRootReq = createAction(
  CompanyActionTypes.GET_COMPANY_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCompanyRootSuccess = createAction(
  CompanyActionTypes.GET_COMPANY_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCompanyRootFailed = createAction(
  CompanyActionTypes.GET_COMPANY_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create company root

export const createCompanyRootReq = createAction(
  CompanyActionTypes.CREATE_COMPANY_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createCompanyRootSuccess = createAction(
  CompanyActionTypes.CREATE_COMPANY_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createCompanyRootFailed = createAction(
  CompanyActionTypes.CREATE_COMPANY_ROOT_FAILURE,
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
// update company root

export const updateCompanyRootReq = createAction(
  CompanyActionTypes.UPDATE_COMPANY_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateCompanyRootSuccess = createAction(
  CompanyActionTypes.UPDATE_COMPANY_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateCompanyRootFailed = createAction(
  CompanyActionTypes.UPDATE_COMPANY_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete company

export const deleteCompanyRootReq = createAction(
  CompanyActionTypes.DELETE_COMPANY_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteCompanyRootSuccess = createAction(
  CompanyActionTypes.DELETE_COMPANY_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteCompanyRootFailed = createAction(
  CompanyActionTypes.DELETE_COMPANY_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get companies list

export const getCompaniesListRootReq = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCompaniesListRootSuccess = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCompaniesListRootFailed = createAction(
  CompanyActionTypes.GET_COMPANIES_LIST_ROOT_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
