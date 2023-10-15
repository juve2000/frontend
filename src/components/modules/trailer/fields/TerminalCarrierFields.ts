import { InputType } from "../../../../constants/inputs";

import { TrailerField } from "../constant";

export const TerminalCarrierFields = {
  type: InputType.DRIVER_SELECT_TERMINAL,
  label: "Terminal",
  isRequired: true,
};

export const VehicleNotice = {
  type: InputType.MULTI,
  label: "Notice",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_AREA,
      name: TrailerField.NOTES,
      label: "Notice",
      rules: [],
      placeholder: "Notice",
      hasFeedback: true,
      title: " ",
      span: 24,
      width: "100%",
      styles: { height: "60px" },
    },
  ],
};
