import { all, put, takeLatest, call } from "redux-saga/effects";
import request from "../utils/requestCarrier";
import { notification } from "antd";
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
  getCarrierPasswordSuccess,
  getCarrierPasswordFailed,
} from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getCarrierSaga({ payload }: any): any {
  console.log("psylosf", payload);
  try {
    const { data } = yield call(request.get, `/carrier/${payload.carrierId}`, {
      params: payload.queryParams,
    });
    yield put(getCarrierSuccess(data));
  } catch (e: any) {
    yield put(getCarrierFailed(e.message));
  }
}

export function* createCarrierSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.post, "/carrier/", payload.values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createCarrierSuccess(data));
    payload.onSuccess();
    yield call(notification.success, {
      message: "Carrier created successfully",
    });
  } catch (e: any) {
    yield put(createCarrierFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
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
    yield call(notification.success, {
      message: "Carrier updated successfully",
    });
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
  try {
    const { data } = yield call(
      request.delete,
      `/carrier/terminal/${payload.carrierId}/${payload.terminalId}`
    );
    if (data) {
      yield call(getCarrierSaga, {
        payload: {
          carrierId: payload.carrierId,
        },
      });
    }
    yield call(notification.success, {
      message: "Terminal deleted successfully",
    });
  } catch (e: any) {
    yield put(getDeleteCarrierTerminalFailed({}));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
  }
}

export function* createCarrierPasswordSaga({ payload }: any): any {
  try {
    const { data } = yield call(
      request.put,
      `/carrier/authenticable/${payload.data.id}`,
      { password: payload.data.password }
    );
    yield put(getCarrierPasswordSuccess(data));
    if (data) {
      yield call(notification.success, {
        message: "Carrier password created successfully",
      });
      payload.onSuccess();
    }
  } catch (e: any) {
    yield put(getCarrierPasswordFailed(e.message));
    yield call(notification.error, {
      message: "Something went wrong, try again later",
    });
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
      createCarrierPasswordSaga
    ),
    takeLatest(
      CarrierActionTypes.GET_CARRIER_DELETE_TERMINAL_REQUEST,
      deleteCarrierTerminalSaga
    ),
  ]);
}
