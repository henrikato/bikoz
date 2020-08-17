import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Constants from 'expo-constants';

import Vagas from 'screens/Vagas';
import Curriculo from 'screens/Curriculo';
import Mensagens from 'screens/Mensagens';
import Perfil from 'screens/Perfil';

import EditarCurriculo from 'screens/Curriculo/EditarCurriculo';
import DadosPessoais from 'screens/Perfil/DadosPessoais';
import Preferencias from 'screens/Perfil/Preferencias';
import Sobre from 'screens/Perfil/Sobre';
import Vaga from 'screens/Vagas/Vaga';

import logo from 'assets/logo-branco.png';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator, Screen } = createStackNavigator();

const Tabs = () => (
  <TabNavigator initialRouteName="vagas"
    tabBarOptions={{
      activeBackgroundColor: Constants.manifest.primaryColor,
      inactiveBackgroundColor: Constants.manifest.primaryColor,
      activeTintColor: "#FAFAFA",
      inactiveTintColor: "#AAAAAA"
    }}>
    <TabScreen name="mensagens" component={Mensagens} options={{
      title: "Mensagens",
      tabBarIcon: ({focused, ...props}) => <FontAwesomeIcon icon="inbox" {...props} />
    }} />
    <TabScreen name="curriculo" component={Curriculo} options={{
      title: "Currículo",
      tabBarIcon: ({focused, ...props}) => <FontAwesomeIcon icon="clipboard-list" {...props} />
    }} />
    <TabScreen name="vagas" component={Vagas} options={{
      title: "Vagas",
      tabBarIcon: ({focused, ...props}) => <FontAwesomeIcon icon="list" {...props} />
    }} />
    <TabScreen name="perfil" component={Perfil} options={{
      title: "Perfil",
      tabBarIcon: ({focused, ...props}) => <FontAwesomeIcon icon="user" {...props} />
    }} />
  </TabNavigator>
);

export default () => (
  <Navigator screenOptions={{
    headerStyle: { backgroundColor: Constants.manifest.primaryColor, shadowOpacity: 0, elevation: 0 },
    headerTitle: () => <Image source={logo} style={{width: 100, margin: 8, flex: 1, alignSelf: "center"}} resizeMode="contain" />,
    headerBackTitleVisible: false,
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
        <FontAwesomeIcon icon="arrow-left" size={20} color="#FAFAFA" />
      </TouchableOpacity>
    )
  }} initialRouteName="main">
    <Screen name="main" component={Tabs} options={{headerLeft: null}} />
    <Screen name="editarCurriculo" component={EditarCurriculo} />
    <Screen name="dadosPessoais" component={DadosPessoais} />
    <Screen name="preferencias" component={Preferencias} />
    <Screen name="sobre" component={Sobre} />
    <Screen name="vaga" component={Vaga} />
  </Navigator>
)