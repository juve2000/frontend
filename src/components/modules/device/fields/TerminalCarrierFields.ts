import { InputType } from "../../../../constants/inputs";
import { DeviceField } from "../constant";

export const DeviceNotice = {
  type: InputType.MULTI,
  label: "Notice",
  isRequired: false,
  fields: [
    {
      type: InputType.TEXT_AREA,
      name: DeviceField.NOTES,
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

export const DeviceCarrier = {
  type: InputType.CARRIER_DYNAMIC_DEVICE,
  label: "Carrier",
  isRequired: false,
};
