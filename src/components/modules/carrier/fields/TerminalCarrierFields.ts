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

export const TerminalCarrierFields = (options: any) => {
  return {
    type: InputType.ADD_DYNAMIC,
    name: "terminals",
    label: "Authority terminal",
    fields: [
      {
        type: InputType.MULTI,
        label: "Yard name",
        isRequired: true,
        fields: [
          {
            type: InputType.TEXT_V2,
            name: CarrierField.NAME,
            label: "Yard name*",
            isRequired: true,
            rules: [
              // validate("", VALIDATION_TYPE.ALPHABETICAL),
              getValidation(REQUIRED, "name"),
            ],
            placeholder: "Enter Yard Name",
            hasFeedback: true,
            title: "Yard name*",
            span: 24,
            width: "100%",
          },
        ],
      },
      // CARRIER TERMINAL: ADDRESS

      {
        type: InputType.ADDRESS,
        name: "address",
        label: "Yard Address",
        rules: [],
        placeholder: "Carrier",
        hasFeedback: true,
      },

      {
        type: InputType.MULTI,
        label: "",
        isRequired: true,
        fields: [
          {
            type: InputType.SELECT_V2,
            name: CarrierField.TZ,
            // label: "Terminal name",
            rules: [
              // validate("", VALIDATION_TYPE.ALPHABETICAL),
              getValidation(REQUIRED, "Time zone"),
            ],
            placeholder: "Select Time Zone",
            hasFeedback: true,
            title: "Time Zone*",
            label: "Time Zone*",
            span: 24,
            width: "100%",
            options: carrierData.tz,
          },
        ],
      },
    ],
  };
};
