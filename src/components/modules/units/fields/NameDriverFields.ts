import { InputType } from "../../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Name",
  isRequired: true,
  fields: [
    {
      type: InputType.PASSWORD,
      name: "password",
      hasGenerate: true,
      title: "Password*",
      rules: [
        getValidation(REQUIRED, "password"),
        getValidation("PASSWORD", "password"),
      ],
      placeholder: "Driver password",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
