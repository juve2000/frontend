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
  DriverField,
  carrierData,
  DocumentType,
  getDocumentByType,
  getDocumentNameByType,
  VehicleField,
} from "../constant";

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
  VIN,
} = VALIDATION_TYPE;

export const DriverLicense2 = {
  type: InputType.DRIVER_DYNAMIC_CARRIER,
  // label: "Carrier",
  isRequired: true,
};

export const DriverLicense = {
  type: InputType.MULTI,
  // label: "Vin & License",
  // isRequired: true,
  renderLabel: false,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: VehicleField.VIN,
      label: "VIN*",
      rules: [getValidation(REQUIRED, ""), validate("", VIN)],
      placeholder: "VIN",
      hasFeedback: true,
      title: "VIN*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: VehicleField.FUEL_TYPE,
      title: "Fuel Type*",
      rules: [getValidation(REQUIRED, "Fuel type")],
      placeholder: "Fuel Type",
      options: [
        {
          key: 0,
          value: "Diesel",
        },
        {
          key: 1,
          value: "Gasoline",
        },
        {
          key: 2,
          value: "Propane",
        },
        {
          key: 3,
          value: "Liquid Natural Gas",
        },
        {
          key: 4,
          value: "Compressed Natural Gas",
        },
        {
          key: 5,
          value: "Ethanol",
        },
        {
          key: 6,
          value: "Methanol",
        },
        {
          key: 7,
          value: "E-85",
        },
        {
          key: 8,
          value: "M-85",
        },
        {
          key: 9,
          value: "A55",
        },
        {
          key: 10,
          value: "Biodiesel",
        },
        {
          key: 11,
          value: "Other",
        },
      ],
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.TEXT_V2,
      name: VehicleField.LICENSE_PLATE,
      label: "License Plate# *",
      rules: [getValidation(REQUIRED, ""), validate("", ALPHABETICAL)],
      placeholder: "License Plate",
      hasFeedback: true,
      title: "License Plate# *",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.DATE_PICKER_SINGLE,
      name: VehicleField.LICENSE_EXPIRATION,
      title: "License Plate Expiration Date*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "License Plate Expiration Date",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: VehicleField.LICENSE_ISSUING,
      title: "License Plate Issuing State*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "License Plate Issuing State",
      options: carrierData.states,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
