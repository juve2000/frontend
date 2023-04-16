import { InputType } from "../../../../constants/inputs";
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
  DriverField,
  carrierData,
  DocumentType,
  getDocumentByType,
  getDocumentNameByType,
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
  NOT_EMPTY,
  NAME,
  PHONE,
  VIN,
} = VALIDATION_TYPE;

export const DriverLicense2 = {
  type: InputType.DRIVER_DYNAMIC_CARRIER,
  // label: "Carrier",
  isRequired: true,
};

export const TrailerTypeField = {
  type: InputType.MULTI,
  label: "Trailer Type",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      name: TrailerField.TYPE,
      title: "Trailer Type*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "Trailer Type",
      options: [{ key: "type 1", value: 1 }],
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: TrailerField.OWNERSHIP,
      title: "Owner*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "Owner",
      options: [{ key: "type 1", value: 1 }],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
