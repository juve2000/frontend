import { InputType } from "../../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";
import { OfficeField } from "./constants";

import { CarrierField, carrierData } from "../../carrier/constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const PreferencesOfficeFields = {
  type: InputType.MULTI,
  label: "Preferences",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      // TODO change field name
      name: OfficeField.measurement,
      pathName: ["config"],
      label: "Measurment system",
      rules: [getValidation(REQUIRED, "Measurment system")],
      placeholder: "Measurment system",
      hasFeedback: true,
      title: "Measurment system",
      span: 12,
      width: "95%",
      options: carrierData.measurement_system,
    },
    {
      type: InputType.SELECT_V2,
      name: OfficeField.DST,
      pathName: ["config"],
      label: "Daylight saving time",
      rules: [getValidation(REQUIRED, "Measurment system")],
      placeholder: "Daylight saving time",
      hasFeedback: true,
      title: "Daylight saving time",
      span: 12,
      width: "100%",
      options: [{ key: 1, value: "USA and Canada: from the second " }],
    },
    {
      type: InputType.SELECT_V2,
      name: OfficeField.first_day,
      pathName: ["config"],
      label: "The first day of the week",
      rules: [getValidation(REQUIRED, "The first day of the week")],
      placeholder: "The first day of the week",
      hasFeedback: true,
      title: "The first day of the week",
      span: 12,
      width: "95%",
      options: carrierData.first_day,
    },
    {
      type: InputType.TIME_PICKER,
      // type: InputType.TIME_PICKER,
      name: CarrierField.SETTINGS.PERIOD_STARTING_TIME,

      pathName: ["config"],

      label: "24 Hour Period Starting Time",
      rules: [getValidation(REQUIRED, "24 Hour Period Starting Time")],
      // rules: [],
      placeholder: "24 Hour Period Starting Time",
      hasFeedback: true,
      title: "24 Hour Period Starting Time",
      span: 12,
      width: "100%",
    },
  ],
};
