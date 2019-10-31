import styled from "styled-components";
import { colors } from "../../constants/colors";
import { HeadlineRegularThai, BodyRegularThai } from "../../constants/textStyles";
const widthImg = 30;
const heightImg = widthImg / 2;
const borderButtomWidth = 2;
const { LINEAR, DUST, SOFT_RED } = colors;
export const borderButtomColorDefault = `border-bottom-color:${DUST};`;
export const borderButtomWidthDefault = `border-bottom-width: ${borderButtomWidth}px;`;
export const borderColorOnWrite = `border:2px solid ${LINEAR};`;
export const borderColorIsErrorPassword = `border:2px solid ${SOFT_RED};`;
export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-left: 5px;
  display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
  ${HeadlineRegularThai}
  margin-left:12px;
  justify-content: center;
  align-items: center;
  color: ${props => props.textColor};
`;

export const HeaderIcon = styled.Image`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  align-items: center;
`;

export const BodyContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  ${props => props.borderButtomColor};
  ${props => props.borderButtomWidth};
`;

export const EyeIcon = styled.Image`
  height: 16px;
  width: 20px;
  ${'' /* padding: 10px; */}
  margin-right: 5px;
`;

export const Footer = styled.Text`
  ${BodyRegularThai}
  color : ${SOFT_RED};
  margin-left: 30px;
`;
