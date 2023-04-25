import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { carrierData } from "../../carrier/constant";
import { VehicleField } from "../../vehicle/constant";

import { CompanyField, DeviceField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const NameCompanyFields = {
  type: InputType.MULTI,
  label: "Details & Details",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: CompanyField.NAME,
      label: "Company Name*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Company Name",
      hasFeedback: true,
      title: "Company Name*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.USDOT,
      title: "USDOT*",
      rules: [getValidation(REQUIRED, "Fuel type"), validate("", MIN)],
      placeholder: "USDOT",
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.SELECT_V2,
      name: CompanyField.STATUS,
      label: "Status*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Status",
      hasFeedback: true,
      title: "Status*",
      span: 12,
      width: "95%",
      options: carrierData.status,
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.BILLING_PLAN,
      title: "MAC Address*",
      rules: [getValidation(REQUIRED, "MAC Address")],
      placeholder: "MAC Address",
      options: [{ key: "1", value: 1 }],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
