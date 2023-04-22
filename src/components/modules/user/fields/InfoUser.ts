import { InputType } from "../../../../constants/inputs";
import {
  VALIDATION_TYPE,
  getValidation,
  validate,
} from "../../../../utils/validation";
import { DriverField } from "../../driver/constant";
import { UserField } from "../constant";
import { carrierData } from "../../carrier/constant";

const { REQUIRED, EMAIL, PHONE } = VALIDATION_TYPE;

export const InfoUserFields = {
  type: InputType.MULTI,
  label: "Info",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: UserField.EMAIL,
      label: "Email",
      rules: [getValidation(REQUIRED, "email"), validate("", EMAIL)],
      placeholder: "Email",
      hasFeedback: true,
      title: "Email",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.PHONE,
      name: DriverField.PHONE,
      title: "Phone*",
      rules: [getValidation(REQUIRED, "Status"), validate("", PHONE)],
      placeholder: "Phone",
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: [UserField.COMPANY, "name"],
      label: "Company",
      // rules: [getValidation(REQUIRED, "email"), validate("", EMAIL)],
      placeholder: "Company",
      hasFeedback: true,
      title: "Company",
      span: 12,
      width: "95%",
      disabled: true,
      isReadonly: true,
    },
    {
      type: InputType.TEXT_V2,
      name: UserField.PERSONAL_EMAIL,
      label: "Personal Email",
      rules: [validate("", EMAIL)],
      placeholder: "Personal Email",
      hasFeedback: true,
      title: "Personal Email",
      span: 12,
      width: "100%",
    },
  ],
};
