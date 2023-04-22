import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";
import { UserField } from "../constant";

const { REQUIRED, EMAIL, PHONE } = VALIDATION_TYPE;

export const OfficeUserFields = {
  type: InputType.MULTI,
  label: "Office",
  isRequired: false,
  fields: [
    {
      type: InputType.OFFICE_SELECT,
      name: UserField.OFFICES,
      // label: "Personal Email",
      rules: [getValidation(REQUIRED, "Status")],

      placeholder: "Select Office",
      hasFeedback: true,
      title: "Offices",
      span: 24,
      width: "100%",
    },
  ],
};
