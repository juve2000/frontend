import { InputType } from "../../../../constants/inputs";
import { generateArrayOfYears } from "../../../../hooks/utils";
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
  VehicleField,
} from "../constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const LogFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  renderLabel: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: "driver",
      label: "Driver *",
      // rules: [getValidation(REQUIRED, "name")],
      placeholder: "Event Log ID",
      hasFeedback: true,
      title: "Driver",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TEXT_V2,
      name: "codriver",
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Co Driver",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Co Driver",
    },
    {
      type: InputType.TEXT_V2,
      name: "vehicle",
      title: "Vehicle",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Vehicle",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: "vin",
      title: "VIN",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Carrier",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },

    {
      type: InputType.TEXT_V2,
      name: "vehicle",
      title: "Vehicle",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Vehicle",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
      options: [
        {
          key: 0,
          value: "Vehicle 01",
        },
        {
          key: 1,
          value: "Vehicle 02",
        },
      ],
    },
    {
      type: InputType.TEXT_V2,
      name: "eld",
      title: "ELD",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Eld",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
      options: [
        {
          key: 0,
          value: "Eld 01",
        },
        {
          key: 1,
          value: "Eld 02",
        },
      ],
    },
    {
      type: InputType.TEXT_V2,
      name: "odometer",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Odometer",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Odometer",
    },
    {
      type: InputType.TEXT_V2,
      name: "eh",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter EH",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "EH",
    },
    {
      type: InputType.TEXT_V2,
      name: "from",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "From",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "From",
    },
    {
      type: InputType.TEXT_V2,
      name: "to",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "To",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "To",
    },
    {
      type: InputType.TEXT_V2,
      name: "location",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Location",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Location",
    },
    {
      type: InputType.TEXT_V2,
      name: "note",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Note",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Note",
    },

    {
      type: InputType.TEXT_V2,
      name: "malfunction_indicator",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Malfunction",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Malfunction Indicator",
    },
    {
      type: InputType.TEXT_V2,
      name: "undefined_driver_records",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Undefined Driver Records",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Undefined Driver Records",
    },
    {
      type: InputType.TEXT_V2,
      name: "data_diagnostic_indicator",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Data Diagnostic Indicator",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Data Diagnostic Indicator",
    },
    {
      type: InputType.TEXT_V2,
      name: "certified",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Certified",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Certified",
    },
  ],
};
