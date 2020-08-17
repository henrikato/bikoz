import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Form } from '@unform/mobile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as yup from 'yup';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FormPicker from 'components/FormPicker';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: "Dados de endereço" });

  const _cidades = [
    {id: "Marília", value: "Marília"},
    {id: "Bauru", value: "Bauru"},
    {id: "São Paulo", value: "São Paulo"}];
  const _estados = [{id: "SP", value: "SP"}];

  const dadosUsuario = route.params.data;
  const _form = useRef(null);

  function _validaForm(data, callback) {
    const schema = yup.object().shape({
      cep: yup.string().required("Informe o CEP").length(8, "Deve ser um CEP válido"),
      endereco: yup.string().required("Informe o endereço"),
      numero: yup.string().required("Informe o número"),
      bairro: yup.string().required("Informe o nome do bairro"),
      cidade: yup.string().required("Selecione uma cidade"),
      estado: yup.string().required("Selecione um estado")
    });

    schema.validate(data, { abortEarly: false })
      .then(callback)
      .catch(err => {
        const validationErrors = {};
        if(err instanceof yup.ValidationError) {
          err.inner.forEach(erro => { validationErrors[erro.path] = erro.message });
          _form.current.setErrors(validationErrors);
        }
      });
  }

  function _handleSubmit(data) {
    // _validaForm(data, data => {
      let dados = {...dadosUsuario, data};
      navigation.navigate("cadastroDadosPerfilUsuario", {data});
    // });
  }

  return <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
    <ScrollView>
      <Container>
        <Text style={{marginBottom: 30}}>Após o preenchimento de suas informações pessoais, necessitamos de dados de seu endereço para melhor disponibilizarmos trabalhos disponiveis em sua região.</Text>
        
        <Form ref={_form} onSubmit={_handleSubmit}>
          <FormInput name="cep" label="CEP" keyboardType="number-pad" helper="Informe o CEP da sua residência ou da empresa" />

          <FormInput name="endereco" label="Endereço" helper="Informe o nome da rua ou avenida" />

          <FormInput name="numero" label="Número" helper="Informe o número" keyboardType="number-pad" />

          <FormInput name="complemento" label="Complemento" helper="(opcional)" />

          <FormInput name="bairro" label="Bairro" helper="Nome do bairro" />

          <FormPicker name="cidade" label="Cidade" helper="Nome da cidade" itens={_cidades} />

          <FormPicker name="estado" label="Estado" helper="Nome do estado" itens={_estados} />
        </Form>

        <TouchableOpacity style={styles.button} onPress={() => _form.current.submitForm()}>
          <Text style={styles.buttonLabel}>CONTINUAR</Text>
          <FontAwesomeIcon icon="chevron-right" color="#4CAF50" />
        </TouchableOpacity>
      </Container>
    </ScrollView>
  </KeyboardAvoidingView>
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
  }
});