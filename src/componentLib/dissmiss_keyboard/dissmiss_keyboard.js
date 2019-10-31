import React from "react";
import { TouchableWithoutFeedback ,Keyboard} from "react-native";
export const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
