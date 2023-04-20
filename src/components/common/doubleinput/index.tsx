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
import { InputPhone } from "./InputPhone";
import { InputSelectMultiV2 } from "./InputMultiSelect";
import { CarrierDynamicField } from "../../modules/driver/fields/CarrierDynamicFields";
import { InputDriverSelecetAdress } from "../../modules/driver/fields/DriverTerminalSelect";
import { InputDatePickerSingleV2 } from "./InputDatePickerSingle";
import { InputMultiUploadV2 } from "./InputMultiUpload";
// DriverDocumentsList
import { DriverDocumentsList } from "../../modules/driver/fields/DriverDocumentsList";

// Driver group
import { CarrierDynamicDriverGroupField } from "../../modules/driver_group/fields/CarrierDynamicDriverGroupField";
// Mechanid carrier select
import { CarrierDynamicMechanicField } from "../../modules/mechanic/fields/CarrierDynamicFields";
import { InputMechanicSelecetAdress } from "../../modules/mechanic/fields/DriverTerminalSelect";
//CarrierDynamicDeviceField
import { CarrierDynamicDeviceField } from "../../modules/device/fields/CarrierDynamicFields";
//ROLE
import { InputRole } from "./InputRole";

export const CommonInputV2 = (props: any) => {
  const { type } = props;
  switch (type) {
    case InputType.DRIVER_DOCUMENTS_LIST:
      return <DriverDocumentsList {...props} />;
    case InputType.MULTI_UPLOAD:
      return <InputMultiUploadV2 {...props} />;
    case InputType.DATE_PICKER_SINGLE:
      return <InputDatePickerSingleV2 {...props} />;
    case InputType.DRIVER_DYNAMIC_CARRIER:
      return <CarrierDynamicField {...props} />;
    case InputType.PHONE:
      return <InputPhone {...props} />;
    case InputType.FETCH_CARRIER_SELECT:
      return <InputFetchCarrierSelectV2 {...props} />;
    case InputType.SELECT_MULTI:
      return <InputSelectMultiV2 {...props} />;
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
    case InputType.DRIVER_SELECT_TERMINAL:
      return <InputDriverSelecetAdress {...props} />;
    //DRIVER GROUP FIELDS
    case InputType.CARRIER_DYNAMIC_DRIVER_GROUP:
      return <CarrierDynamicDriverGroupField {...props} />;
    //MECHANIC CARRIER FIELD
    case InputType.CARRIER_DYNAMIC_MECHANIC:
      return <CarrierDynamicMechanicField {...props} />;
    case InputType.MECHANIC_SELECT_TERMINAL:
      return <InputMechanicSelecetAdress {...props} />;
    //DEVICE FIELDS
    case InputType.CARRIER_DYNAMIC_DEVICE:
      return <CarrierDynamicDeviceField {...props} />;
    //ROLE FIELD
    case InputType.INPUT_ROLE:
      return <InputRole {...props} />;
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
