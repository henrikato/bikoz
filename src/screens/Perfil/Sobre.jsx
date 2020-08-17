import React from 'react';
import { Text, Linking } from 'react-native';
import Container from 'components/Container';
import MenuItem from 'components/MenuItem';

export default () => (
  <Container>
    <MenuItem label="Avalie-nos na loja" />
    <MenuItem label="Sobre este aplicativo" onPress={() => Linking.openSettings()} />
  </Container>
)