import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Provider as PaperProvider, DefaultTheme, ActivityIndicator } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { Provider as StoreProvider } from 'react-redux';
import { Root } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'store/configureStore';

import CadastroNavigation from 'navigation/CadastroNavigation';
import MainNavigation from 'navigation/MainNavigation';
import Inicio from 'screens/Inicio';
import Login from 'screens/Login';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
  faChevronRight,
  faSearch,
  faList,
  faClipboardList,
  faInbox,
  faUser,
  faPencilAlt,
  faPlus,
  faTimes,
  faCheck,
  faCaretDown,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFacebook,
  faArrowLeft,
  faEye,
  faEyeSlash,
  faChevronRight,
  faCaretDown,
  faSearch,
  faList,
  faClipboardList,
  faInbox,
  faUser,
  faPencilAlt,
  faPlus,
  faTimes,
  faCheck,
  faPowerOff);

const { Navigator, Screen } = createStackNavigator();

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.info("o pai ta on"));
}

let { store, persistor } = configureStore();
store.subscribe(() => console.tron.log(store.getState()))

const AppTheme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: Constants.manifest.primaryColor,
    accent: Constants.manifest.primaryColor,
    backgroundColor: "#FAFAFA",
    surface: "#FAFAFA",
    text: "#222222"
  }
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator animating />}>
        <PaperProvider theme={AppTheme}>
          <Root>
            <StatusBar backgroundColor={Constants.manifest.primaryColor}/>
            <SafeAreaView style={{flexGrow: 1}}>
                <NavigationContainer>
                  <Navigator initialRouteName="inicio" screenOptions={{
                    headerBackTitleVisible: false,
                    headerTintColor: "#222222",
                    headerStyle: { backgroundColor: "#FAFAFA", shadowOpacity: 0, elevation: 0 },
                    headerLeft: ({onPress, tintColor}) => (
                      <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
                        <FontAwesomeIcon icon="arrow-left" size={20} color={tintColor} />
                      </TouchableOpacity>
                    )
                  }}>
                    <Screen name="cadastro" component={CadastroNavigation} />
                    <Screen name="main" component={MainNavigation} options={{headerShown: false}} />
                    <Screen name="inicio" component={Inicio} />
                    <Screen name="login" component={Login} />
                  </Navigator>
                </NavigationContainer>
            </SafeAreaView>
          </Root>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}