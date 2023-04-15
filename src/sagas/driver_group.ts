import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/requestCarrier";
import { notification } from "antd";
import { DriverGroupActionTypes } from "../actions/driver_group";
import {
  getDriverGroupSuccess,
  getDriverGroupFailed,
  createDriverGroupSuccess,
  createDriverGroupFailed,
  updateDriverGroupSuccess,
  updateDriverGroupFailed,
  deleteDriverGroupSuccess,
  deleteDriverGroupFailed,
  getDriverGroupListSuccess,
  getDriverGroupListFailed,
  getDriverGroupListRootSuccess,
  getDriverGroupListRootFailed,
  setCurrentDriverGroupCarrier,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getDriverGroupSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.get,
      `/driver_group/${payload.driverGroupId}`,
      {
        params: payload.queryParams,
      }
    );
    yield put(getDriverGroupSuccess(data));
  } catch (e: any) {
    yield put(getDriverGroupFailed(e.message));
  }
}

export function* createDriverGroupSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      "/driver_group/",
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(createDriverGroupSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Driver group created successfully",
    });
  } catch (e: any) {
    yield put(createDriverGroupFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateDriverGroupSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/driver_group/${payload.driverGroupId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateDriverGroupSuccess(data));
    yield call(getDriverGroupSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        driverId: payload.driverGroupId,
      },
    });
    yield call(notification.success, {
      message: "Driver group updated successfully",
    });
  } catch (e: any) {
    yield put(updateDriverGroupFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteDriverGroupSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver_group/${payload.id}`);
    yield put(deleteDriverGroupSuccess(data));
    yield call(notification.success, {
      message: "Driver group deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDriverGroupFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDriverGroupListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver_group`, {
      params: payload.queryParams,
    });
    yield put(getDriverGroupListSuccess(data));
  } catch (e: any) {
    yield put(getDriverGroupListFailed(e.message));
  }
}

export function* getDriverGroupListRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver_group/root`, {
      params: payload.queryParams,
    });
    yield put(getDriverGroupListRootSuccess(data));
  } catch (e: any) {
    yield put(getDriverGroupListRootFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(
      DriverGroupActionTypes.GET_DRIVER_GROUP_REQUEST,
      getDriverGroupSaga
    ),
    takeLatest(
      DriverGroupActionTypes.CREATE_DRIVER_GROUP_REQUEST,
      createDriverGroupSaga
    ),
    takeLatest(
      DriverGroupActionTypes.UPDATE_DRIVER_GROUP_REQUEST,
      updateDriverGroupSaga
    ),
    takeLatest(
      DriverGroupActionTypes.DELETE_DRIVER_GROUP_REQUEST,
      deleteDriverGroupSaga
    ),
    takeLatest(
      DriverGroupActionTypes.GET_DRIVER_GROUP_LIST_REQUEST,
      getDriverGroupListSaga
    ),
    takeLatest(
      DriverGroupActionTypes.GET_DRIVER_GROUP_LIST_ROOT_REQUEST,
      getDriverGroupListRootSaga
    ),
  ]);
}
