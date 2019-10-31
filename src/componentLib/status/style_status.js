import styled from "styled-components";
import { colors } from "../../constants/colors";
import { SubheaderRegularThai } from "../../constants/textStyles";
const { WHITE, GREY_BLUE, LIGHT_GREY, DUST } = colors;
export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;
export const SubContainer = styled.View`
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.disable ? LIGHT_GREY : props.color)};
  border-radius: 22px;
  border: 1px solid ${props => (props.disable ? DUST : WHITE)};
  height: 30px;
  width: 100%;
  padding-right: 17px;
  padding-left: 8px;
`;
export const Icon = styled.Image`
  width: 6px;
  height: 6px;
`;
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${props => (props.disable ? GREY_BLUE : WHITE)};
  ${SubheaderRegularThai};
`;
