import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import {
  Container,
  ContainerItemDefault,
  SubContainer,
  SubContainerIcon,
  SubContainerTitle,
  Option,
  Title,
  Icon,
  HeaderText,
  ContainerItemHeightMoreThanNinetyFive
} from "./style_dropdown";
import { colors } from "../../constants/colors";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
const dropdownBlue = "../../../static/dropdown_blue.png";
const dropdownGray = "../../../static/dropdown_gray.png";
const dropdownLightGray = "../../../static/dropdown_light_gray.png";
const {
  WHITE,
  DUST,
  NAVY,
  LINEAR,
  SOFT_RED,
  LIGHT_BLUE,
  DARK_TEAL,
  DARK_WHITE
} = colors;
const { height } = Dimensions.get("window");

export const Dropdown = ({
  header = "",
  disabled = false,
  options = [],
  error = false,
  zIndex = 1,
  extraStyle = {},
  onChangeText = () => {},
  value = "",
  heightSceen = height
}) => {
  const view = {
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0
  };
  const [isOpen, setIsOpen] = useState(false);
  const [getOptionSelect, setGetOptionSelect] = useState();
  const [ref, setRef] = useState();
  const [layOut, setLayOut] = useState(view);
  useEffect(() => {
    !value && setGetOptionSelect("");
  }, [value]);

  function callIconDropdown() {
    if (isOpen) {
      return require(dropdownBlue);
    } else if (disabled) {
      return require(dropdownGray);
    } else return require(dropdownLightGray);
  }
  function getBackgroundColor(params) {
    if (isOpen) {
      return DARK_WHITE;
    } else if (value) {
      return WHITE;
    } else return LIGHT_BLUE;
  }
  function getWidthItem() {
    if (isOpen && options.length > 2) {
      return 120;
    } else if (isOpen && options.length === 2) {
      return 80;
    } else return 50;
  }
  function getBorderColor() {
    if (error) {
      return SOFT_RED;
    } else if (isOpen) {
      return LINEAR;
    } else return DUST;
  }
  function optionSelect(item) {
    if (item) {
      item.onPress();
      setGetOptionSelect(item.detail);
      onChangeText(item.detail);
      setIsOpen(!isOpen);
    }
  }
  function listOption() {
    return (
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => optionSelect(item)}
            underlayColor={LINEAR}
          >
            <Option>{item.detail}</Option>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  function callDropdown() {
    const percent = calculatePercent();
    if (percent >= 95) {
      return (
        <ContainerItemHeightMoreThanNinetyFive
          zIndex={zIndex}
          borderColor={getBorderColor()}
          height={getWidthItem()}
        >
          {listOption()}
        </ContainerItemHeightMoreThanNinetyFive>
      );
    } else {
      return (
        <ContainerItemDefault
          zIndex={zIndex}
          borderColor={getBorderColor()}
          height={getWidthItem()}
        >
          {listOption()}
        </ContainerItemDefault>
      );
    }
  }
  function calculatePercent() {
    const percentHeight = (layOut.y / heightSceen) * 100;
    const floor = Math.floor(percentHeight);
    return floor;
  }
  function getHeader() {
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

  return (
    <View
      style={extraStyle}
      ref={ref => {
        setRef(ref);
      }}
      onLayout={({ nativeEvent }) => {
        if (ref) {
          ref.measureInWindow((x, y, width, height) => {
            setLayOut({ width, height, x, y });
          });
        }
      }}
    >
      <Container
        borderColor={getBorderColor()}
        backgroundColor={getBackgroundColor()}
        zIndex={zIndex}
      >
        <TouchableOpacity
          disabled={disabled}
          onPress={() => setIsOpen(!isOpen)}
        >
          {getOptionSelect ? getHeader() : null}
          <SubContainer>
            <SubContainerTitle>
              <Title
                position={getOptionSelect && header ? "absolute" : "relative"}
                textColor={getOptionSelect ? NAVY : DARK_TEAL}
              >
                {getOptionSelect ? value : header}
              </Title>
            </SubContainerTitle>
            <SubContainerIcon>
              <Icon source={callIconDropdown()} />
            </SubContainerIcon>
          </SubContainer>
        </TouchableOpacity>
      </Container>
      {isOpen ? callDropdown() : null}
    </View>
  );
};
