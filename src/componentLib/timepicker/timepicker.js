import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  TimePickerAndroid,
  TouchableOpacity,
  DatePickerIOS
} from "react-native";
import { colors } from "../../constants/colors";
import styled from "styled-components";
import {
  SubheaderRegular,
  CaptionBold,
  BodyRegularThai
} from "../../constants/textStyles";
const { WHITE, GREY_BLUE, LINEAR, NAVY, LIGHT_BLUE, DUST, DARK_TEAL } = colors;
const dropdownBlue = "../../../static/dropdown_blue.png";
const dropdownGray = "../../../static/dropdown_gray.png";
const dropdownLightGray = "../../../static/dropdown_light_gray.png";
export const Timepicker = ({
  disabled = false,
  zIndex = 1,
  extraStyle = {},
  header = "",
  value = "",
  error = "",
  onSubmit = () => {}
}) => {
  useEffect(() => {
    !value && setTime("");
  }, [value]);
  const [time, setTime] = useState();
  const [isOpen, setIsOpen] = useState(false);

  function callIconDropdown() {
    if (isOpen) {
      return require(dropdownBlue);
    } else if (disabled) {
      return require(dropdownGray);
    } else return require(dropdownLightGray);
  }
  function getHeaderAfterSelectTime() {
    return (
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 8,
          marginLeft: 18
        }}
      >
        <HeaderText>{header}</HeaderText>
      </View>
    );
  }
  function platformCheck() {
    if (Platform.OS === "android") {
      timePickerAndroid();
      setIsOpen(!isOpen);
    } else {
      timePickerIOS();
      setIsOpen(!isOpen);
    }
  }
  async function timePickerAndroid() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 12,
        minute: 0,
        is24Hour: true,
        mode: "spinner"
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const time = {
          hour: hour,
          minute: minute
        };
        setTime(time);
        setIsOpen(false);
        onSubmit(time);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }
  function timePickerIOS() {
    try {
      return (
        <View>
          <DatePickerIOS
            date={time}
            onDateChange={time => setTime(time)}
            onChange={time => onSubmit(time)}
            mode="time"
          />
        </View>
      );
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }
  return (
    <View style={extraStyle}>
      <Container
        extraStyle={extraStyle}
        backgroundColor={time || value ? WHITE : LIGHT_BLUE}
        borderColor={isOpen ? LINEAR : DUST}
        zIndex={zIndex}
      >
        <TouchableOpacity disabled={disabled} onPress={() => platformCheck()}>
          {time ? getHeaderAfterSelectTime() : null}
          <SubContainer>
            <SubContainerTitle>
              <Title
                textColor={time || value ? NAVY : DARK_TEAL}
                position={(time || value) && header ? "absolute" : "relative"}
              >
                {time || value ? `${value.hour} : ${value.minute}` : header}
              </Title>
            </SubContainerTitle>
            <SubContainerIcon>
              <Icon source={callIconDropdown()} />
            </SubContainerIcon>
          </SubContainer>
        </TouchableOpacity>
      </Container>
    </View>
  );
};
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
  width: 20px;
  height: 11px;
`;
