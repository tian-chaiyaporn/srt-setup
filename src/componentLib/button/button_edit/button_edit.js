import { ButtonOnePress } from "../button_onePress/button_onePress";
import React from "react";
const buttonEditWhite = "../../../../static/button_edit_white.png";
export const ButtonEdit = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false
}) => {
  return (
    <ButtonOnePress
      onPress={onPress}
      icon={require(buttonEditWhite)}
      onWhiteBackground={onWhiteBackground}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </ButtonOnePress>
  );
};
