import { InputType } from "../../../../constants/inputs";
import { getColorByCode } from "../../../../utils/utils";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../../utils/validation";

const {
  ALPHABETICAL,
  REQUIRED,
  MIN,
  MAX,
  NUMERIC,
  PASSWORD,
  EMAIL,
  NOT_EMPTY,
  NAME,
  PHONE,
} = VALIDATION_TYPE;

export const DriverFieldInput = {
  type: InputType.DRIVER_DYNAMIC,
  // label: "Carrier",
  isRequired: true,
  span: 12,
  width: "100%",
};

export const CarrierFieldInput = {
  type: InputType.CARRIER_DYNAMIC,
  // label: "Carrier",
  isRequired: true,
  span: 12,
  width: "100%",
};

export const UnitDynamicFields = {
  type: InputType.MULTI,
  label: "Unit",
  isRequired: true,
  fields: [
    {
      type: InputType.CARRIER_DYNAMIC,
      // label: "Carrier",
      isRequired: true,
      span: 24,
      width: "100%",
    },
    {
      type: InputType.DRIVER_DYNAMIC,
      // label: "Carrier",
      isRequired: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.DEVICE_DYNAMIC,
      // label: "Carrier",
      isRequired: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.VEHICLE_DYNAMIC,
      // label: "Carrier",
      isRequired: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.TEXT_V2,
      name: "trailer",
      label: "Trailer",
      placeholder: "Trailer",
      hasFeedback: true,
      title: "Trailer",
      span: 12,
      width: "100%",
    },
  ],
};
export const UnitNotice = {
  type: InputType.MULTI,
  label: "Notice",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_AREA,
      name: "notes",
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

export const UnitColor = {
  type: InputType.RADIO_V2,
  name: "color",
  // pathName: ["settings"],
  label: "Color*",
  // rules: [getValidation(REQUIRED, "HOS Rules (Cycle Rules)")],
  placeholder: "Color",
  hasFeedback: true,
  title: "Color",
  span: 24,
  width: "10%",
  options: [0, 1, 2, 3, 4, 5, 6].map((item: any) => {
    return { key: getColorByCode(item), value: getColorByCode(item) };
  }),
};
