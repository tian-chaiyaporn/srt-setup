import { BodyRegularThai } from "../../constants/textStyles";
import styled from "styled-components";
import { colors } from "../../constants/colors";
const { SOFT_RED } = colors;
export const SubContainer = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;
export const InputCustom = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 12px;
  display: flex;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: ${props => props.borderWidth}px;
  background-color: ${props => props.backgroundColor};
`;
export const SubTitle = styled.Text`
  ${BodyRegularThai}
  color : ${SOFT_RED};
  margin-left: 20px;
  margin-top: 10px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const IconNotificationError = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 20px;
  margin-top: 10px;
`;
