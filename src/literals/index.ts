import { keyMirror } from '@gilbarbara/helpers';

import { Status } from '../types';

export const ActionTypes = keyMirror({
  GITHUB_GET_REPOS_REQUEST: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  SET_APP_OPTIONS: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  USER_CREATE_REQUEST: undefined,
  USER_CREATE_SUCCESS: undefined,
  USER_CREATE_FAILURE: undefined,
  USER_RESET_PASSWORD_REQUEST: undefined,
  USER_RESET_PASSWORD_SUCCESS: undefined,
  USER_RESET_PASSWORD_FAILURE: undefined,
  USER_FORGOT_PASSWORD_REQUEST: undefined,
  USER_FORGOT_PASSWORD_SUCCESS: undefined,
  USER_FORGOT_PASSWORD_FAILURE: undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
