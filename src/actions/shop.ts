import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const ShopActionTypes = keyMirror({
  GET_SHOP_ITEMS_REQUEST: undefined,
  GET_SHOP_ITEMS_SUCCESS: undefined,
  GET_SHOP_ITEMS_FAILURE: undefined,
  SET_CURRENT_SHOP_ITEM: undefined,
  ADD_ITEM_TO_CART: undefined,
  DELETE_ITEM_FROM_CART: undefined,
  UPDATE_CART: undefined,
});

// get shop items

export const getShopItemsReq = createAction(
  ShopActionTypes.GET_SHOP_ITEMS_REQUEST,
  (payload: any) => {
    return actionPayload(payload);
  }
);
export const getShopItemsSuccess = createAction(
  ShopActionTypes.GET_SHOP_ITEMS_SUCCESS,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const getShopItemsFailed = createAction(
  ShopActionTypes.GET_SHOP_ITEMS_FAILURE,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const addItemToCart = createAction(
  ShopActionTypes.ADD_ITEM_TO_CART,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const deleteItemFromCart = createAction(
  ShopActionTypes.DELETE_ITEM_FROM_CART,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const updateCart = createAction(
  ShopActionTypes.UPDATE_CART,
  (payload: any) => {
    return actionPayload(payload);
  }
);

export const setCurrentShopItem = createAction(
  ShopActionTypes.SET_CURRENT_SHOP_ITEM,
  (payload: any) => {
    return actionPayload(payload);
  }
);
