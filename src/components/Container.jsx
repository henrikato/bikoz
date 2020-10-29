import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({children, style, ...props}) => <View style={[styles.view, style]} {...props}>{children}</View>;


const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FAFAFA",
    alignItems: "stretch"
  }
})