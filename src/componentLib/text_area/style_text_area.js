import styled from "styled-components";
import {
  SubheaderRegularThai,
  BodyRegularThai
} from "../../constants/textStyles";
import { colors } from "../../constants/colors";
const { DUST, SOFT_RED, DARK_TEAL } = colors;
export const Container = styled.View`
  display: flex;
  width: 100%;
`;
export const HeaderContainer = styled.View`
  margin-bottom: 11px;
`;
export const FooterContainer = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;
export const Area = styled.TextInput`
  width: 100%;
  height: 120px;
  text-align-vertical: top;
  padding-horizontal: 10px;
  ${SubheaderRegularThai};
  background: ${props => props.background};
  border: 1px solid ${DUST};
  border-radius: 6px;
`;
export const Title = styled.Text`
  ${BodyRegularThai}
  color : ${SOFT_RED};
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 50px;
`;
export const TitleHeader = styled.Text`
  ${SubheaderRegularThai};
  color: ${DARK_TEAL};
`;
export const IconNotificationError = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  margin-top: 10px;
`;
