import React from "react";
import { ButtonOnePress } from "../button_onePress/button_onePress";
const buttonNext = "../../../../static/button_next_white.png";
export const ButtonNextOnePress = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false
}) => {
  return (
    <ButtonOnePress
      onPress={onPress}
      icon={require(buttonNext)}
      onWhiteBackground={onWhiteBackground}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </ButtonOnePress>
  );
};
