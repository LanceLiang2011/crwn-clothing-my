import {
  BaseButton,
  GoogleSigninButton,
  InvertedButton,
} from './Button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const buttonMap = new Map();
buttonMap.set(BUTTON_TYPE_CLASSES.base, BaseButton);
buttonMap.set(BUTTON_TYPE_CLASSES.google, GoogleSigninButton);
buttonMap.set(BUTTON_TYPE_CLASSES.inverted, InvertedButton);

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  buttonMap.get(buttonType);

const Button = ({ children, buttonType, ...rest }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;
