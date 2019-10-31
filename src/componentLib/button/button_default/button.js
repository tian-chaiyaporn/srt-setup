import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { ButtonContainer, ButtonText } from "./style_button"
import { colors } from "../../../constants/colors"
const { LINEAR, WHITE } = colors

export const ButtonDefault = ({
  onPress = () => {},
  children = "",
	isLoading,
	onWhiteBackground = true,
	overrideDefaultColor = '',
}) => {
  const [getTextColor, setTextColor] = useState(false);
  function textColor() {
    if (!onWhiteBackground) {
      if (getTextColor) {
        return LINEAR;
      } else {
        return WHITE;
      }
    } else {
      return WHITE;
    }
	}
  return (
    <ButtonContainer
      underlayColor={onWhiteBackground ? LINEAR : WHITE}
      onPress={onPress}
      onShowUnderlay={() => setTextColor(true)}
      onHideUnderlay={() => setTextColor(false)}
			overrideDefaultColor={overrideDefaultColor}
    >
			{
				isLoading
					? <ActivityIndicator size="small" /> 
					: <ButtonText textColor={textColor()}>{children}</ButtonText>
			}
    </ButtonContainer>
  );
};
