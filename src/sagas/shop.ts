import { all, put, takeLatest, call } from "redux-saga/effects";
import { notification } from "antd";
import request from "../utils/request";
import { ShopActionTypes } from "../actions/shop";
import { getShopItemsSuccess, getShopItemsFailed } from "../actions";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  // rtl: true,
});

export function* getShopItemsSaga({ payload }: any): any {
  try {
    const { data } = yield call(request.get, `/access/${payload.roleId}`);
    if (data?.data) {
      yield put(getShopItemsSuccess(data.data));
    }
  } catch (e: any) {
    yield put(getShopItemsFailed(e.message));
  }
}

// export function* getDefaultRoleSaga({ payload }: any): any {
//   try {
//     const { data } = yield call(request.get, `/access/default`);
//     yield put(getDefaultRoleSuccess(data));
//   } catch (e: any) {
//     yield put(getDefaultRoleFailed(e.message));
//   }
// }

// export function* createRoleSaga({ payload }: any): any {
//   try {
//     const { data } = yield call(request.post, "/access/", payload.values, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     yield put(createRoleSuccess(data));
//     yield call(notification.success, {
//       message: "Role created successfully",
//     });
//   } catch (e: any) {
//     yield call(notification.error, {
//       message: "Something went wrong, try again later",
//     });
//     yield put(createRoleFailed(e.message));
//   }
// }

// export function* updateRoleSaga({ payload }: any): any {
//   try {
//     const { data } = yield call(
//       request.put,
//       `/access/${payload.roleId}`,
//       payload.values,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     yield put(updateRoleSuccess(data));
//     yield call(notification.success, {
//       message: "Role updated successfully",
//     });
//     if (payload?.onSuccess) {
//       payload?.onSuccess();
//     }
//   } catch (e: any) {
//     yield call(notification.error, {
//       message: "Something went wrong, try again later",
//     });
//     yield put(updateRoleFailed(e.message));
//   }
// }

// export function* deleteRoleSaga({ payload }: any): any {
//   try {
//     const { data } = yield call(request.delete, `/access/${payload.id}`);
//     yield put(deleteRoleSuccess(data));
//     yield call(notification.success, {
//       message: "Role deleted successfully",
//     });
//   } catch (e: any) {
//     yield call(notification.error, {
//       message: "Something went wrong, try again later",
//     });
//     yield put(deleteRoleFailed(e.message));
//   }
// }

// export function* getRoleListSaga({ payload }: any): any {
//   try {
//     const { data } = yield call(request.get, `/access/`);
//     yield put(getRoleListSuccess(data));
//     if (payload?.onSuccess) {
//       payload?.onSuccess();
//     }
//   } catch (e: any) {
//     yield call(notification.error, {
//       message: "Something went wrong, try again later",
//     });
//     yield put(getRoleListFailed(e.message));
//   }
// }

export default function* root() {
  yield all([
    takeLatest(ShopActionTypes.GET_SHOP_ITEMS_REQUEST, getShopItemsSaga),
  ]);
}
