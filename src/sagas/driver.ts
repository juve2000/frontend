import { all, put, takeLatest, call } from "redux-saga/effects";
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

export function* getDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/driver/${payload.driverId}`, {
      params: payload.queryParams,
    });
    yield put(getDriverSuccess(data));
  } catch (e: any) {
    yield put(getDriverFailed(e.message));
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
  } catch (e: any) {
    yield put(createDriverFailed(e.message));
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
  } catch (e: any) {
    yield put(updateDriverFailed(e.message));
  }
}

export function* deleteDriverSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/driver/${payload.id}`);
    yield put(deleteDriverSuccess(data));
  } catch (e: any) {
    yield put(deleteDriverFailed(e.message));
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
  } catch (e: any) {
    yield put(deleteDriverFailed(e.message));
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
