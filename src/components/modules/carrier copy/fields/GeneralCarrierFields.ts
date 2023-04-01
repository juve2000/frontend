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

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL, NAME } =
  VALIDATION_TYPE;

export const GeneralCarrierFields = {
  type: InputType.MULTI,
  label: "Name & Details",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: CarrierField.NAME,
      label: "Name",
      rules: [getValidation(REQUIRED, "name")],
      placeholder: "Name",
      hasFeedback: true,
      title: "Name*",
      span: 24,
      width: "100%",
    },

    {
      type: InputType.TEXT_V2,
      name: CarrierField.DOT,
      rules: [
        getValidation(MAX, 9),

        validate("", NUMERIC),
        getValidation(REQUIRED, "DOT Number"),
      ],
      placeholder: "USDOT",
      hasFeedback: true,
      span: 12,
      width: "95%",
      title: "USDOT*",
    },
    {
      type: InputType.TEXT_V2,
      name: CarrierField.MCNUMBER,
      rules: [
        validate("", NUMERIC),
        getValidation(REQUIRED, "MC Number"),
        getValidation(MAX, 9),
      ],
      placeholder: "MC",
      hasFeedback: true,
      span: 12,
      width: "100%",
      title: "MC*",
    },
    {
      type: InputType.SELECT_V2,
      name: CarrierField.STATUS,
      title: "Status*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.UPLOAD_V2,
      name: CarrierField.LOGO,
      title: "Logo*",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    // {
    //   type: InputType.FETCH_CARRIER_SELECT,
    //   name: "carrier",
    //   title: "carrier*",
    //   // rules: [getValidation(REQUIRED, "Status")],
    //   placeholder: "Carrier List",
    //   // options: carrierData.status,
    //   hasFeedback: true,
    //   span: 12,
    //   width: "95%",
    // },
  ],
};
