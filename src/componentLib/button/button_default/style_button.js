import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { HeaderRegular } from "../../../constants/textStyles";
const { GREY_BLUE } = colors;

export const ButtonContainer = styled.TouchableHighlight`
  width: 100%;
  padding: 12px;
  border-radius: 28px;
  justify-content: center;
  align-items: stretch;
  background-color: ${props => props.overrideDefaultColor || GREY_BLUE};
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => props.textColor};
  ${HeaderRegular}
	font-size: 18px;
  font-family: 'NotoSansThaiUI-Regular';
  line-height: 21px;
`;
