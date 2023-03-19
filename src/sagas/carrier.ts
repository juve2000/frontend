import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/requestCarrier";
import { CarrierActionTypes } from "../actions/carrier";
import {
  getCarrierSuccess,
  getCarrierFailed,
  createCarrierSuccess,
  createCarrierFailed,
  updateCarrierSuccess,
  updateCarrierFailed,
  deleteCarrierSuccess,
  deleteCarrierFailed,
  getCarriersListSuccess,
  getCarriersListFailed,
  getDeleteCarrierTerminalFailed,
} from "../actions";

export function* getCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/carrier/${payload.carrierId}`);
    yield put(getCarrierSuccess(data));
  } catch (e: any) {
    yield put(getCarrierFailed(e.message));
  }
}

export function* createCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/carrier/", payload.values);
    yield put(createCarrierSuccess(data));
    payload.onSuccess();
  } catch (e: any) {
    yield put(createCarrierFailed(e.message));
  }
}

export function* updateCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.post,
      `/carrier/${payload.carrierId}`,
      payload.values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(updateCarrierSuccess(data));
  } catch (e: any) {
    yield put(updateCarrierFailed(e.message));
  }
}

export function* deleteCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/carrier`);
    yield put(deleteCarrierSuccess(data));
  } catch (e: any) {
    yield put(deleteCarrierFailed(e.message));
  }
}

export function* getCarriersListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/carrier`, {
      params: payload.queryParams,
    });
    yield put(getCarriersListSuccess(data));
  } catch (e: any) {
    yield put(getCarriersListFailed(e.message));
  }
}

export function* deleteCarrierTerminalSaga({ payload }: any): any {
  console.log("payload", payload);
  try {
    const { data } = yield call(
      request.delete,
      `/carrier/terminal/${payload.terminalId}`
    );
    if (data) {
      yield call(getCarrierSaga, payload.carrierId);
    }
    // yield put(deleteCarrierSuccess(data));
  } catch (e: any) {
    yield put(getDeleteCarrierTerminalFailed({}));
  }
}

export default function* root() {
  yield all([
    takeLatest(CarrierActionTypes.GET_CARRIER_REQUEST, getCarrierSaga),
    takeLatest(CarrierActionTypes.CREATE_CARRIER_REQUEST, createCarrierSaga),
    takeLatest(CarrierActionTypes.UPDATE_CARRIER_REQUEST, updateCarrierSaga),
    takeLatest(CarrierActionTypes.DELETE_CARRIER_REQUEST, deleteCarrierSaga),
    takeLatest(
      CarrierActionTypes.GET_CARRIERS_LIST_REQUEST,
      getCarriersListSaga
    ),
    takeLatest(
      CarrierActionTypes.GET_CARRIER_SET_PASSWORD_REQUEST,
      updateCarrierSaga
    ),
    takeLatest(
      CarrierActionTypes.GET_CARRIER_DELETE_TERMINAL_REQUEST,
      deleteCarrierSaga
    ),
  ]);
}
