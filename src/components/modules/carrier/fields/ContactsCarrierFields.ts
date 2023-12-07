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

export const ContactsCarrierFields = {
  type: InputType.MULTI,
  label: "Contacts",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL,
      label: "Email",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: " Email, e.g. username@domain.net",
      hasFeedback: true,
      title: "Email*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE,
      label: "Phone Number*",

      // rules: [
      //   // validate("", NOT_EMPTY),
      //   validate("", PHONE),
      //   getValidation(REQUIRED, ""),
      // ],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Number*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE_OVERSIZE_PERMITS,
      label: "Phone Oversize Permits",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Oversize Permits*",
      span: 12,
      width: "100%",
    },

    {
      type: InputType.PHONE,
      name: CarrierField.PHONE_SAFETY_SUPPORT,
      label: "Phone Safety Support*",

      // rules: [
      //   // validate("", NOT_EMPTY),
      //   validate("", PHONE),
      //   getValidation(REQUIRED, ""),
      // ],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Safety Support*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE_ACCOUNTING,
      label: "Phone Accounting",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Accounting*",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE_FLEET_MANAGER,
      label: "Phone Fleet Manager*",

      // rules: [
      //   // validate("", NOT_EMPTY),
      //   validate("", PHONE),
      //   getValidation(REQUIRED, ""),
      // ],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Fleet Manager*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.PHONE,
      name: CarrierField.PHONE_ELD_SUPPRORT,
      label: "Phone Eld Support",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Phone number, e.g. +12345678901",
      hasFeedback: true,
      title: "Phone Eld Support*",
      span: 12,
      width: "100%",
    },

    {
      type: InputType.TEXT_V2,
      name: CarrierField.PERSON,
      // rules: [getValidation(REQUIRED, "")],
      placeholder: "Contact Person",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Contact Person*",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL_SECOND,
      // rules: [
      //   validate("", VALIDATION_TYPE.EMAIL),
      //   getValidation(REQUIRED, "Second email"),
      // ],
      placeholder: "Additional email, e.g. username@domain.net",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Additional email",
    },
  ],
};
