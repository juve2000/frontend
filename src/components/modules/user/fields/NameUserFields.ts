import { InputType } from "../../../../constants/inputs";
import {
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { UserField } from "../constant";
import { carrierData } from "../../carrier/constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const NameUserFields = {
  type: InputType.MULTI,
  label: "Name",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: UserField.FIRST_NAME,
      label: "First Name",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "First Name",
      hasFeedback: true,
      title: "First Name*",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TEXT_V2,
      name: UserField.LAST_NAME,
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Last Name",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Last Name*",
    },
    {
      type: InputType.ROLE_SELECT,
      name: UserField.ROLE,
      label: "Role",
      rules: [getValidation(REQUIRED, "email")],
      placeholder: "Role",
      hasFeedback: true,
      title: "Role",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: UserField.STATUS,
      title: "Status*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
