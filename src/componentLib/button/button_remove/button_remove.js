import React from "react";
import { ButtonOnePress } from "../button_onePress/button_onePress";
const buttonRemoveWhite = "../../../../static/button_remove_white.png";
export const ButtonRemove = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false
}) => {
  return (
    <ButtonOnePress
      onPress={onPress}
      icon={require(buttonRemoveWhite)}
      onWhiteBackground={onWhiteBackground}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </ButtonOnePress>
  );
};
