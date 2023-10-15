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
  carrierData,
} from "../constant";
import { DriverField } from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const PreferencesCarrierFields = {
  type: InputType.MULTI,
  label: "Preferences *",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      // TODO change field name
      name: DriverField.MEASUREMENT_SYSTEM,
      label: "Measurement system",
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
      name: DriverField.DST,
      label: "Daylight saving time *",
      rules: [getValidation(REQUIRED, "Daylight saving time")],
      placeholder: "Daylight saving time",
      hasFeedback: true,
      title: "Daylight saving time *",
      span: 12,
      width: "100%",
      options: carrierData.dst,
    },
    {
      type: InputType.SELECT_V2,
      name: DriverField.FIRST_DAY,
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
      // type: InputType.TEXT_V2,
      type: InputType.TIME_PICKER,
      name: DriverField.PERIOD_STARTING_TIME,

      label: "24 Hour Period Starting Time",
      rules: [getValidation(REQUIRED, "24 Hour Period Starting Time")],
      // rules: [],
      placeholder: "24 Hour Period Starting Time",
      hasFeedback: true,
      title: "24 Hour Period Starting Time",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.SELECT_V2,
      name: DriverField.COMPLIANCE_MODE,
      label: "Compliance Mode*",
      rules: [getValidation(REQUIRED, "Compliance Mode*")],
      placeholder: "Compliance Mode*",
      hasFeedback: true,
      title: "Compliance Mode*",
      span: 12,
      width: "95%",
      options: carrierData.compliance_mode,
    },
    {
      type: InputType.TEXT_V2,
      name: DriverField.MOTION_TRASHOLD,
      label: "Vehicle Motion Trashhold*",
      rules: [
        getValidation(REQUIRED, "Vehicle Motion Trashhold*"),
        validate("", NUMERIC),
      ],
      placeholder: "Vehicle Motion Trashhold*",
      hasFeedback: true,
      title: "Vehicle Motion Trashhold*",
      span: 12,
      width: "100%",
    },
  ],
};
