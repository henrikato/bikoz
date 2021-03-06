import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
import { Form } from '@unform/mobile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FormPicker from 'components/FormPicker';
import { cadastroParcial } from 'store/actions/usuarioActions';
import { Button } from 'react-native-paper';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: "Dados de endereço" });
  const dispatch = useDispatch();

  const _cidades = [
    {id: "Marília", value: "Marília"},
    {id: "Bauru", value: "Bauru"},
    {id: "São Paulo", value: "São Paulo"}];
  const _estados = [{id: "SP", value: "SP"}];

  const _form = useRef(null);

  function _validaForm(data, callback) {
    const schema = yup.object().shape({
      cep: yup.string().required("Informe o CEP").length(8, "Deve ser um CEP válido"),
      logradouro: yup.string().required("Informe o endereço"),
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
    _validaForm(data, endereco => {
      dispatch(cadastroParcial({endereco}));
      navigation.navigate("cadastroDadosPerfilUsuario");
    });
  }

  return <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
    <ScrollView>
      <Container>
        <Text style={{marginBottom: 30}}>Após o preenchimento de suas informações pessoais, necessitamos de dados de seu endereço para melhor disponibilizarmos trabalhos disponiveis em sua região.</Text>
        
        <Form ref={_form} onSubmit={_handleSubmit}>
          <FormInput name="cep" label="CEP" keyboardType="number-pad" autoFocus helper="Informe o CEP da sua residência ou da empresa" />

          <FormInput name="logradouro" label="Endereço" helper="Informe o nome da rua ou avenida" />

          <FormInput name="numero" label="Número" helper="Informe o número" keyboardType="number-pad" />

          <FormInput name="complemento" label="Complemento" helper="(opcional)" />

          <FormInput name="bairro" label="Bairro" helper="Nome do bairro" />
          <View style={{marginTop: 5}}></View>
          <FormPicker name="cidade" label="Cidade" helper="Selecione uma cidade" itens={_cidades} />

          <FormPicker name="estado" label="Estado" helper="Selecione um estado" itens={_estados} />
        </Form>

        <Button mode="outlined" color="#4CAF50" onPress={() => _form.current.submitForm()} style={styles.button}
          icon={props => <FontAwesomeIcon icon="chevron-right" {...props} />}>
          CONTINUAR
        </Button>
      </Container>
    </ScrollView>
  </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    borderColor: "#4CAF50",
    marginTop: 20
  },
});