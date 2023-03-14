import { TextInputV2 } from "./InputTextV2";
import { InputSelectV2 } from "./InputSelect";
import { InputSelectUploadV2 } from "./InputSelectUploadV2";
import { InputRadioV2 } from "./InputRadio";
import { InputCheckboxGroupV2 } from "./InputCheckbox";
import { InputAdressV2 } from "./InputAdress";
import { InputAddDynamic } from "./InputAddDynamic";
import { InputType } from "../../../constants/inputs";
import { InputAdress } from "../inputs/InputAdress";
import { InputImageUploadV2 } from "./InputImageUpload";
import { TextInputPassword } from "./InputPassword";
import { InputTextArea } from "./InputTextArea";
import { InputFetchCarrierSelectV2 } from "./InputFetchCarrierSelect";
import { InputTimePickerV2 } from "./InputTimePicker";

export const CommonInputV2 = (props: any) => {
  const { type } = props;
  switch (type) {
    case InputType.FETCH_CARRIER_SELECT:
      return <InputFetchCarrierSelectV2 {...props} />;
    case InputType.TEXT_AREA:
      return <InputTextArea {...props} />;
    case InputType.UPLOAD_V2:
      return <InputImageUploadV2 {...props} />;
    case InputType.PASSWORD:
      return <TextInputPassword {...props} />;
    case InputType.TEXT_V2:
      return <TextInputV2 {...props} />;
    case InputType.ADD_DYNAMIC:
      return <InputAddDynamic {...props} />;
    case InputType.ADDRESS_V2:
      return <InputAdressV2 {...props} />;
    case InputType.ADDRESS:
      return <InputAdress {...props} />;
    case InputType.SELECT_V2:
      return <InputSelectV2 {...props} />;
    case InputType.RADIO_V2:
      return <InputRadioV2 {...props} />;
    case InputType.CHECKBOX_V2:
      return <InputCheckboxGroupV2 {...props} />;
    case InputType.TIME_PICKER:
      return <InputTimePickerV2 {...props} />;
    default:
      return null;
  }
};

export {
  TextInputV2,
  InputSelectV2,
  InputSelectUploadV2,
  InputRadioV2,
  InputCheckboxGroupV2,
  InputAdressV2,
};
