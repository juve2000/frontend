import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE } from "../../../../utils/validation";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const TerminalCarrierFields = {
  type: InputType.MECHANIC_SELECT_TERMINAL,
  label: "Terminal",
  isRequired: true,
};
