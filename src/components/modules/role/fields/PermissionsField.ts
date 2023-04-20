import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";

import { RoleField } from "../constant";

const { REQUIRED } = VALIDATION_TYPE;

export const PermissionsFields = {
  type: InputType.MULTI,
  label: "Permissions List",
  isRequired: true,
  fields: [
    {
      type: InputType.INPUT_ROLE,
      name: RoleField.PERMISSIONS,
      label: "Permissions*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Permissions",
      hasFeedback: true,
      title: "Permissions*",
      span: 24,
      width: "100%",
    },
  ],
};
