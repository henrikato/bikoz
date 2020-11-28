import React from 'react';
import { Linking } from 'react-native';
import Container from 'components/Container';
import { Divider, List } from 'react-native-paper';
import ListItem, { ListIcon } from 'components/ListItem';

export default () => (
  <Container>
    <List.Section>
      <ListItem title="Avalie-nos na loja" right={props => <ListIcon {...props} />} />
      <Divider />
      <ListItem title="Sobre este aplicativo" right={props => <ListIcon {...props} />} onPress={() => Linking.openSettings()} />
    </List.Section>
  </Container>
)