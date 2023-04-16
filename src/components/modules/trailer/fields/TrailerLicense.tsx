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

export const DriverLicense = {
  type: InputType.MULTI,
  label: "License",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: TrailerField.VIN,
      label: "VIN*",
      rules: [getValidation(REQUIRED, ""), validate("", VIN)],
      placeholder: "VIN",
      hasFeedback: true,
      title: "VIN*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: TrailerField.LICENSE_NUMBER,
      title: "License No*",
      rules: [getValidation(REQUIRED, "Fuel type")],
      placeholder: "License No",
      // options: [{ key: "Gas", value: "Gas" }],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.DATE_PICKER_SINGLE,
      name: TrailerField.LICENSE_EXPIRATION,
      title: "License Plate Expiration Date*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "License Plate Expiration Date",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: TrailerField.LICENSE_PLATE,
      title: "License Plate Issuing State*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "License Plate Issuing State",
      options: carrierData.states,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
