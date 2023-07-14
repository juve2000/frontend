import { InputType } from "../../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";

import { CarrierField, carrierData } from "../../carrier/constant";
import { OfficeField } from "./constants";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const MapSettingsOfficeFields = {
  type: InputType.MULTI,
  label: "Map Settings",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      // TODO change field name
      name: OfficeField.map_source,
      pathName: ["config"],
      label: "Map source*",
      rules: [getValidation(REQUIRED, "Measurment system")],
      placeholder: "Map source*",
      hasFeedback: true,
      title: "Map source*",
      span: 24,
      width: "100%",
      options: [{ key: 1, value: "Google" }],
    },
    {
      type: InputType.SELECT_V2,
      name: OfficeField.geodata_source,
      pathName: ["config"],
      label: "Geodata source*",
      rules: [getValidation(REQUIRED, "Geodata source*")],
      placeholder: "Geodata source*",
      hasFeedback: true,
      title: "Geodata source*",
      span: 24,
      width: "100%",
      options: [{ key: 1, value: "Google" }],
    },
  ],
};
