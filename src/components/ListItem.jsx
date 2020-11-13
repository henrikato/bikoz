import { List } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default (props) => (
  <List.Item titleStyle={{color: Constants.manifest.primaryColor}} {...props} />
);

export const ListIcon = ({icon, color, style}) => (
  <View style={[{justifyContent: "center"}, style]}>
    <FontAwesomeIcon icon={icon || "chevron-right"} color={color} />
  </View>
);
