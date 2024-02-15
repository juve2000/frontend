import { InputType } from "../../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import {
  carrierStatusOptions,
  CarrierField,
  carrierCheckboxGroup,
} from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const LoginCarrierFields = {
  type: InputType.MULTI,
  label: "Carrier Login",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL,
      label: "Username",
      rules: [
        validate("", VALIDATION_TYPE.EMAIL),
        getValidation(REQUIRED, "email"),
      ],
      placeholder: "Email",
      hasFeedback: true,
      title: "Username",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.PASSWORD,
      name: CarrierField.PASSWORD,
      // rules: [validate("", PASSWORD), getValidation(REQUIRED, "DOT Number")],
      placeholder: "Password",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Password",
    },
  ],
};
