import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { Circle, Container, Icon } from "./style_checked";
const { LIGHT_GREY, SOFT_GREEN, GREY_BLUE } = colors;
const check = "../../../static/check.png";
export const Checked = ({
  disabled = false,
  onPress = () => {},
  colorChecked = SOFT_GREEN,
  colorUnchecked = GREY_BLUE,
  value = ""
}) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    !value && setIsChecked(false);
  }, [value]);
  function getIcon() {
    if (isChecked) {
      return colorChecked;
    } else if (disabled) {
      return LIGHT_GREY;
    } else return colorUnchecked;
  }
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          setIsChecked(!isChecked);
          onPress(!isChecked);
        }}
        disabled={disabled}
      >
        <Circle backgroundColor={getIcon()}>
          <Icon source={require(check)} />
        </Circle>
      </TouchableOpacity>
    </Container>
  );
};
