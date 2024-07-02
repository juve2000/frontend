import { createAction } from "@reduxjs/toolkit";
import { keyMirror } from "@gilbarbara/helpers";

import { actionPayload } from "../modules/helpers";

export const ScreenSizeTypes = keyMirror({
  SET_SCREEN_SIZE: undefined,
});

// set screen size

export const setScreenSize = createAction(
  ScreenSizeTypes.SET_SCREEN_SIZE,
  (payload: any) => {
    return actionPayload(payload);
  }
);
