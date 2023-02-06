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
} from "../actions";

export function* getCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/carrier/${payload.id}`);
    yield put(getCarrierSuccess(data));
  } catch (e: any) {
    yield put(getCarrierFailed(e.message));
  }
}

export function* createCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/carrier", {
      payload,
    });
    yield put(createCarrierSuccess(data));
  } catch (e: any) {
    yield put(createCarrierFailed(e.message));
  }
}

export function* updateCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.put, `/carrier/${payload.id}`, payload);
    yield put(updateCarrierSuccess(data));
  } catch (e: any) {
    yield put(updateCarrierFailed(e.message));
  }
}

export function* deleteCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.delete, `/carrier/${payload.id}`);
    yield put(deleteCarrierSuccess(data));
  } catch (e: any) {
    yield put(deleteCarrierFailed(e.message));
  }
}

export function* getCarriersListSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/carrier/${payload.id}`);
    yield put(getCarriersListSuccess(data));
  } catch (e: any) {
    yield put(getCarriersListFailed(e.message));
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
  ]);
}
