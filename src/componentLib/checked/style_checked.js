import styled from "styled-components";
export const Container = styled.View`
  display: flex;
`;
export const Icon = styled.Image`
  width: 5px;
  height: 5px;
`;
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;
