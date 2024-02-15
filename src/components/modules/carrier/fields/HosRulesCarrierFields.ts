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

export const HosRulesCarrierFields = (options: any) => {
  return {
    type: InputType.MULTI,
    label: "HOS Rules",
    isRequired: true,
    fields: [
      {
        type: InputType.SELECT_MULTI,
        name: CarrierField.SETTINGS.CARGO_TYPE,
        pathName: ["settings"],
        label: "Cargo type*",
        rules: [getValidation(REQUIRED, "Cargo type")],
        placeholder: "Cargo type",
        hasFeedback: true,
        title: "Cargo type*",
        span: 12,
        width: "95%",
        options: carrierData.cargo_type,
      },
      {
        type: InputType.SELECT_V2,
        // TODO change field name
        name: "hos_rules",
        pathName: ["settings"],
        label: "HOS Rules (Cycle)*",
        rules: [getValidation(REQUIRED, "HOS Rules (Cycle Rules)")],
        placeholder: "HOS Rules (Cycle)",
        hasFeedback: true,
        title: "HOS Rules (Cycle)*",
        span: 12,
        width: "100%",
        options: carrierData.hos_rules,
      },
      {
        type: InputType.SELECT_V2,
        name: CarrierField.SETTINGS.RESTART,
        pathName: ["settings"],
        label: "Restart*",
        rules: [getValidation(REQUIRED, "Restart")],
        placeholder: "Restart",
        hasFeedback: true,
        title: "Restart*",
        span: 12,
        width: "95%",
        options: carrierData.restart,
      },
      {
        type: InputType.SELECT_V2,
        name: CarrierField.SETTINGS.REST_BREAK,
        pathName: ["settings"],
        label: "Rest Break",
        rules: [getValidation(REQUIRED, "Rest Break")],
        placeholder: "Rest Break",
        hasFeedback: true,
        title: "Rest Break",
        span: 12,
        width: "100%",
        options: carrierData.rest_break,
      },

      {
        type: InputType.CHECKBOX_V2,
        // type: InputType.TIME_PICKER,

        name: ["settings"],
        label: "24 Hour Period Starting Time",
        rules: [getValidation(REQUIRED, "24 Hour Period Starting Time")],
        placeholder: "24 Hour Period Starting Time",
        hasFeedback: true,
        title: "24 Hour Period Starting Time",
        span: 12,
        width: "100%",
        options: carrierCheckboxGroup,
        direction: "column",
        isGroup: true,
      },
    ],
  };
};

export const HosCarrierNotice = {
  type: InputType.MULTI,
  label: "Notice",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_AREA,
      name: CarrierField.SETTINGS.NOTES,
      label: "Notice",
      rules: [],
      placeholder: "Notice",
      hasFeedback: true,
      title: " ",
      span: 24,
      width: "100%",
      styles: { height: "60px" },
    },
  ],
};
