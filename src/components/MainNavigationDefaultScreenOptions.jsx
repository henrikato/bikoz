import React from 'react';
import Constants from 'expo-constants';
import { Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import logo from 'assets/logo-branco.png';

export default ({route, navigation}) => ({
  headerStyle: { backgroundColor: Constants.manifest.primaryColor, shadowOpacity: 0, elevation: 0 },
  headerTitle: () => <Image source={logo} style={{width: 100, margin: 8, flex: 1, alignSelf: "center"}} resizeMode="contain" />,
  headerBackTitleVisible: false,
  headerLeft: ({onPress}) => (
    <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
      <FontAwesomeIcon icon="arrow-left" size={20} color="#FAFAFA" />
    </TouchableOpacity>
  )
})