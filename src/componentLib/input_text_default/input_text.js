import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import {
	BodyRegularThai,
	CaptionRegularThai,
  SubheaderRegularThai,
} from "../../constants/textStyles";
const {
  LIGHT_BLUE,
  LINEAR,
  DUST,
  WHITE,
  SOFT_RED,
  DARK_TEAL,
  GREY_BLUE
} = colors;
const notificationError = "../../../static/notification_error.png";

export const InputText = ({
  onChangeText = () => {},
  value = "",
  disable = false,
  isError = false,
  errorMessage = "",
  placeholder=""
}) => {
  const [isFocused, setIsFocused] = useState(false);
	const [errorStatus, setErrorStatus] = useState(isError);
	
	useEffect(() => {
		isError && setErrorStatus(true)
	}, [isError])

  function onFocus() {
    setIsFocused(true);
    setErrorStatus(false);
  }
  function borderColor() {
    if (errorStatus) {
      return SOFT_RED;
    } else if (isFocused) {
      return LINEAR;
    } else return DUST;
  }
  function borderWidth() {
    return isFocused || errorStatus ? 2 : 1;
  }
  function backgroundColor() {
    if (isFocused) {
      return WHITE;
    } else if (value) {
      return WHITE;
    } else {
      return LIGHT_BLUE;
    }
  }
  function getIconNotification() {
    return errorStatus ? require(notificationError) : null;
  }
  function getPlaceholder() {
    return (
      <Placeholder
        positionTop={value ? "10" : "20"}
				fontStyle={isFocused || value ? CaptionRegularThai : SubheaderRegularThai}
        textColor={isFocused || value ? GREY_BLUE : DARK_TEAL}
      >
        {placeholder}
      </Placeholder>
    );
  }
  return (
    <Container>
      {isFocused ? null : getPlaceholder()}
      <View>
        <InputCustom
          textAlignVertical={isFocused ? "center" : "bottom"}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => onFocus()}
          onEndEditing={() => setIsFocused(false)}
          borderColor={borderColor()}
          borderWidth={borderWidth()}
          backgroundColor={backgroundColor()}
          editable={!disable}
        />
      </View>

      <SubContainer>
				{
					errorStatus
						? <IconNotificationError source={getIconNotification()} />
						: null
				}
				{
					errorStatus
						? <SubTitle>{errorMessage}</SubTitle>
						: null
				}
      </SubContainer>
    </Container>
  );
};

export const SubContainer = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;

// background-color: ${props => props.backgroundColor};
// padding-top:24px;
export const InputCustom = styled.TextInput`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 8px;
  padding-left: 20px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: ${props => props.borderWidth}px;
  background-color: ${props => props.backgroundColor};
  ${SubheaderRegularThai};
`;
export const Placeholder = styled.Text`
  ${props => props.fontStyle};
  color:${props => props.textColor}
  position: absolute;
  z-index: 1px;
  left: 20px;
  top:${props => props.positionTop}px;
`;
// margin-vertical: 16px;
// top: ${props => props.positionTop}px;
export const ContainerPlaceholder = styled.View`margin-top: 0px`;
export const SubTitle = styled.Text`
  ${BodyRegularThai}
  color : ${SOFT_RED};
  margin-left: 20px;
  margin-top: 10px;
`;
export const Container = styled.View`
  width: 100%;
  display: flex;
`;
export const IconNotificationError = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 20px;
  margin-top: 10px;
`;
