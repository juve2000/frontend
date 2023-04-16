import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { VehicleField } from "../../vehicle/constant";

import { DeviceField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DeviceField.NAME,
      label: "Device Name*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Device Name",
      hasFeedback: true,
      title: "Device Name*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: DeviceField.TYPE,
      title: "Device Type*",
      rules: [getValidation(REQUIRED, "Fuel type")],
      placeholder: "Device Type",
      options: [{ key: "1", value: 1 }],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.SERIAL_NUMBER,
      label: "Serial Number*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Serial Number",
      hasFeedback: true,
      title: "Serial Number*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.MAC_ADDRESS,
      title: "MAC Address*",
      rules: [getValidation(REQUIRED, "MAC Address")],
      placeholder: "MAC Address",
      options: [{ key: "1", value: 1 }],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.MODEL,
      rules: [getValidation(REQUIRED, "username")],
      placeholder: "Device Model",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Device Model*",
    },

    {
      type: InputType.TEXT_V2,
      name: DeviceField.FIRMWARE,
      rules: [getValidation(REQUIRED, "username")],
      placeholder: "F/W Versions",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "F/W Versions*",
    },
  ],
};
