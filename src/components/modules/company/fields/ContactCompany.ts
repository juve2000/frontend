import { InputType } from "../../../../constants/inputs";
import {
  validate,
  getValidation,
  VALIDATION_TYPE,
} from "../../../../utils/validation";
import { CompanyField } from "../constant";

const { REQUIRED, PHONE, EMAIL } = VALIDATION_TYPE;

export const ContactCompanyFields = {
  type: InputType.MULTI,
  label: "Contacts",
  isRequired: true,
  fields: [
    {
      type: InputType.PHONE,
      name: CompanyField.PHONE,
      label: "Phone Number*",

      rules: [validate("", PHONE), getValidation(REQUIRED, "")],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Number*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.EMAIL,
      label: "Email *",
      rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Email, e.g. username@domain.net",
      hasFeedback: true,
      title: "Email*",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.PERSON,
      label: "Contact Person*",

      rules: [getValidation(REQUIRED, "")],
      placeholder: "Contact Person",
      hasFeedback: true,
      title: "Contact Person*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.WEBSITE,
      label: "Website",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Website",
      hasFeedback: true,
      title: "Website",
      span: 12,
      width: "100%",
    },
  ],
};
