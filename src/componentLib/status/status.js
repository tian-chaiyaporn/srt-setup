import React from "react";
import { colors } from "../../constants/colors";
import { Container, SubContainer, Circle, Icon ,Title } from "./style_status";
const check = "../../../static/check.png";
const checkBlue = "../../../static/check_blue.png";
const { WHITE, GREY_BLUE } = colors;
export const Status = ({
  title = "",
  color = GREY_BLUE,
  disable = false,
  direction = "row"
}) => {
  return (
    <Container>
      <SubContainer color={color} disable={disable} direction={direction}>
        <Circle backgroundColor={disable ? GREY_BLUE : WHITE}>
          <Icon source={disable ? require(check) : require(checkBlue)} />
        </Circle>
        <Title disable={disable}>{title}</Title>
      </SubContainer>
    </Container>
  );
};
