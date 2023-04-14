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

export const MedicalCardDriverFields = {
  type: InputType.MULTI,
  label: "Medical Card",
  isRequired: true,
  fields: [
    {
      type: InputType.TEXT_V2,
      name: DriverField.MEDICAL_CARD,
      label: "MC Number*",
      rules: [getValidation(REQUIRED, "")],
      placeholder: "MC Number",
      hasFeedback: true,
      title: "MC Number*",
      span: 12,
      width: "95%",
    },
    {
      type: InputType.DATE_PICKER_SINGLE,
      name: DriverField.MEDICAL_CARD_EXPIRATION,
      title: "MC Expiration Date*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "MC Expiration Date",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "100%",
    },
    {
      type: InputType.MULTI_UPLOAD,
      name: `${DriverField.DOCUMENTS}_${DocumentType.MC}`,
      isMultiType: true,
      label: "MC Documents*",
      //   rules: [],
      placeholder: "CDL No",
      hasFeedback: true,
      title: "MC Documents*",
      span: 24,
      width: "100%",
      fileType: DocumentType.MC,
    },
    {
      type: InputType.DRIVER_DOCUMENTS_LIST,
      isMultiType: true,
      label: "Saved Documents List*",
      placeholder: "MC Document Saved",
      hasFeedback: true,
      title: "Saved MC Documents",
      span: 24,
      width: "100%",
      fileType: DocumentType.MC,
      DocsType: getDocumentByType(DocumentType.MC),
    },
  ],
};
