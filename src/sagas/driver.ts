import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/requestCarrier";
import { DriverActionTypes } from "../actions/driver";
import {
  getDriverSuccess,
  getDriverFailed,
  createDriverSuccess,
  createDriverFailed,
  updateDriverSuccess,
  updateDriverFailed,
  deleteDriverSuccess,
  deleteDriverFailed,
  getDriverListSuccess,
  getDriverListFailed,
  deleteDriverDocumentFailed,
  deleteDriverDocumentSuccess,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.driverId}`, {
      params: payload.queryParams,
    });
    yield put(getDriverSuccess(data));
  } catch (e: any) {
    yield put(getDriverFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/driver/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDriverSuccess({}));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Driver created successfully",
    });
  } catch (e: any) {
    yield put(createDriverFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* updateDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      `/driver/${payload.driverId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateDriverSuccess(data));
    yield call(getDriverSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        driverId: payload.driverId,
      },
    });
    yield call(notification.success, {
      message: "Driver group updated successfully",
    });
  } catch (e: any) {
    yield put(updateDriverFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteDriverSuccess(data));
    yield call(notification.success, {
      message: "Driver deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDriverFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* getDriverListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver`, {
      params: payload.queryParams,
    });
    yield put(getDriverListSuccess(data));
  } catch (e: any) {
    yield put(getDriverListFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* deleteDriverDocumentSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.delete,
      `/driver_docs/${payload.documentId}`
    );
    const { data: dataDocs } = yield call(
      request.get,
      `/driver/${payload.driverId}`,
      {
        params: {
          with: ["documents"],
        },
      }
    );
    yield put(deleteDriverDocumentSuccess(dataDocs.data.documents));
    yield call(notification.success, {
      message: "Document deleted successfully",
    });
  } catch (e: any) {
    yield put(deleteDriverFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(DriverActionTypes.GET_DRIVER_REQUEST, getDriverSaga),
    takeLatest(DriverActionTypes.CREATE_DRIVER_REQUEST, createDriverSaga),
    takeLatest(DriverActionTypes.UPDATE_DRIVER_REQUEST, updateDriverSaga),
    takeLatest(DriverActionTypes.DELETE_DRIVER_REQUEST, deleteDriverSaga),
    takeLatest(DriverActionTypes.GET_DRIVER_LIST_REQUEST, getDriverListSaga),
    takeLatest(
      DriverActionTypes.DELETE_DRIVER_DOCUMENT_REQ,
      deleteDriverDocumentSaga
    ),
  ]);
}
