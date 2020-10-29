import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default ({source, style, ...props}) => (
  <View {...style}>
    <Image source={source} style={styles.image} resizeMode="contain" {...props} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});