import React from 'react';
import { Divider } from 'react-native-paper';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import MenuItem from 'components/MenuItem';

export default () => (
  <Container>
    <PageHeader>Editar meu currículo</PageHeader>

    <MenuItem label="Experiências">Informe aqui suas experiências prévias em outros empregos ou serviços</MenuItem>
    <Divider />

    <MenuItem label="Serviços oferecidos">Informe aqui quais os serviços que você oferece ou é capacitado</MenuItem>
    <Divider />

    <MenuItem label="Informações adicionais">Insira outras informações que gostaria de adicionar ao seu currículo (ex: conhecimento de outros idiomas)</MenuItem>
  </Container>
)