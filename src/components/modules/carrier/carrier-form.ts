import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";
import { carrierStatusOptions, CarrierField } from "./constant";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC } = VALIDATION_TYPE;

export const carrierForm = [
  {
    type: InputType.PAGE_TITLE,
    fields: ["Carriers", "Details"],
  },
  {
    type: InputType.ADD_DYNAMIC,
    name: "terminals",
    fields: [
      {
        type: InputType.MULTI,
        label: "Name & Details",
        isRequired: true,
        fields: [
          {
            type: InputType.TEXT_V2,
            name: CarrierField.NAME,
            label: "Name",
            rules: [
              validate("", VALIDATION_TYPE.ALPHABETICAL),
              getValidation(REQUIRED, "name"),
            ],
            placeholder: "Name",
            hasFeedback: true,
            title: "Name*",
            span: 12,
            width: "95%",
          },
          {
            type: InputType.TEXT_V2,
            name: CarrierField.DOT,
            rules: [
              validate("", NUMERIC),
              getValidation(REQUIRED, "DOT Number"),
            ],
            placeholder: "USDOT",
            hasFeedback: true,
            span: 12,
            width: "100%",
            title: "USDOT*",
          },
          {
            type: InputType.SELECT_V2,
            name: CarrierField.ACTIVE,
            title: "Status*",
            rules: [getValidation(REQUIRED, "Status")],
            placeholder: "Carrier Status",
            options: carrierStatusOptions,
            hasFeedback: true,
            span: 12,
            width: "95%",
          },
        ],
      },
    ],
  },

  {
    type: InputType.TITLE,
    label: "General",
  },

  // {
  //   type: InputType.MULTI,
  //   label: "Name & Details",
  //   isRequired: true,
  //   fields: [
  //     {
  //       type: InputType.TEXT_V2,
  //       name: CarrierField.NAME,
  //       label: "Name",
  //       rules: [
  //         validate("", VALIDATION_TYPE.ALPHABETICAL),
  //         getValidation(REQUIRED, "name"),
  //       ],
  //       placeholder: "Name",
  //       hasFeedback: true,
  //       title: "Name*",
  //       span: 12,
  //       width: "95%",
  //     },
  //     {
  //       type: InputType.TEXT_V2,
  //       name: CarrierField.DOT,
  //       rules: [validate("", NUMERIC), getValidation(REQUIRED, "DOT Number")],
  //       placeholder: "USDOT",
  //       hasFeedback: true,
  //       span: 12,
  //       width: "100%",
  //       title: "USDOT*",
  //     },
  //     {
  //       type: InputType.SELECT_V2,
  //       name: CarrierField.ACTIVE,
  //       title: "Status*",
  //       rules: [getValidation(REQUIRED, "Status")],
  //       placeholder: "Carrier Status",
  //       options: carrierStatusOptions,
  //       hasFeedback: true,
  //       span: 12,
  //       width: "95%",
  //     },
  //   ],
  // },
  // {
  //   type: InputType.TEXT,
  //   name: CarrierField.NAME,
  //   label: "Carrier Name",
  //   rules: [
  //     validate("", VALIDATION_TYPE.ALPHABETICAL),
  //     getValidation(REQUIRED, "name"),
  //   ],
  //   placeholder: "Carrier Name",
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.TEXT,
  //   name: "id",
  //   label: "Carrier ID",
  //   rules: [],
  //   placeholder: "Carrier ID",
  //   hasFeedback: true,
  //   disabled: true,
  // },
  // {
  //   type: InputType.TEXT,
  //   name: CarrierField.DOT,
  //   label: "DOT Number",
  //   rules: [validate("", NUMERIC), getValidation(REQUIRED, "DOT Number")],
  //   placeholder: "DOT Number",
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.SELECT,
  //   name: CarrierField.ACTIVE,
  //   label: "Carrier Status",
  //   rules: [getValidation(REQUIRED, "DOT Number")],
  //   placeholder: "Carrier Status",
  //   options: carrierStatusOptions,
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.ADDRESS,
  //   name: "address",
  //   label: "Carrier Address",
  //   rules: [],
  //   placeholder: "Carrier",
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.TEXT,
  //   name: CarrierField.PHONE,
  //   label: "Carrier Phone Number",
  //   rules: [validate("", NUMERIC), getValidation(REQUIRED, "")],
  //   placeholder: "Carrier Phone Number",
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.TEXT,
  //   name: CarrierField.PERSON,
  //   label: "Carrier Contact Person",
  //   rules: [validate("", ALPHABETICAL), getValidation(REQUIRED, "")],
  //   placeholder: "Carrier Contact Person",
  //   hasFeedback: true,
  // },
  // {
  //   type: InputType.SELECT,
  //   name: CarrierField.PERSON,
  //   label: "Carrier Contact Person",
  //   rules: [validate("", ALPHABETICAL), getValidation(REQUIRED, "")],
  //   placeholder: "Carrier Contact Person",
  //   hasFeedback: true,
  // },
];

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
