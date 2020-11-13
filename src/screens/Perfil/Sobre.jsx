import React from 'react';
import { Linking } from 'react-native';
import Container from 'components/Container';
import { List } from 'react-native-paper';

export default () => (
  <Container>
    <List.Section>
      <List.Item title="Avalie-nos na loja" />
      <List.Item title="Sobre este aplicativo" onPress={() => Linking.openSettings()} />
    </List.Section>
  </Container>
)