import React from "react";
import { ButtonOnePress } from "../button_onePress/button_onePress";
const buttonSaveWhite = "../../../../static/button_save_white.png";
export const ButtonSave = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false
}) => {
  return (
    <ButtonOnePress
      onPress={onPress}
      icon={require(buttonSaveWhite)}
      onWhiteBackground={onWhiteBackground}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </ButtonOnePress>
  );
};
