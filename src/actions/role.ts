import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const RoleActionTypes = keyMirror({
  GET_ROLE_REQUEST: undefined,
  GET_ROLE_SUCCESS: undefined,
  GET_ROLE_FAILURE: undefined,
  GET_DEFAULT_ROLE_REQUEST: undefined,
  GET_DEFAULT_ROLE_SUCCESS: undefined,
  GET_DEFAULT_ROLE_FAILURE: undefined,
  CREATE_ROLE_REQUEST: undefined,
  CREATE_ROLE_SUCCESS: undefined,
  CREATE_ROLE_FAILURE: undefined,
  UPDATE_ROLE_REQUEST: undefined,
  UPDATE_ROLE_SUCCESS: undefined,
  UPDATE_ROLE_FAILURE: undefined,
  DELETE_ROLE_REQUEST: undefined,
  DELETE_ROLE_SUCCESS: undefined,
  DELETE_ROLE_FAILURE: undefined,
  GET_ROLE_LIST_REQUEST: undefined,
  GET_ROLE_LIST_SUCCESS: undefined,
  GET_ROLE_LIST_FAILURE: undefined,
  SET_ROLE: undefined,
});

// get role

export const getRoleReq = createAction(
  RoleActionTypes.GET_ROLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getRoleSuccess = createAction(
  RoleActionTypes.GET_ROLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getRoleFailed = createAction(
  RoleActionTypes.GET_ROLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get default role

export const getDefaultRoleReq = createAction(
  RoleActionTypes.GET_DEFAULT_ROLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getDefaultRoleSuccess = createAction(
  RoleActionTypes.GET_DEFAULT_ROLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getDefaultRoleFailed = createAction(
  RoleActionTypes.GET_DEFAULT_ROLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// create role

export const createRoleReq = createAction(
  RoleActionTypes.CREATE_ROLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const createRoleSuccess = createAction(
  RoleActionTypes.CREATE_ROLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const createRoleFailed = createAction(
  RoleActionTypes.CREATE_ROLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// update role

export const updateRoleReq = createAction(
  RoleActionTypes.UPDATE_ROLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const updateRoleSuccess = createAction(
  RoleActionTypes.UPDATE_ROLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateRoleFailed = createAction(
  RoleActionTypes.UPDATE_ROLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// delete role

export const deleteRoleReq = createAction(
  RoleActionTypes.DELETE_ROLE_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const deleteRoleSuccess = createAction(
  RoleActionTypes.DELETE_ROLE_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteRoleFailed = createAction(
  RoleActionTypes.DELETE_ROLE_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// get role list

export const getRoleListReq = createAction(
  RoleActionTypes.GET_ROLE_LIST_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getRoleListSuccess = createAction(
  RoleActionTypes.GET_ROLE_LIST_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getRoleListFailed = createAction(
  RoleActionTypes.GET_ROLE_LIST_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

// set role
export const setRole = createAction(
  RoleActionTypes.SET_ROLE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
