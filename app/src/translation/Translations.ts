import ApiResponse from './commons/apiResponse';
import Fields from './commons/fields';
import Texts from './commons/texts';
import Buttons from './commons/buttons';
import General from './commons/general';
import Calculator from './commons/calculator';

const en = {
  ...ApiResponse.en,
  ...Fields.en,
  ...Texts.en,
  ...Buttons.en,
  ...General.en,
  ...Calculator.en,
};

const pt = {
  ...ApiResponse.pt,
  ...Fields.pt,
  ...Texts.pt,
  ...Buttons.pt,
  ...General.pt,
  ...Calculator.pt,
};

export default { en, pt };
