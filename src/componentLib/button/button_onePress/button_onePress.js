import React, { useState } from "react";
import { ButtonContainer, Container, Icon, Text } from "../style_button";
import { colors } from "../../../constants/colors";
const { WHITE, GREY_BLUE, LINEAR, DARK_WHITE } = colors;
export const ButtonOnePress = ({
  onPress = () => {},
  children = "",
  onWhiteBackground = true,
  isLoading = false,
  disabled = false,
  icon = ""
}) => {
  const [getTextColor, setGetTextColor] = useState(false);
  function getIsLoading() {
    if (isLoading) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="small" color={DARK_WHITE} />;
        </View>
      );
    }
  }
  return (
    <ButtonContainer
      disabled={disabled}
      onPress={onPress}
      backgroudColor={onWhiteBackground ? GREY_BLUE : WHITE}
      underlayColor={LINEAR}
      onShowUnderlay={() => setGetTextColor(true)}
      onHideUnderlay={() => setGetTextColor(false)}
    >
      <Container
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 17
        }}
      >
        {isLoading ? (
          getIsLoading()
        ) : (
          <React.Fragment>
            <Text
              textColor={onWhiteBackground || getTextColor ? WHITE : LINEAR}
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
