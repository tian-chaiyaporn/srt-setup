import React, { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import {
  Container,
  HeaderContainer,
  HeaderIcon,
  BodyContainer,
  Footer,
  EyeIcon,
  Title,
  borderButtomColorDefault,
  borderColorIsErrorPassword,
  borderColorOnWrite,
  borderButtomWidthDefault
} from "./style_input";
const { LINEAR, NAVY, DUST, SOFT_RED } = colors;
const blueKeyIcon = "../../../static/key.png";
const blackKeyIcon = "../../../static/back_key.png";
const closeEyeBlue = "../../../static/close_eye_blue.png";
const openEyeGray = "../../../static/eye_light_gray.png";
const personBlue = "../../../static/person_blue.png";
export const InputCustom = ({
  onChangeText = () => {},
  value = "",
  isError = false,
  errorMessage = "",
  disable = true,
  title = "",
  width = 30,
  height = 15
}) => {
  const [isErrorStatus, setIsErrorStatus] = useState(isError);
  const [isFocused, setIsFocused] = useState(false);
	const [isEye, setEye] = useState(true);
	
	useEffect(() => {
		isError && setIsErrorStatus(true)
	}, [isError])

  function onFocus() {
    setIsFocused(true);
    setIsErrorStatus(false);
  }

  function getBottomBorderWidth() {
    if (isErrorStatus) {
      return borderColorIsErrorPassword;
    } else if (isFocused) {
      return borderColorOnWrite;
    } else {
      return borderButtomWidthDefault;
    }
	}

  function getIconKey() {
    if (isErrorStatus) {
      //IMPORT ICON KEY RED
      return require(blackKeyIcon);
    } else if (isFocused || value) {
      return require(blueKeyIcon);
    } else {
      return require(blackKeyIcon);
    }
	}

  function getIconPerson() {
    if (isErrorStatus) {
      //IMPORT ICON KEY RED
      return require(personBlue);
    } else if (isFocused || value) {
      return require(personBlue);
    } else {
      return require(personBlue);
    }
	}

  function getBottomBorderColor() {
    if (isErrorStatus) {
      return borderColorIsErrorPassword;
    } else if (isFocused) {
      return borderColorOnWrite;
    } else {
      return borderButtomColorDefault;
    }
	}

  function getTextColor() {
    if (isErrorStatus) {
      return SOFT_RED;
    } else if (isFocused || value) {
      return LINEAR;
    } else {
      return NAVY;
    }
	}

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <HeaderContainer>
        <HeaderIcon
          source={title === "Username" ? getIconPerson() : getIconKey()}
          width={width}
          height={height}
        />
        <Title value={value} textColor={getTextColor()}>
          {title}
        </Title>
      </HeaderContainer>
      <BodyContainer
        borderButtomWidth={getBottomBorderWidth()}
        borderButtomColor={getBottomBorderColor()}
      >
        <TextInput
          value={value}
          style={{ flex: 1, paddingLeft: 6, fontSize: 18 }}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => onFocus()}
          onEndEditing={() => setIsFocused(false)}
          editable={disable}
          secureTextEntry={isEye && title === "Password" ? true : false}
        />
        {title === "Password" ? (
          <TouchableOpacity
            onPress={() => {
              setEye(!isEye);
            }}
          >
            <EyeIcon
              source={isEye ? require(openEyeGray) : require(closeEyeBlue)}
            />
          </TouchableOpacity>
        ) : null}
      </BodyContainer>
      <Footer>{isErrorStatus ? errorMessage : ""}</Footer>
    </View>
  );
};
