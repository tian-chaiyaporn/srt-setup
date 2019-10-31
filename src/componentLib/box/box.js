import React from "react";
import { colors } from "../../constants/colors";
import { Container, Box, Title } from "./style_box";
const { SOFT_GREEN } = colors;
export const Boxs = ({
  backgroundColor = SOFT_GREEN,
  height = 40,
  title = "",
  widht = 120,
  fontSize = 16
}) => {
  return (
    <Container>
      <Box backgroundColor={backgroundColor} height={height} width={widht}>
        <Title fontSize={fontSize}>{title}</Title>
      </Box>
    </Container>
  );
};
