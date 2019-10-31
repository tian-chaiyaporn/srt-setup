import React, { useState, useEffect } from "react";
import { colors } from "../../constants/colors";
import { TouchableOpacity, View, Modal } from "react-native";
import { Calendar } from "react-native-calendars";
import {
  Container,
  ContainerModal,
  SubContainer,
  SubContainerIcon,
  SubContainerModal,
  SubContainerTitle,
  SubText,
  FooterModal,
  HeaderText,
  Title,
  Icon
} from "./style_calendar";
const { WHITE, NAVY, DUST, LIGHT_BLUE, DARK_TEAL, LINEAR } = colors;
const calendarBLue = "../../../static/calendar_blue.png";
const calendarGray = "../../../static/calendar_light_gray.png";
export const Calendars = ({
  header = "",
  disabled = false,
  error = false,
  zIndex = 1,
  onConfirm = () => {},
  value = "",
  extraStyle = {}
}) => {
  useEffect(() => {
    !value && setSelectDay("");
  }, [value]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectDay, setSelectDay] = useState();
  function getHeaderAfterSelectDay() {
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
  function onSubmit(day) {
    onConfirm(day);
    setIsOpen(false);
  }
  function onCancle() {
    setIsOpen(false);
    setSelectDay("");
  }
  return (
    <Container
      style={extraStyle}
      backgroundColor={isOpen || isSelectDay ? WHITE : LIGHT_BLUE}
      borderColor={isOpen ? LINEAR : DUST}
      zIndex={zIndex}
    >
      <TouchableOpacity disabled={disabled} onPress={() => setIsOpen(!isOpen)}>
        {isSelectDay || value ? getHeaderAfterSelectDay() : null}
        <SubContainer>
          <SubContainerTitle>
            <Title
              textColor={isSelectDay ? NAVY : DARK_TEAL}
              position={isSelectDay && header ? "absolute" : "relative"}
            >
              {isSelectDay || value ? `${value.day}-${value.month}-${value.year}`: header}
            </Title>
          </SubContainerTitle>
          <SubContainerIcon>
            <Icon
              source={isOpen ? require(calendarBLue) : require(calendarGray)}
            />
          </SubContainerIcon>
        </SubContainer>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={() => {
          () => setIsOpen(!isOpen);
        }}
      >
        <ContainerModal>
          <SubContainerModal>
            <Calendar // Callback which gets executed when visible months change in scroll view. Default = undefined
              onDayPress={day => {
                setSelectDay(day);
              }}
              markedDates={{
                [isSelectDay ? isSelectDay.dateString : ""]: {
                  selected: true,
                  selectedColor: LINEAR
                }
              }}
              minDate={new Date()}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={12}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
            />
            <FooterModal>
              <TouchableOpacity
                onPress={() => onSubmit(isSelectDay)}
                style={{ marginHorizontal: 10 }}
              >
                <SubText>ยืนยัน</SubText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onCancle()}
                style={{ marginHorizontal: 10 }}
              >
                <SubText>ยกเลิก</SubText>
              </TouchableOpacity>
            </FooterModal>
          </SubContainerModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};
