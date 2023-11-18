import { createReducer } from "@reduxjs/toolkit";

import { STATUS } from "../literals";

import {
  getUnitReq,
  getUnitSuccess,
  getUnitFailed,
  createUnitReq,
  createUnitSuccess,
  createUnitFailed,
  updateUnitReq,
  updateUnitSuccess,
  updateUnitFailed,
  deleteUnitReq,
  deleteUnitSuccess,
  deleteUnitFailed,
  getUnitListReq,
  getUnitListSuccess,
  getUnitListFailed,
} from "../actions";
import { getColorByCode } from "../utils/utils";

// import { UserState } from "../types";

export const unitState = {
  status: STATUS.IDLE,
  unit: {},
  units: [],
  loading: false,
  errorMessage: "",
};

export default {
  units: createReducer<any>(unitState, (builder) => {
    // GET UNIT
    builder
      .addCase(getUnitReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getUnitSuccess, (state, { payload }) => {
        return {
          ...state,
          unit: payload,
          loading: false,
        };
      })
      .addCase(getUnitFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // CREATE UNIT
    builder
      .addCase(createUnitReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(createUnitSuccess, (state, { payload }) => {
        return {
          ...state,
          unit: payload,
          loading: false,
        };
      })
      .addCase(createUnitFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // UPDATE UNIT
    builder
      .addCase(updateUnitReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(updateUnitSuccess, (state, { payload }) => {
        return {
          ...state,
          unit: payload,
          loading: false,
        };
      })
      .addCase(updateUnitFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // DELETE UNIT
    builder
      .addCase(deleteUnitReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(deleteUnitSuccess, (state, { payload }) => {
        return {
          ...state,
          unit: payload,
          loading: false,
        };
      })
      .addCase(deleteUnitFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
    // GET LIST OF UNITS
    builder
      .addCase(getUnitListReq, (state) => {
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      })
      .addCase(getUnitListSuccess, (state, { payload }) => {
        return {
          ...state,
          units: payload.data.map((unit: any) => {
            return {
              ...unit,
              color: getColorByCode(unit.color),
            };
          }),
          loading: false,
        };
      })
      .addCase(getUnitListFailed, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
          loading: false,
        };
      });
  }),
};
