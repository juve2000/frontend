import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";
import { carrierStatusOptions, CarrierField } from "./constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC } = VALIDATION_TYPE;

export const userForm = [
  {
    type: InputType.TEXT,
    name: CarrierField.NAME,
    label: "Carrier Name",
    rules: [
      validate("", VALIDATION_TYPE.ALPHABETICAL),
      getValidation(REQUIRED, "name"),
    ],
    placeholder: "Carrier Name",
    hasFeedback: true,
  },
  {
    type: InputType.TEXT,
    name: "id",
    label: "Carrier ID",
    rules: [],
    placeholder: "Carrier ID",
    hasFeedback: true,
    disabled: true,
  },
  {
    type: InputType.TEXT,
    name: CarrierField.DOT,
    label: "DOT Number",
    rules: [validate("", NUMERIC), getValidation(REQUIRED, "DOT Number")],
    placeholder: "DOT Number",
    hasFeedback: true,
  },
  {
    type: InputType.SELECT,
    name: CarrierField.ACTIVE,
    label: "Carrier Status",
    rules: [getValidation(REQUIRED, "DOT Number")],
    placeholder: "Carrier Status",
    options: carrierStatusOptions,
    hasFeedback: true,
  },
  {
    type: InputType.ADDRESS,
    name: "address",
    label: "Carrier Address",
    rules: [],
    placeholder: "Carrier",
    hasFeedback: true,
  },
  {
    type: InputType.TEXT,
    name: CarrierField.PHONE,
    label: "Carrier Phone Number",
    rules: [validate("", NUMERIC), getValidation(REQUIRED, "")],
    placeholder: "Carrier Phone Number",
    hasFeedback: true,
  },
  {
    type: InputType.TEXT,
    name: CarrierField.PERSON,
    label: "Carrier Contact Person",
    rules: [validate("", ALPHABETICAL), getValidation(REQUIRED, "")],
    placeholder: "Carrier Contact Person",
    hasFeedback: true,
  },
  {
    type: InputType.SELECT,
    name: CarrierField.PERSON,
    label: "Carrier Contact Person",
    rules: [validate("", ALPHABETICAL), getValidation(REQUIRED, "")],
    placeholder: "Carrier Contact Person",
    hasFeedback: true,
  },
];

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
