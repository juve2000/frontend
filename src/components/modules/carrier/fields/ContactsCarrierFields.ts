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
      type: InputType.PHONE,
      name: CarrierField.PHONE,
      label: "Phone Number*",
      // rules: [
      //   getValidation(MAX, 9),

      //   validate("", NUMERIC),
      //   getValidation(REQUIRED, "DOT Number"),
      // ],
      rules: [
        // validate("", NOT_EMPTY),
        validate("", PHONE),
        getValidation(REQUIRED, ""),
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
      rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: "Email",
      hasFeedback: true,
      title: "Email*",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.PERSON,
      rules: [getValidation(REQUIRED, "Contact person"), validate("", NAME)],
      placeholder: "Contact Person",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Contact Person*",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL_SECOND,
      rules: [
        validate("", VALIDATION_TYPE.EMAIL),
        getValidation(REQUIRED, "Second email"),
      ],
      placeholder: "Reserve mail",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Reserve mail",
    },
  ],
};
