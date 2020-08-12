import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const { Navigator, Screen } = createDrawerNavigator();

export default () => (
  <Navigator>
    <Screen>
      <Text>Home</Text>
    </Screen>
  </Navigator>
)