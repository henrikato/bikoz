import React, { useRef } from 'react';
import { Button, Divider, List } from 'react-native-paper';
import Container from 'components/Container';
import { Title } from 'native-base';
import ListItem from 'components/ListItem';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import FormInput from 'components/FormInput';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation();

  const { servicoOferecido, experienciaAnterior, observacao } = useSelector(({login}) => login.usuario.perfilUsuario)
  
  const _form = useRef(null);

  function handleSubmit(data) {

  }
  
  return (
    <KeyboardAvoidingView style={{flexGrow: 1, backgroundColor: Constants.manifest.backgroundColor}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView style={{flexGrow: 1}}>
        <Container>
          <Title>Editar meu currículo</Title>
      
          <Form ref={_form} onSubmit={handleSubmit}>
            <List.Section>
              <ListItem 
                title="Serviços oferecidos" 
                description="Informe aqui quais os serviços que você oferece ou é capacitado" />
                <FormInput name="servicoOferecido" defaultValue={servicoOferecido} multiline numberOfLines={5} style={{maxHeight: 200}} />
              <Divider />

              <ListItem 
                title="Experiências anteriores" 
                description="Informe aqui suas experiências prévias em outros empregos ou serviços" />
                <FormInput name="experienciaAnterior" defaultValue={experienciaAnterior} multiline numberOfLines={5} style={{maxHeight: 200}} />
              <Divider />
              
              <ListItem 
                title="Informações adicionais" 
                description="Insira outras informações que gostaria de adicionar ao seu currículo (ex: conhecimento de outros idiomas)" />
                <FormInput name="informacaoAdicional" defaultValue={observacao} multiline numberOfLines={5} style={{maxHeight: 200}} />
            </List.Section>

            <Button mode="contained">Salvar</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}