import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";
import { CarrierField, VehicleField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

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
      name: VehicleField.NOTES,
      label: "Notice",
      rules: [],
      placeholder: "Notice",
      hasFeedback: true,
      title: " ",
      span: 24,
      width: "100%",
      styles: { height: "120px" },
    },
  ],
};
