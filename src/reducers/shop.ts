import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getShopItemsReq,
  getShopItemsSuccess,
  getShopItemsFailed,
  addItemToCart,
  deleteItemFromCart,
  updateCart,
  setCurrentShopItem,
} from "../actions";

// import { UserState } from "../types";

const items = [
  {
    image: "url",
    title: "Item1",
    description:
      "Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas",
    price: "23.55",
    id: 1,
  },
  {
    image: "url2",
    title: "Item2",
    description:
      "Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas, Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas, Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas,Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas ",
    price: "33.47",
    id: 2,
  },
  {
    image: "url3",
    title: "Item3",
    description:
      "Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas",
    price: "43.00",
    id: 3,
  },
  {
    image: "url4",
    title: "Item4",
    description:
      "Bla dajdlaj;kal jdlkasjdlaksjd alksdjalkdjalksdjaldjalsd;ja;sdja;dja;ld adfas;djas",
    price: "4.00",
    id: 4,
  },
];

export const shopState = {
  count: 10,
  shopItems: [...items],
  currentShopItem: {},
  cart: [],
};

export default {
  shop: createReducer<any>(shopState, (builder) => {
    // GET ROLE
    builder
      .addCase(getShopItemsReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getShopItemsSuccess, (state, { payload }) => {
        return {
          ...state,
          role: payload,
          loading: false,
        };
      })
      .addCase(getShopItemsFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      })
      .addCase(updateCart, (state, { payload }) => {
        return {
          ...state,
          cart: payload,
        };
      })
      .addCase(addItemToCart, (state, { payload }) => {
        console.log("ACTION ADD");
        return {
          ...state,
          cart: payload,
        };
      })
      .addCase(deleteItemFromCart, (state, { payload }) => {
        return {
          ...state,
          cart: payload,
        };
      })
      .addCase(setCurrentShopItem, (state, data) => {
        return {
          ...state,
          currentShopItem: data.payload,
        };
      });
  }),
};
