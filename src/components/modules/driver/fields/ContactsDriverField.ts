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
  DriverField,
  carrierData,
} from "../constant";

const {
  ALPHABETICAL,
  REQUIRED,
  MIN,
  MAX,
  NUMERIC,
  PASSWORD,
  EMAIL,
  NOT_EMPTY,
  NAME,
  PHONE,
} = VALIDATION_TYPE;

export const ContactsDriverFields = {
  type: InputType.MULTI,
  label: "Contacts",
  isRequired: true,
  fields: [
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE,
      label: "Phone *",

      // rules: [validate("", PHONE), getValidation(REQUIRED, "")],
      placeholder: "Enter Phone",
      hasFeedback: true,
      title: "Phone *",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL,
      label: "Email *",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Enter Email",
      hasFeedback: true,
      title: "Email *",
      span: 12,
      width: "100%",
    },
  ],
};
