import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/request";
import { RoleActionTypes } from "../actions/role";
import {
  getRoleSuccess,
  getRoleFailed,
  getDefaultRoleSuccess,
  getDefaultRoleFailed,
  createRoleSuccess,
  createRoleFailed,
  updateRoleSuccess,
  updateRoleFailed,
  deleteRoleSuccess,
  deleteRoleFailed,
  getRoleListSuccess,
  getRoleListFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getRoleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/access/${payload.id}`);
    yield put(getRoleSuccess(data));
  } catch (e: any) {
    yield put(getRoleFailed(e.message));
  }
}

export function* getDefaultRoleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/access/default`);
    yield put(getDefaultRoleSuccess(data));
  } catch (e: any) {
    yield put(getDefaultRoleFailed(e.message));
  }
}

export function* createRoleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/access/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createRoleSuccess(data));
    yield call(notification.success, {
      message: "Role created successfully",
    });
  } catch (e: any) {
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
    yield put(createRoleFailed(e.message));
  }
}

export function* updateRoleSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/access/${payload.roleId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateRoleSuccess(data));
  } catch (e: any) {
    yield put(updateRoleFailed(e.message));
  }
}

export function* deleteRoleSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/access/${payload.id}`);
    yield put(deleteRoleSuccess(data));
  } catch (e: any) {
    yield put(deleteRoleFailed(e.message));
  }
}

export function* getRoleListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/access/`);
    yield put(getRoleListSuccess(data));
  } catch (e: any) {
    yield put(getRoleListFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(RoleActionTypes.GET_ROLE_REQUEST, getRoleSaga),
    takeLatest(RoleActionTypes.CREATE_ROLE_REQUEST, createRoleSaga),
    takeLatest(RoleActionTypes.UPDATE_ROLE_REQUEST, updateRoleSaga),
    takeLatest(RoleActionTypes.DELETE_ROLE_REQUEST, deleteRoleSaga),
    takeLatest(RoleActionTypes.GET_ROLE_LIST_REQUEST, getRoleListSaga),
  ]);
}
