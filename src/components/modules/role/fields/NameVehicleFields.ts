import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";

import { RoleField } from "../constant";

const { REQUIRED } = VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Role parameters",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: RoleField.NAME,
      label: "Name of Role*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Name of Role",
      hasFeedback: true,
      title: "Name of Role*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: RoleField.DESCRIPTION,
      label: "Description*",
      // rules: [getValidation(REQUIRED, "")],
      placeholder: "Description",
      hasFeedback: true,
      title: "Description*",
      span: 24,
      width: "100%",
    },
  ],
};
