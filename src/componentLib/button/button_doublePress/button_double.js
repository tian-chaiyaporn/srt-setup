import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { ButtonContainer, Text, Container, Icon } from "../style_button";
import { colors } from "../../../constants/colors";
const { WHITE, GREY_BLUE, LINEAR, SOFT_RED, DARK_WHITE } = colors;
export const ButtonDouble = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false,
  icon = ""
}) => {
  const [count, setCount] = useState(0);
  const [textColorStatusPress, setTextColorStatusPress] = useState(false);
  function getIsLoading() {
    if (isLoading || count === 2) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator
            size="small"
            color={onWhiteBackground ? DARK_WHITE : LINEAR}
          />
        </View>
      );
    }
  }
  function onPressCustom() {
    if (count >= 0 && count < 2) {
      setCount(count + 1);
      setTextColorStatusPress(true);
    } else if (count === 2) {
      onPress();
      setCount(count - count);
    }
  }

  return (
    <ButtonContainer
      disabled={disabled}
      onPress={() => onPressCustom()}
      backgroudColor={onWhiteBackground ? GREY_BLUE : WHITE}
      underlayColor={count === 1 ? SOFT_RED : LINEAR}
      onHideUnderlay={() => setTextColorStatusPress(false)}
    >
      <Container
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 20
        }}
      >
        {count === 2 ? (
          getIsLoading()
        ) : (
          <React.Fragment>
            <Text
              textColor={
                onWhiteBackground || textColorStatusPress ? WHITE : LINEAR
              }
            >
              {children}
            </Text>
            <Icon source={icon} />
          </React.Fragment>
        )}
      </Container>
    </ButtonContainer>
  );
};
