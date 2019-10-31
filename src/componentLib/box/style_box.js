import styled from "styled-components";
import {
  SubheaderRegularThai,
  HeadlineRegularThai
} from "../../constants/textStyles";
import { colors } from "../../constants/colors";
const { NAVY, WHITE } = colors;
export const Container = styled.View`
  display: flex;
`;
export const Box = styled.View`
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  ${props =>
    props.fontSize === 18 ? HeadlineRegularThai : SubheaderRegularThai}
  color:${props => (props.fontSize === 18 ? WHITE : NAVY)};
`;
