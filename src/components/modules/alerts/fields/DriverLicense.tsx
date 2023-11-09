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
} = VALIDATION_TYPE;

export const DriverLicense2 = {
  type: InputType.DRIVER_DYNAMIC_CARRIER,
  // label: "Carrier",
  isRequired: true,
};

export const DriverLicense = {
  type: InputType.MULTI,
  label: "License",
  isRequired: true,
  fields: [
    {
      type: InputType.DATE_PICKER_SINGLE,
      name: DriverField.CDL_EXPIRATION,
      title: "CDL Expiration*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "CDL Expiration",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: DriverField.CDL_STATE,
      title: "CDL Issuing State*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "CDL Issuing State",
      options: carrierData.states,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};

export const LicenseDriverFields = {
  type: InputType.MULTI,
  label: "Driver's License",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DriverField.CDL,
      label: "CDL#*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "Enter CDL#",
      hasFeedback: true,
      title: "CDL#*",
      span: 24,
      width: "100%",
    },
    {
      type: InputType.MULTI_UPLOAD,
      name: `${DriverField.DOCUMENTS}_${DocumentType.CDL}`,
      isMultiType: true,
      label: "CDL Photo*",
      rules: [],
      placeholder: "CDL Document",
      hasFeedback: true,
      title: "CDL Photo*",
      span: 24,
      width: "100%",
      fileType: `${DocumentType.CDL} Photo/Document`,
    },
    {
      type: InputType.DRIVER_DOCUMENTS_LIST,
      // name: `${DriverField.DOCUMENTS}_${DocumentType.CDL}`,
      isMultiType: true,
      label: "Saved CDL Documents",
      //   rules: [],
      placeholder: "CDL Document Saved",
      hasFeedback: true,
      title: "Saved CDL Documents",
      span: 24,
      width: "100%",
      fileType: DocumentType.CDL,
      DocsType: getDocumentByType(DocumentType.CDL),
      documentName: getDocumentNameByType(2),
    },
    {
      type: InputType.DATE_PICKER_SINGLE,
      name: DriverField.CDL_EXPIRATION,
      title: "CDL Expiration*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "CDL Expiration",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
    {
      type: InputType.SELECT_V2,
      name: DriverField.CDL_STATE,
      title: "CDL Issuing State*",
      rules: [getValidation(REQUIRED, "CDL Issuing State")],
      placeholder: "CDL Issuing State",
      options: carrierData.states.sort((a, b) => {
        if (a.value > b.value) {
          return -1;
        }
        if (a.value < b.value) {
          return 1;
        }
        return 0;
      }),
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
  ],
};
