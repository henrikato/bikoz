import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Constants from 'expo-constants';

import Curriculo from './VisualizarCurriculo';
import EditarExperiencias from './EditarExperiencias';

import logo from 'assets/logo-branco.png';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator screenOptions={{
    headerStyle: { backgroundColor: Constants.manifest.primaryColor, shadowOpacity: 0, elevation: 0 },
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 16
    },
    headerTitle: () => <Image source={logo} style={styles.headerLogo} resizeMode="contain" />,
    headerBackTitleVisible: false,
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress} style={{marginLeft: 15}}>
        <FontAwesomeIcon icon="arrow-left" size={20} color="#FAFAFA" />
      </TouchableOpacity>
    )
  }} initialRouteName="visualizarCurriculo">
    <Screen name="visualizarCurriculo" component={Curriculo} />
    <Screen name="editarExperiencias" component={EditarExperiencias} />
  </Navigator>
)

const styles = StyleSheet.create({
  headerLogo: {
    width: 100,
    marginVertical: 8,
    flexGrow: 1,
  }
})