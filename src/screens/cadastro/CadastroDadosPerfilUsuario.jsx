import React, { useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Alert, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Form } from '@unform/mobile';
import { Chip } from 'react-native-paper';
import Constants from 'expo-constants';
import Container from 'components/Container';
import FormInput from 'components/FormInput';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: "Dados profissionais" });

  const dadosUsuario = route.params.data;
  const _form = useRef(null);
  const [servicos, setServicos] = useState('');

  const _servicos = ["Garçom", "Eletricista", "Entregador", "Outro"];

  function _selecionaServico (servico) {
    let lista = servicos.split(',');
    let idx = _selected(servico);
    if(idx !== -1) {
      lista.splice(idx);
    } else {
      lista.push(servico);
    }
    setServicos(lista.join(','));
  }

  function _selected (servico) {
    let lista = servicos.split(',');
    return lista.findIndex((s) => s === servico);
  }

  function _handleSubmit(data) {
    let dados = {...dadosUsuario, data, servicosOferecidos: servicos};
    Alert.alert("Sucesso", "Cadastrado com sucessso", [
      { text: "Voltar", style: "cancel" },
      { text: "OK", style: "default", onPress: () => navigation.navigate("inicio") }
    ]);
  }

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Text style={{marginBottom: 30}}>Por fim, você preencherá dados profissionais, gostariamos de saber quais serviços você oferece, experiências anteriores, proficiência em idiomas e observações adicionais que você queira acrescentar.</Text>
          
          <Form ref={_form} onSubmit={_handleSubmit}>

            <Text style={{marginLeft: 10}}>Serviços oferecidos</Text>
            <View style={styles.listaServicos}>
              {_servicos.map((servico, idx) => {
                let selected = _selected(servico) !== -1;
                return (
                  <Chip key={String(idx)} 
                    selectedColor={Constants.manifest.primaryColor}
                    selected={selected}
                    onPress={() => _selecionaServico(servico,idx)}
                    style={styles.servico}>
                      {servico}
                  </Chip>
                )
              })}
            </View>

            <FormInput name="experienciasAnteriores" label="Experiências anteriores" helper="Informe aqui detalhes sobre experiências profissionais anteriores (ex: empacotador por 3 meses no mercado...)" />

            <FormInput name="infoAdicional" multiline style={{marginTop: 5, height: 120}} label="Informações adicionais" helper="Informe aqui outras informações que você gostaria de adicionar ao seu perfil, como proficiência em outros idiomas." />
          </Form>

          <TouchableOpacity style={styles.button} onPress={() => _form.current.submitForm()}>
            <Text style={styles.buttonLabel}>CONTINUAR</Text>
            <FontAwesomeIcon icon="chevron-right" color="#4CAF50" />
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginTop: 30,
    padding: 10,
    alignSelf: "flex-end",
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 5,
    flexDirection: "row"
  },
  buttonLabel: {
    letterSpacing: .5,
    color: "#4CAF50",
    marginRight: 5,
    fontWeight: "600"
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