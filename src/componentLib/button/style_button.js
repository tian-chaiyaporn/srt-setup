import { SubheaderRegularThai } from "../../constants/textStyles";
import styled from "styled-components";
const width = 35;
const height = width;

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
`;
export const ButtonContainer = styled.TouchableHighlight`
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.backgroudColor};
`;

export const Text = styled.Text`
  ${SubheaderRegularThai}
  color : ${props => props.textColor};
  margin-right:15px;
  `;
export const Icon = styled.Image`
  height: ${height}px;
  width: ${width}px;
  margin-top: 2px;
  margin-left: 15px;
`;
