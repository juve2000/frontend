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

export const CarrierFieldInput = {
  type: InputType.CARRIER_DYNAMIC_VEHICLE,
  // label: "Carrier",
  isRequired: true,
};

export const GroupsStatusFields = {
  type: InputType.MULTI,
  label: "Group and Status",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      name: CarrierField.STATUS,
      title: "Status*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
  ],
};
