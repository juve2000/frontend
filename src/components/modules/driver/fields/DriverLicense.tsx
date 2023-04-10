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
} from "../constant";

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
      type: InputType.DATE_PICKER_SINGLE,
      name: DriverField.CDL_EXPIRATION,
      title: "CDL Expiration*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "CDL Expiration",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: DriverField.DRIVER_GROUP,
      title: "Driver Group*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Driver Group",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
  ],
};
