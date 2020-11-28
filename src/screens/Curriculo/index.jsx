import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from 'components/Container';
import { Button, Divider, List } from 'react-native-paper';
import { Title } from 'native-base';
import ListItem from 'components/ListItem';
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});

  const { tipoConta, perfilUsuario } = useSelector(({login}) => login.usuario);
  
  function formatarHorarioFuncionamento () {
    return `${perfilUsuario.horaAbertura} - ${perfilUsuario.horaFechamento}`
  }

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
        <Title>{tipoConta ? 'Perfil da empresa' : 'Meu currículo'}</Title>

          <List.Section>
            <ListItem 
              title={tipoConta ? 'Tipo de estabelecimento' : 'Serviços oferecidos'} 
              description={tipoConta ? perfilUsuario.tipoEstabelecimento : perfilUsuario.servicoOferecido} />
            <Divider />

            <ListItem 
              title={tipoConta ? "Horário de funcionamento" : "Experiências anteriores"} 
              description={tipoConta ? formatarHorarioFuncionamento() : perfilUsuario.experienciaAnterior} />
            <Divider />

            <ListItem 
              title="Informações adicionais" 
              description={perfilUsuario.observacao} />
          </List.Section>

          <View style={{flexGrow: 1, justifyContent: "flex-end"}}>
            <Button mode="contained" style={{marginTop: 20}} onPress={() => navigation.navigate(tipoConta ? "editarPerfilEmpresa" : "editarCurriculo")}>EDITAR</Button>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 20
  }
})