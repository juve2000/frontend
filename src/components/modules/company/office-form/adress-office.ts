import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { VehicleField } from "../../vehicle/constant";
import { carrierData } from "../../carrier/constant";

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

export const AddressOfficeFields = {
  type: InputType.MULTI,
  label: "Office Address",
  isRequired: false,
  fields: [
    {
      type: InputType.FETCH_COMPANY_SELECT,
      name: [CompanyField.COMPANY],
      label: "Company*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Company*",
      hasFeedback: true,
      title: "Company*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.ADDRESS_V3,
      name: [CompanyField.ADDRESS],
      label: "Office Address*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Office Address*",
      hasFeedback: true,
      title: "Office Address*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.SELECT_V2,
      name: "tz",
      // label: "Terminal name",
      label: "Time zone",
      rules: [
        // validate("", VALIDATION_TYPE.ALPHABETICAL),
        getValidation(REQUIRED, "Time zone"),
      ],
      placeholder: "Time Zone",
      hasFeedback: true,
      title: "Time zone",
      span: 24,
      width: "100%",
      options: carrierData.tz,
    },
  ],
};
