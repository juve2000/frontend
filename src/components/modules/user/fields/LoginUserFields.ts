import { InputType } from "../../../../constants/inputs";
import {
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { UserField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const LoginUserFields = {
  type: InputType.MULTI,
  label: "User Login",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: UserField.USERNAME,
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
      name: UserField.PASSWORD,
      rules: [validate("", PASSWORD), getValidation(REQUIRED, "DOT Number")],
      placeholder: "Password",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Password",
      hasGenerate: true,
    },
  ],
};
