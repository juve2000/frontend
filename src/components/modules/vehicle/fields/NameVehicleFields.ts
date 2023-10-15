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
  fields: [
    {
      type: InputType.TEXT_V2,
      name: VehicleField.IDENTIFICATOR,
      label: "Vehicle *",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Enter Vehicle",
      hasFeedback: true,
      title: "Vehicle *",
      span: 24,
      width: "100%",
    },

    // {
    //   type: InputType.TEXT_V2,
    //   name: VehicleField.MAKE,
    //   rules: [getValidation(REQUIRED, "name")],

    //   placeholder: "Make",
    //   hasFeedback: true,
    //   span: 12,
    //   width: "100%",
    //   title: "Make*",
    // },
    {
      type: InputType.TEXT_V2,
      name: VehicleField.MODEL,
      rules: [validate("", ALPHABETICAL)],
      placeholder: "Model",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "Model",
    },
    {
      type: InputType.SELECT_V2,
      name: VehicleField.YEAR,
      title: "Year",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Year",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
      options: [
        ...generateArrayOfYears()?.map((y: any) => {
          return {
            label: y,
            value: y,
          };
        }),
      ],
    },
    {
      type: InputType.SELECT_V2,
      name: VehicleField.MAKE,
      title: "Make*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Make",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
      options: [
        {
          key: 0,
          value: "Freightliner",
        },
        {
          key: 1,
          value: "International",
        },
        {
          key: 2,
          value: "Kenworth",
        },
        {
          key: 3,
          value: "Mack",
        },
        {
          key: 4,
          value: "Peterbilt",
        },
        {
          key: 5,
          value: "Volvo",
        },
        {
          key: 6,
          value: "Western Star",
        },
        {
          key: 7,
          value: "Ford",
        },
        {
          key: 8,
          value: "Chevrolet",
        },
        {
          key: 9,
          value: "GMC",
        },
        {
          key: 10,
          value: "Ram",
        },
        {
          key: 11,
          value: "Hino",
        },
        {
          key: 12,
          value: "Isuzu",
        },
        {
          key: 13,
          value: "Mitsubishi Fuso",
        },
        {
          key: 14,
          value: "Sterling",
        },
        {
          key: 15,
          value: "Mercedes-Benz",
        },
        {
          key: 16,
          value: "DAF",
        },
        {
          key: 17,
          value: "Scania",
        },
        {
          key: 18,
          value: "Iveco",
        },
        {
          key: 19,
          value: "MAN",
        },
        {
          key: 20,
          value: "Renault ",
        },
        {
          key: 21,
          value: "Foton",
        },
        {
          key: 22,
          value: "Tata Motors",
        },
        {
          key: 23,
          value: "Navistar",
        },
        {
          key: 24,
          value: "Paccar",
        },
        {
          key: 25,
          value: "",
        },
      ],
    },
  ],
};
