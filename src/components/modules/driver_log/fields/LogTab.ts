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
      placeholder: "No ",

      hasFeedback: true,
      title: "Driver",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TEXT_V2,
      name: "codriver",
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Co-Driver",
    },
    {
      type: InputType.TEXT_V2,
      name: "vehicle",
      title: "Vehicle",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "No ",

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
      placeholder: "No ",

      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: "eld",
      title: "ELD",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "No ",

      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
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
      name: "trailer",
      title: "Trailers",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "No ",

      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
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
      name: "odometer",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Odometer",
    },
    {
      type: InputType.TEXT_V2,
      name: "miles_today",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Miles Today",
    },
    {
      type: InputType.TEXT_V2,
      name: "eh",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "EH",
    },
    {
      type: InputType.TEXT_V2,
      name: "shiping_docs",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Shipping Docs",
    },

    {
      type: InputType.TEXT_V2,
      name: "from",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "From",
    },
    {
      type: InputType.TEXT_V2,
      name: "to",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "To",
    },
    {
      type: InputType.TEXT_V2,
      name: "diagnostic",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Diagnostic Indicator",
    },
    {
      type: InputType.TEXT_V2,
      name: "malfunction",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Malfunction Indicator",
    },
    {
      type: InputType.TEXT_V2,
      name: "unudentified",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Unidentified Driver",
    },
    {
      type: InputType.TEXT_V2,
      name: "certified",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "No ",

      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Certification",
    },
  ],
};
