import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator initialRouteName="home">
    <Screen name="home" component={Home} />
  </Navigator>
);