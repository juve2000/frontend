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
import { EventOptions } from "./log-contant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const CreateLogFields = {
  type: InputType.MULTI,
  label: "Details",
  isRequired: true,
  renderLabel: false,
  fields: [
    {
      type: InputType.TIME_PICKER_LOG,
      name: "timestamp",
      rules: [getValidation(REQUIRED, "name")],

      placeholder: "Time",
      hasFeedback: true,
      span: 24,
      width: "100%",
      title: "Start Time",
    },

    // {
    //   type: InputType.TIME_PICKER_LOG,
    //   name: "end_time",
    //   rules: [getValidation(REQUIRED, "name")],

    //   placeholder: "End Time",
    //   hasFeedback: true,
    //   span: 12,
    //   width: "100%",
    //   title: "End Time",
    // },

    {
      type: InputType.SELECT_EVENT_V2,
      name: "event",
      title: "Event",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Event",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
      options: EventOptions,
    },
    {
      type: InputType.SELECT_ORIGIN_V2,
      name: "record_origin",
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
      type: InputType.TEXT_V2,
      name: "identificator",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "ID",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "ID",
    },
    {
      type: InputType.SELECT_NOTES_V2,
      name: "annotations",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Note",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Note",
    },
    {
      type: InputType.VEHICLE_DYNAMIC,
      name: "vehicle",
      title: "Vehicle",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Vehicle",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
      isLogDriver: true,
      isRequired: false,
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
      type: InputType.DEVICE_DYNAMIC,
      name: "eld",
      title: "Eld",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Select Eld",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
      isLogDriver: true,
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
      name: "total_miles",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Odometer",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Odometer",
    },
    {
      type: InputType.TEXT_V2,
      name: "total_hours",
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
      placeholder: "Location",
      hasFeedback: true,
      span: 24,
      width: "100%",
      title: "Location",
    },
    {
      type: InputType.TEXT_V2,
      name: "latitude",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Lat Location",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Lat Location",
    },
    {
      type: InputType.TEXT_V2,
      name: "longitude",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Lng Location",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Lng Location",
    },
    {
      type: InputType.DRIVER_DYNAMIC,
      name: "codriver",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Select CO Driver",
      hasFeedback: true,
      span: 24,
      width: "100%",
      title: "Co-Driver",
      isRequired: false,
      isLogDriver: true,
      isCoDriver: true,
    },
    {
      type: InputType.TEXT_V2,
      name: "shipping_doc",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Shipping Document",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Shipping Document",
    },
    {
      type: InputType.TEXT_V2,
      name: "trailer",
      // rules: [validate("", ALPHABETICAL)],
      placeholder: "Enter Trailer",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "Trailer",
    },
  ],
};
