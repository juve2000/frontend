import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";
import { DriverGroupField } from "../constant";

const { ALPHABETICAL, REQUIRED, NAME } = VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Name",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DriverGroupField.NAME,
      label: "Driver Group Name",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Driver Group Name",
      hasFeedback: true,
      title: "Driver Group Name*",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.CARRIER_DYNAMIC_DRIVER_GROUP,
      name: DriverGroupField.CARRIER,
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Carrier",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Carrier*",
    },
  ],
};
