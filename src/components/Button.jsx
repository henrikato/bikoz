import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Button = ({children, icon, labelStyle, style, underlayColor, ...props}) => (
  <TouchableHighlight style={[styles.btn, style]} underlayColor={underlayColor || "#CCCCCC"} {...props}>
    <View style={{flexDirection: "row", justifyContent: "center"}}>
      {icon}
      <Text style={[styles.btnText, labelStyle]}>{children}</Text>
    </View>
  </TouchableHighlight>
);

export default Button;

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Constants.manifest.primaryColor,
    alignItems: "stretch",
    justifyContent: "space-evenly"
  },
  imageWrapper: {
    flexGrow: .5,
    width: 300,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 3,
    shadowOpacity: .3,
    shadowRadius: 2,
    shadowOffset: {
      height: 2
    },
    backgroundColor: Constants.manifest.primaryColor,
  },
  btnText: {
    textAlign: "center",
    color: "#FAFAFA",
    letterSpacing: .5,
    fontWeight: "600"
  }
})