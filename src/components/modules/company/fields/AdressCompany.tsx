import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { VehicleField } from "../../vehicle/constant";

import { DeviceField, CompanyField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

// export const AddressCompanyFields = {
//   type: InputType.ADDRESS,
//   name: [CompanyField.ADDRESS],
//   label: "Authority Address*",
//   rules: [getValidation(REQUIRED, "")],
//   placeholder: "Authority Address*",
//   hasFeedback: true,
//   title: "Authority Address*",
//   span: 12,
//   width: "95%",
// };

export const AddressCompanyFields = {
  type: InputType.MULTI,
  label: "Authority Address",
  isRequired: false,
  fields: [
    {
      type: InputType.ADDRESS_V3,
      name: [CompanyField.ADDRESS],
      label: "Authority Address*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Authority Address*",
      hasFeedback: true,
      title: "Authority Address*",
      span: 24,
      width: "100%",
    },
  ],
};
