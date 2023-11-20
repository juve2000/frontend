import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { VehicleField } from "../../vehicle/constant";

import { DeviceConstant, DeviceField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;
export const DeviceTypes = [
  { key: 1, value: "ELD" },
  { key: 2, value: "GPS Tracker" },
  { key: 3, value: "Dash Cam" },
];
export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DeviceField.identificator,
      label: "Device Identificator *",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Enter Device Identificator",
      hasFeedback: true,
      title: "Device Identificator *",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.NAME,
      label: "Device *",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Enter Device Name",
      hasFeedback: true,
      title: "Device *",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: DeviceField.TYPE,
      title: "Device Type*",
      rules: [getValidation(REQUIRED, "Fuel type")],
      placeholder: "Device Type",
      options: DeviceConstant.type,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.SERIAL_NUMBER,
      label: "SN*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Enter SN",
      hasFeedback: true,
      title: "SN*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: DeviceField.MAC_ADDRESS,
      title: "MAC Address*",
      rules: [getValidation(REQUIRED, "MAC Address")],
      placeholder: "Enter MAC Address",
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
