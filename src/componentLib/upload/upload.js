import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { TouchableOpacity } from "react-native";
import {
  Container,
  HeaderContainer,
  HeaderFooter,
  BodyContainer,
  BodyFooter,
  FooterContainer,
  TextHeader,
  TitleFooter,
  PathName,
  Options,
  Row,
  Title,
  IconUpload,
  IconAdd,
  Icons,
  IconArrow
} from "../upload/style_upload";
import DocumentPicker from "react-native-document-picker";
const { LIGHT_BLUE, WHITE, DUST, LINEAR } = colors;
const iconUploadLightGray = "../../../static/button_clip_light_gray.png";
const iconUploadBLue = "../../../static/button_clip_blue.png";
const iconAddLightGray = "../../../static/button_add_light_gray.png";
const arrow = "../../../static/arrow.png";
const iconGoogleDrive = "../../../static/google_drive.png";
const iconPhone = "../../../static/cell_phone.png";
export const Upload = ({ title = "", onChoose = () => {} }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [fileName, setFileName] = useState("");
  function getButtonUpload() {
    if (isFocused) {
      return require(iconUploadBLue);
    } else if (fileName) {
      return require(iconUploadLightGray);
    }
    // ICON UPLOAD GRAY
    else return require(iconUploadLightGray);
  }
  async function uploadFileFromPhone() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });
      if (res.uri) {
        setFileName(res.name);
        onChoose(res);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <View>
      <Container>
        <HeaderContainer>
          <Title>{title}</Title>
        </HeaderContainer>
        <BodyContainer
          bodyBackgroundColor={fileName || isFocused ? WHITE : LIGHT_BLUE}
          borderColor={isFocused ? LINEAR : DUST}
        >
          <PathName numberOfLines={1} ellipsizeMode="tail">
            {fileName}
          </PathName>
          <TouchableOpacity
            onPress={() => setIsFocused(!isFocused)}
            style={{ position: "relative" }}
          >
            <IconUpload source={getButtonUpload()} />
          </TouchableOpacity>
        </BodyContainer>
      </Container>
      {isFocused ? (
        <FooterContainer>
          <HeaderFooter>
            <Row>
              <TouchableOpacity onPress={() => console.log("create new")}>
                <IconAdd source={require(iconAddLightGray)} />
              </TouchableOpacity>
              <TitleFooter>Create new...</TitleFooter>
            </Row>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => console.log("Test")}>
                <IconArrow source={require(arrow)} />
              </TouchableOpacity>
            </View>
          </HeaderFooter>
          <View style={{ borderBottomWidth: 1, borderBottomColor: DUST }} />
          <BodyFooter>
            <TextHeader>Add a file from...</TextHeader>
            <Options>
              <Icons source={require(iconGoogleDrive)} />
              <TitleFooter>Google Drive</TitleFooter>
            </Options>
            <TouchableOpacity
              onPress={() => {
                uploadFileFromPhone();
              }}
            >
              <Options>
                <Icons source={require(iconPhone)} />
                <TitleFooter>Your Phone</TitleFooter>
              </Options>
            </TouchableOpacity>
          </BodyFooter>
        </FooterContainer>
      ) : null}
    </View>
  );
};
