import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({children, style, ...props}) => (
  <Text style={[styles.header, style]} {...props}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  }
})