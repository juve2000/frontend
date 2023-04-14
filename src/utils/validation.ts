export const VALIDATION_RULES = {
  ALPHABETICAL: /^[a-zA-Z]*$/,
  NUMERIC: /^[0-9]*$/,
  EMAIL: /^$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
  NAME: /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,

  PHONE:
    /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
  NOT_EMPTY: /^(\w+\S+)$/,
  ALPHABETICAL_NUMBERS: /[^A-Za-z0-9]+/,
};

export const VALIDATION_TYPE = {
  ALPHABETICAL: "ALPHABETICAL",
  NUMERIC: "NUMERIC",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  MIN: "MIN",
  MAX: "MAX",
  REQUIRED: "REQUIRED",
  NAME: "NAME",
  PHONE: "PHONE",
  NOT_REQUIRED: "NOT_REQUIRED",
  NOT_EMPTY: "NOT_EMPTY",
  ALPHABETICAL_NUMBERS: "ALPHABETICAL_NUMBERS",
};

export const getValidation = (type: any, value: any) => {
  switch (type) {
    case VALIDATION_TYPE.MIN:
      return {
        min: value,
        message: `Minimum ${value} characters`,
      };

    case VALIDATION_TYPE.MAX:
      return {
        max: value,
        message: `Maximum ${value} characters`,
      };
    case VALIDATION_TYPE.REQUIRED:
      return {
        required: true,
        message: `This field is required`,
      };
    case VALIDATION_TYPE.NOT_REQUIRED:
      return {
        required: false,
        message: `This field is required`,
      };
    default:
      return null;
  }
};

export const getRegExpByType = (type: any) => {
  switch (type) {
    case VALIDATION_TYPE.ALPHABETICAL:
      return {
        pattern: VALIDATION_RULES.ALPHABETICAL,
        message: "Only alphabetical characters",
      };
    case VALIDATION_TYPE.ALPHABETICAL_NUMBERS:
      return {
        pattern: VALIDATION_RULES.ALPHABETICAL_NUMBERS,
        message: "Only numbers or alphabetical characters",
      };
    case VALIDATION_TYPE.PHONE:
      return {
        required: true,
        type: "regexp",
        pattern: VALIDATION_RULES.PHONE,
        message: "Wrong phone format",
      };
    case VALIDATION_TYPE.NAME:
      return {
        pattern: VALIDATION_RULES.NAME,
        message: `Unsupported characters`,
      };
    case VALIDATION_TYPE.NUMERIC:
      return {
        pattern: VALIDATION_RULES.NUMERIC,
        message: "Only numeric characters",
      };
    case VALIDATION_TYPE.EMAIL:
      return {
        pattern: VALIDATION_RULES.EMAIL,
        message: "Incorect email format !",
      };
    case VALIDATION_TYPE.PASSWORD:
      return {
        pattern: VALIDATION_RULES.PASSWORD,
        message: "Use at least: 8 characters, 1 uppercase letter, 1 digit !",
      };
    case VALIDATION_TYPE.NOT_EMPTY:
      return {
        pattern: VALIDATION_RULES.NOT_EMPTY,
        message: "This field is required",
      };
    default:
      return {
        pattern: VALIDATION_RULES.ALPHABETICAL,
        message: "test",
      };
  }
};

export const validate = (name: any, rule: any): any => {
  return ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      const { pattern, message, required } = getRegExpByType(rule);

      if (pattern.test(value)) {
        return Promise.resolve();
      }
      return value && Promise.reject(`${message}`);
    },
  });
};
