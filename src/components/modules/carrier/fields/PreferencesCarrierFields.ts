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

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const PreferencesCarrierFields = {
  type: InputType.MULTI,
  label: "Preferences",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      // TODO change field name
      name: CarrierField.SETTINGS.MEASURENMENT_SYSTEM,
      pathName: ["settings"],
      label: "Measurement system*",
      rules: [getValidation(REQUIRED, "Measurement system")],
      placeholder: "Measurement system",
      hasFeedback: true,
      title: "Measurement system*",
      span: 12,
      width: "95%",
      options: carrierData.measurement_system,
    },
    {
      type: InputType.SELECT_V2,
      name: CarrierField.SETTINGS.DST,
      pathName: ["settings"],
      label: "Daylight saving time*",
      rules: [getValidation(REQUIRED, "Daylight saving time")],
      placeholder: "Daylight saving time",
      hasFeedback: true,
      title: "Daylight saving time*",
      span: 12,
      width: "100%",
      options: carrierData.dst,
    },
    {
      type: InputType.SELECT_V2,
      name: CarrierField.SETTINGS.FIRST_DAY,
      pathName: ["settings"],
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

      pathName: ["settings"],

      label: "24 Hour Period Starting Time*",
      rules: [getValidation(REQUIRED, "24 Hour Period Starting Time")],
      // rules: [],
      placeholder: "24 Hour Period Starting Time",
      hasFeedback: true,
      title: "24 Hour Period Starting Time*",
      span: 12,
      width: "100%",
    },
    {
      type: InputType.SELECT_V2,
      name: CarrierField.SETTINGS.COMPLIANCE_MODE,
      pathName: ["settings"],
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
      name: CarrierField.SETTINGS.MOTION_TRASHOLD,
      pathName: ["settings"],
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
