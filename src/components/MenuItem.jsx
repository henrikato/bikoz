import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default ({label, labelStyle, children, ...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <View style={{maxWidth: 270}}>
      <Text style={[styles.buttonLabel, labelStyle]}>{label}</Text>
      {children ? <Text>{children}</Text> : <></>}
    </View>
    <FontAwesomeIcon icon="chevron-right" color={labelStyle ? labelStyle.color : Constants.manifest.primaryColor} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonLabel: {
    color: Constants.manifest.primaryColor
  }
})