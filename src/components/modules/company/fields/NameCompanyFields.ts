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

import { CompanyField, companyStatys, DeviceField } from "../constant";

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
      placeholder: "Enter Company Name",
      hasFeedback: true,
      title: "Company Name*",
      span: 12,
      width: "95%",
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
      width: "100%",
      options: companyStatys,
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.USDOT,
      title: "DOT#*",
      rules: [getValidation(REQUIRED, "Fuel type"), validate("", MIN)],
      placeholder: "Enter DOT#",
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: CompanyField.MC_NUMBER,
      title: "MC# *",
      rules: [getValidation(REQUIRED, "MC Number")],
      placeholder: "Enter MC#",
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
