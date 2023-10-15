import { InputType } from "../../../../constants/inputs";
import {
  validate,
  getValidation,
  VALIDATION_TYPE,
} from "../../../../utils/validation";
import { CompanyField } from "../constant";

const { REQUIRED, PHONE, EMAIL } = VALIDATION_TYPE;

export const LogoCompanyFields = {
  type: InputType.MULTI,
  label: "Logo",
  isRequired: true,
  fields: [
    {
      type: InputType.UPLOAD_V2,
      name: CompanyField.LOGO,
      title: "Logo",
      // rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      // options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
  ],
};
