import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
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
  carrierData,
} from "../../driver/constant";

import { TrailerField } from "../constant";

const {
  ALPHABETICAL,
  REQUIRED,
  MIN,
  MAX,
  NUMERIC,
  PASSWORD,
  EMAIL,
  NAME,
  ALPHABETICAL_NUMBERS,
} = VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: TrailerField.NAME,
      label: "Trailer Name",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Trailer Name",
      hasFeedback: true,
      title: "Trailer Name*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: TrailerField.IDENTIFICATOR,
      label: "Vehicle ID",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Vehicle ID",
      hasFeedback: true,
      title: "Vehicle ID*",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TEXT_V2,
      name: TrailerField.MAKE,
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Make",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Make*",
    },
    {
      type: InputType.TEXT_V2,
      name: TrailerField.MODEL,
      rules: [getValidation(REQUIRED, "username")],
      placeholder: "Model",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Model*",
    },
    {
      type: InputType.SELECT_V2,
      name: TrailerField.YEAR,
      hasGenerate: true,
      title: "Year*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Year",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
      options: generateArrayOfYears().map((y: any) => {
        return {
          key: y,
          value: y,
        };
      }),
    },
  ],
};
