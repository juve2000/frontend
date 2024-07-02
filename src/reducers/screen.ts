import { createReducer } from "@reduxjs/toolkit";

import { setScreenSize } from "../actions";
import { screenTypeSelector } from "../utils/screen";

export const screenState = {
  height: 0,
  width: 0,
  screenType: "XXL",
};

export default {
  screen: createReducer<any>(screenState, (builder) => {
    // set screen size
    builder.addCase(setScreenSize, (state, payload) => {
      console.log("payload", payload);
      console.log("screen type", screenTypeSelector(payload?.payload?.width));
      return {
        ...state,
        ...payload?.payload,
        screenType: screenTypeSelector(payload?.payload?.width),
      };
    });
  }),
};
