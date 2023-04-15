import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/requestCarrier";
import { MechanicActionTypes } from "../actions/mechanic";
import {
  getMechanicSuccess,
  getMechanicFailed,
  createMechanicSuccess,
  createMechanicFailed,
  updateMechanicSuccess,
  updateMechanicFailed,
  deleteMechanicSuccess,
  deleteMechanicFailed,
  getMechanicListSuccess,
  getMechanicListFailed,
  getMechanicListRootSuccess,
  getMechanicListRootFailed,
  setCurrentMechanicCarrier,
} from "../actions";

export function* getMechanicSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.get,
      `/mechanic/${payload.mechanicId}`,
      {
        params: payload.queryParams,
      }
    );
    yield put(getMechanicSuccess(data));
  } catch (e: any) {
    yield put(getMechanicFailed(e.message));
  }
}

export function* createMechanicSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/mechanic/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createMechanicSuccess({}));
    payload.onSuccess();
  } catch (e: any) {
    yield put(createMechanicFailed(e.message));
  }
}

export function* updateMechanicSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/mechanic/${payload.mechanicId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateMechanicSuccess(data));
    yield call(getMechanicSaga, {
      payload: {
        queryParams: {
          with: ["documents", "terminal", "group", "carrier"],
        },
        driverId: payload.mechanicId,
      },
    });
  } catch (e: any) {
    yield put(updateMechanicFailed(e.message));
  }
}

export function* deleteMechanicSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/mechanic/${payload.id}`);
    yield put(deleteMechanicSuccess(data));
  } catch (e: any) {
    yield put(deleteMechanicFailed(e.message));
  }
}

export function* getMechanicListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/mechanic`, {
      params: payload.queryParams,
    });
    yield put(getMechanicListSuccess(data));
  } catch (e: any) {
    yield put(getMechanicListFailed(e.message));
  }
}

export function* getMechanicListRootSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/mechanic/root`, {
      params: payload.queryParams,
    });
    yield put(getMechanicListRootSuccess(data));
  } catch (e: any) {
    yield put(getMechanicListRootFailed(e.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(MechanicActionTypes.GET_MECHANIC_REQUEST, getMechanicSaga),
    takeLatest(MechanicActionTypes.CREATE_MECHANIC_REQUEST, createMechanicSaga),
    takeLatest(MechanicActionTypes.UPDATE_MECHANIC_REQUEST, updateMechanicSaga),
    takeLatest(MechanicActionTypes.DELETE_MECHANIC_REQUEST, deleteMechanicSaga),
    takeLatest(
      MechanicActionTypes.GET_MECHANIC_LIST_REQUEST,
      getMechanicListSaga
    ),
    takeLatest(
      MechanicActionTypes.GET_MECHANIC_LIST_ROOT_REQUEST,
      getMechanicListRootSaga
    ),
  ]);
}
