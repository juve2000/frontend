import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const UserActionTypes = keyMirror({
  GET_USERS_LIST_REQUEST: undefined, // get users list
  GET_USERS_LIST_RESPONSE_SUCCESS: undefined,
  GET_USERS_LIST_RESPONSE_FAILED: undefined,
  GET_USERS_LIST_ROOT_REQUEST: undefined, // get users list root
  GET_USERS_LIST_ROOT_SUCCESS: undefined,
  GET_USERS_LIST_ROOT_FAILED: undefined,
  GET_USERS_LIST_INNER_COMPANY_REQUEST: undefined, // get users list inner company
  GET_USERS_LIST_INNER_COMPANY_RESPONSE_SUCCESS: undefined,
  GET_USERS_LIST_INNER_COMPANY_RESPONSE_FAILED: undefined,
  GET_USERS_LIST_BY_COMPANY_REQUEST: undefined, // get users list by company
  GET_USERS_LIST_BY_COMPANY_RESPONSE_SUCCESS: undefined,
  GET_USERS_LIST_BY_COMPANY_RESPONSE_FAILED: undefined,
  DELETE_USER_REQUEST: undefined, // delete user
  DELETE_USER_SUCCESS: undefined,
  DELETE_USER_FAILED: undefined,
  UPDATE_USER_REQUEST: undefined, // update user
  UPDATE_USER_SUCCESS: undefined,
  UPDATE_USER_FAILED: undefined,
  CREATE_USER_REQUEST: undefined, // delete user
  CREATE_USER_SUCCESS: undefined,
  CREATE_USER_FAILED: undefined,
  GET_USER_REQUEST: undefined,
  GET_USER_SUCCESS: undefined,
  GET_USER_FAILED: undefined,
});

// Get users list inner company

export const getUsersListInnerCompanyReq = createAction(
  UserActionTypes.GET_USERS_LIST_INNER_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUsersListInnerCompanyResSuccess = createAction(
  UserActionTypes.GET_USERS_LIST_INNER_COMPANY_RESPONSE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUsersListInnerCompanyResFailed = createAction(
  UserActionTypes.GET_USERS_LIST_INNER_COMPANY_RESPONSE_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// Get users list

export const getUsersListReq = createAction(
  UserActionTypes.GET_USERS_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUsersListResSuccess = createAction(
  UserActionTypes.GET_USERS_LIST_RESPONSE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUsersListResFailed = createAction(
  UserActionTypes.GET_USERS_LIST_RESPONSE_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);
// Get users list root

export const getUsersListRootReq = createAction(
  UserActionTypes.GET_USERS_LIST_ROOT_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUsersListResRootSuccess = createAction(
  UserActionTypes.GET_USERS_LIST_ROOT_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUsersListResRootFailed = createAction(
  UserActionTypes.GET_USERS_LIST_ROOT_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// Get users list by company

export const getUsersListByCompanyReq = createAction(
  UserActionTypes.GET_USERS_LIST_BY_COMPANY_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUsersListByCompanyResSuccess = createAction(
  UserActionTypes.GET_USERS_LIST_BY_COMPANY_RESPONSE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUsersListByCompanyResFailed = createAction(
  UserActionTypes.GET_USERS_LIST_BY_COMPANY_RESPONSE_FAILED
);

// delete user

export const deleteUserReq = createAction(
  UserActionTypes.DELETE_USER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteUserResSuccess = createAction(
  UserActionTypes.DELETE_USER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteUserResFailed = createAction(
  UserActionTypes.DELETE_USER_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update user

export const updateUserReq = createAction(
  UserActionTypes.UPDATE_USER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateUserResSuccess = createAction(
  UserActionTypes.UPDATE_USER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateUserResFailed = createAction(
  UserActionTypes.UPDATE_USER_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create user
export const getCreateUserReq = createAction(
  UserActionTypes.CREATE_USER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getCreateUserResSuccess = createAction(
  UserActionTypes.CREATE_USER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getCreateUserResFailed = createAction(
  UserActionTypes.CREATE_USER_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get user

export const getUserReq = createAction(
  UserActionTypes.GET_USER_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getUserResSuccess = createAction(
  UserActionTypes.GET_USER_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getUserResFailed = createAction(
  UserActionTypes.GET_USER_FAILED,
  (payload: any) => {
    return actionPayload(payload);
  }
);
