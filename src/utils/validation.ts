export const VALIDATION_RULES = {
  ALPHABETICAL: /^[a-zA-Z]*$/,
  NUMERIC: /^[0-9]*$/,
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const VALIDATION_TYPE = {
  ALPHABETICAL: "ALPHABETICAL",
  NUMERIC: "NUMERIC",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  MIN: "MIN",
  MAX: "MAX",
  REQUIRED: "REQUIRED",
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
        min: value,
        message: `Maximum ${value} characters`,
      };
    case VALIDATION_TYPE.REQUIRED:
      return {
        required: true,
        message: `This field is required`,
      };
    default:
      return {};
  }
};

export const getRegExpByType = (type: any) => {
  switch (type) {
    case VALIDATION_TYPE.ALPHABETICAL:
      return {
        pattern: VALIDATION_RULES.ALPHABETICAL,
        message: "Only alphabetical characters",
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
    default:
      return {
        pattern: VALIDATION_RULES.NUMERIC,
        message: "Wrong format",
      };
  }
};

export const validate = (name: any, rule: any): any => {
  return ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      const { pattern, message } = getRegExpByType(rule);
      if (pattern.test(value)) {
        return Promise.resolve();
      }
      return value && Promise.reject(`${message}`);
    },
  });
};
