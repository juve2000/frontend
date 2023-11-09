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
  carrierData,
  DriverField,
} from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Name",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DriverField.FIRST_NAME,
      label: "First Name",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Frist Name",
      hasFeedback: true,
      title: "First Name*",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TEXT_V2,
      name: DriverField.LAST_NAME,
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Last Name",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Last Name*",
    },
    {
      type: InputType.TEXT_V2,
      name: DriverField.USERNAME,
      // rules: [getValidation(REQUIRED, "username")],
      placeholder: "Enter Username",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Username **",
    },
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
