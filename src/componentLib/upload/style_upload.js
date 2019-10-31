import styled from "styled-components";
import {
  SubheaderRegularThai,
  SubheaderRegularLatin
} from "../../constants/textStyles";
import { colors } from "../../constants/colors";
const { LIGHT_BLUE, DARK_TEAL, NAVY, WHITE, DUST, LINEAR } = colors;
export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 50;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  display: flex;
  margin-bottom: 5px;
`;
export const BodyContainer = styled.View`
  flex-direction: row;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bodyBackgroundColor};
  border: 1px solid ${props => props.borderColor};
  height: 70px;
`;
export const FooterContainer = styled.View`
  flex-direction: column;
  z-index: 50;
  left: 0px;
  top: 100px;
  width:100%;
  position: absolute;
  border-radius: 5px
  border: 1px solid ${DUST};
  background-color:${WHITE};
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const HeaderFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const BodyFooter = styled.View`
  padding: 15px;
`;
export const Options = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`;
export const PathName = styled.Text`
  ${SubheaderRegularThai};
  color: ${NAVY};
  align-items: center;
  width: 70%;
  margin-left: 18px;
`;
export const Title = styled.Text`
  ${SubheaderRegularThai}
  justify-content: center;
  align-items: center;
  height: 22px;
  color: ${DARK_TEAL};
`;
export const TitleFooter = styled.Text`
  color: ${NAVY};
  ${SubheaderRegularLatin};
`;
export const TextHeader = styled.Text`
  color: ${DARK_TEAL};
  ${SubheaderRegularLatin};
  margin-bottom: 12px;
`;
export const IconUpload = styled.Image`
  height: 60px;
  width: 60px;
`;
export const IconAdd = styled.Image`
  height: 30px;
  width: 30px;
  margin-horizontal: 10px;
`;

export const IconArrow = styled.Image`
  width: 5px;
  height: 10px;
`;
export const Icons = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;
