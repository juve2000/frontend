import { InputType } from "../../../../constants/inputs";
import {
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { CarrierField, MechanicField } from "../constant";

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

export const ContactsMechanicFields = {
  type: InputType.MULTI,
  label: "Contacts",
  isRequired: true,
  fields: [
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE,
      label: "Phone Number*",

      rules: [validate("", PHONE), getValidation(REQUIRED, "")],
      placeholder: "Phone Number",
      hasFeedback: true,
      title: "Phone Number*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL,
      label: "Email",
      rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Email",
      hasFeedback: true,
      title: "Email*",
      span: 12,
      width: "100%",
    },
  ],
};

export const NoticeMechanicFields = {
  type: InputType.MULTI,
  label: "Notice",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_AREA,
      name: CarrierField.NOTES,
      label: "Notice",
      styles: { height: "60px" },

      // rules: [validate("", PHONE), getValidation(REQUIRED, "")],
      placeholder: "Notice",
      hasFeedback: true,
      title: "",
      span: 24,
      width: "100%",
    },
  ],
};
