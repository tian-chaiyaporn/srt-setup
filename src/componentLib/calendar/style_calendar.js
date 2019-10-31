import {
  SubheaderRegular,
  CaptionBold,
  BodyRegularThai
} from "../../constants/textStyles";
import { colors } from "../../constants/colors";
import styled from "styled-components";
const { WHITE, GREY_BLUE, LINEAR } = colors;

export const Container = styled.View`
  z-index: ${props => props.zIndex || 50};
  position: relative;
  flex-direction: column;
  display: flex;
  background: ${props => props.backgroundColor};
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: 1px;
  justify-content: center;
  height: 50px;
`;
export const ContainerModal = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 52, 52, 1);
`;
export const FooterModal = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-vertical: 10;
  margin-right: 10;
`;
export const SubContainerTitle = styled.View`
  margin-left: 18px;
`;
export const SubContainerIcon = styled.View`
  margin-right: 8px;
`;
export const SubContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const SubContainerModal = styled.View`
  width: 90%;
  background-color: ${LINEAR};
  z-index: 50;
`;
export const Title = styled.Text`
  ${SubheaderRegular}
  color: ${props => props.textColor};
  position: ${props => props.position};

`;
export const SubText = styled.Text`
  ${BodyRegularThai};
  color: ${WHITE};
`;
export const HeaderText = styled.Text`
  ${CaptionBold}
  ${GREY_BLUE}
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
