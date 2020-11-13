import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Alert, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Form } from '@unform/mobile';
import { Button, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { cadastrar } from 'store/actions/usuarioActions';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FormDatePicker from 'components/FormDatePicker';

const _observacaoUsuario = "Informe aqui outras informações que você gostaria de adicionar ao seu perfil, como proficiência em outros idiomas.";
const _observacaoEmpresa = "Informe aqui mais detalhes da sua empresa ou dos seus serviços.";

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: "Dados profissionais" });
  const dispatch = useDispatch();

  const _form = useRef(null);
  
  const usuario = useSelector(({cadastro}) => cadastro);
  function _handleSubmit(data) {
    let dados = {...usuario, perfil: data};
    dispatch(cadastrar(dados))
      .then(res => {
        console.tron.log("cadastrado", res)
        Alert.alert("Sucesso", "Cadastrado com sucessso", [
          { text: "Voltar", style: "cancel" },
          { text: "OK", style: "default", onPress: () => navigation.navigate("inicio") }
        ]);
      })
      .catch(err => console.tron.log("erro cadastro", err));
  }

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Text style={{marginBottom: 30}}>Por fim, você preencherá dados profissionais, gostariamos de saber quais serviços você oferece, experiências anteriores, proficiência em idiomas e observações adicionais que você queira acrescentar.</Text>
          
          <Form ref={_form} onSubmit={_handleSubmit}>

            {usuario.tipoConta != 1 ? <>
              <FormInput name="servicoOferecido" 
                label="Serviços oferecidos" 
                helper="Informe quais tipos de serviço você pode oferecer ou tem experiência (ex: Encanador, Eletricista, Garçom, Motoboy)." />
              </> : 
              <FormInput name="tipoEstabelecimento" 
                label="Tipo de Estabelecimento" 
                helper="Informe qual o tipo do seu estabelecimento ou o(s) serviço(s) que você oferece." />
            }

            {usuario.tipoConta == 0 && 
            <FormInput name="experienciaAnterior" 
            label="Experiências anteriores" 
            helper="Informe aqui detalhes sobre experiências profissionais anteriores (ex: empacotador por 3 meses no mercado...)" />}

            {usuario.tipoConta == 1 && <>
              <Text>Horário de funcionamento</Text>
              <FormDatePicker name="horaAbertura" label="Abertura" defaultValue={new Date()} />
              <FormDatePicker name="horaFechamento" label="Fechamento" defaultValue={new Date()} />
              </>
            }

            <FormInput name="observacao" 
              multiline 
              style={{marginTop: 5, height: 120}} 
              label="Informações adicionais" 
              helper={usuario.tipoConta == 0 ? _observacaoUsuario : _observacaoEmpresa} />
          </Form>

          <Button mode="outlined" color="#4CAF50" onPress={() => _form.current.submitForm()} style={styles.button}
            icon={props => <FontAwesomeIcon icon="chevron-right" {...props} />}>
            CONTINUAR
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    borderColor: "#4CAF50",
    marginTop: 20
  },
  listaServicos: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  servico: {
    margin: 5
  }
});