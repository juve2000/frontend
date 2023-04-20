import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { VehicleField } from "../../vehicle/constant";

import { DeviceField, RoleField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

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
