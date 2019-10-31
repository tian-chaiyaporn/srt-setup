import styled from "styled-components";
import { colors } from "../../constants/colors";
import {
  SubheaderRegularThai,
  CaptionRegularThai
} from "../../constants/textStyles";
const { WHITE, NAVY, GREY_BLUE } = colors;
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
  width: 100%;
  justify-content: center;
  height: 60px;
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
export const Title = styled.Text`
  ${SubheaderRegularThai}
  color: ${props => props.textColor};
  position: ${props => props.position};
`;
export const HeaderText = styled.Text`
  ${CaptionRegularThai}
  ${GREY_BLUE}
`;
export const ContainerItemHeightMoreThanNinetyFive = styled.View`
  background: ${WHITE};
  z-index: ${props => props.zIndex || 50};
  width: 100%;
  height: ${props => props.height}px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: 1px;
  position: absolute;
  bottom:55px;
  left: 0px;
  border-bottom-width: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
export const ContainerItemDefault = styled.View`
  background: ${WHITE};
  position: absolute;
  z-index: ${props => props.zIndex || 50};
  left: 0px;
  top: 55px;
  width: 100%;
  height: ${props => props.height}px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: 1px;
  border-top-width: 0px;
`;
export const Option = styled.Text`
  color: ${NAVY};
  margin-vertical: 12px;
  margin-left: 18px;
  ${SubheaderRegularThai}
`;
export const Icon = styled.Image`
  width: 20px;
  height: 11px;
`;
