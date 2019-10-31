import React from "react";
import { ButtonDouble } from "../button_doublePress/button_double";
const buttonNext = "../../../../static/button_next_white.png";
export const ButtonNext = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false
}) => {
  return (
    <ButtonDouble
      onWhiteBackground={onWhiteBackground}
      isLoading={isLoading}
      disabled={disabled}
      onPress={onPress}
      icon={require(buttonNext)}
    >
      {children}
    </ButtonDouble>
  );
};
