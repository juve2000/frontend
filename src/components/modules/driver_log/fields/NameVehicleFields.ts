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

export const NameDriverFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  renderLabel: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: "id",
      label: "Vehicle *",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Event Log ID",
      hasFeedback: true,
      title: "ID",
      span: 12,
      width: "95%",
    },

    {
      type: InputType.TIME_PICKER,
      name: "time",
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Time",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Time",
    },

    {
      type: InputType.SELECT_V2,
      name: "event",
      title: "Event",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Event",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
      options: [
        ...["SB", "D"].map((y: any) => {
          return {
            label: y,
            value: y,
          };
        }),
      ],
    },
    {
      type: InputType.SELECT_V2,
      name: "origin",
      title: "Origin",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Origin",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
      options: [
        {
          key: 0,
          value: "Origin",
        },
        {
          key: 1,
          value: "Driver",
        },
      ],
    },
    {
      type: InputType.SELECT_V2,
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
      type: InputType.SELECT_V2,
      name: "eld",
      title: "Eld",
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
      name: "lat_ocation",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Lat Location",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Lat Location",
    },
    {
      type: InputType.TEXT_V2,
      name: "lng_location",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Lng Location",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Lng Location",
    },
  ],
};
