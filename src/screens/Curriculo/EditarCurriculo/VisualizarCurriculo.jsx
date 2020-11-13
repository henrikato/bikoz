import React from 'react';
import { Divider, List } from 'react-native-paper';
import Container from 'components/Container';
import { Title } from 'native-base';
import ListItem, { ListIcon } from 'components/ListItem';

export default () => (
  <Container>
    <Title>Editar meu currículo</Title>

    <List.Section>
      <ListItem 
        title="Experiências" 
        description="Informe aqui suas experiências prévias em outros empregos ou serviços"
        right={props => <ListIcon {...props} />} />
      <Divider />

      <ListItem 
        title="Serviços oferecidos" 
        description="Informe aqui quais os serviços que você oferece ou é capacitado"
        right={props => <ListIcon {...props} />} />
      <Divider />

      <ListItem 
        title="Informações adicionais" 
        description="Insira outras informações que gostaria de adicionar ao seu currículo (ex: conhecimento de outros idiomas)"
        right={props => <ListIcon {...props} />} />
    </List.Section>
  </Container>
)