import React, { useState } from "react";
import {Container,HeaderContainer,FooterContainer,Title,TitleHeader,Area,IconNotificationError} from '../text_area/style_text_area'
import { colors } from "../../constants/colors";
const {  LIGHT_BLUE ,WHITE} = colors;
const notificationError = "../../../static/notification_error.png";
export const TextArea = ({
  numberOfLines = 10,
  multiline = true,
  onChangeText = () => {},
  value = "",
  disabled = false,
  isError = true,
  errorMessage = "",
  title = "รายละเอียด"
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <HeaderContainer>
        <TitleHeader>{title}</TitleHeader>
      </HeaderContainer>
      <Area
        background={isFocused ? WHITE : LIGHT_BLUE}
        onChangeText={onChangeText}
        multiline={multiline}
        value={value}
        disabled={disabled}
        numberOfLines={numberOfLines}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused ? null : (
        <FooterContainer>
          <IconNotificationError source={require(notificationError)} />
          <Title>{isError ? errorMessage : ""}</Title>
        </FooterContainer>
      )}
    </Container>
  );
};
