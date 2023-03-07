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

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const ContactsCarrierFields = {
  type: InputType.MULTI,
  label: "Contacts",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: CarrierField.PHONE,
      label: "Phone Number*",
      rules: [
        validate("", VALIDATION_TYPE.PHONE),
        getValidation(REQUIRED, "phone"),
      ],
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
      rules: [
        validate("", VALIDATION_TYPE.EMAIL),
        getValidation(REQUIRED, "email"),
      ],
      placeholder: "Email",
      hasFeedback: true,
      title: "Email*",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.PERSON,
      rules: [validate("", NAME), getValidation(REQUIRED, "Contact person")],
      placeholder: "Contact Person",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Contact Person*",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL_SECOND,
      rules: [validate("", EMAIL)],
      placeholder: "Reserve mail",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Reserve mail",
    },
  ],
};
