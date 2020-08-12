import React, { useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Container from '@components/Container';
import { Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Form } from '@unform/mobile';
import FormInput from '@components/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as yup from 'yup';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: "Informações básicas" });

  const tipoConta = route.params.tipoConta;
  const _form = useRef(null);
  const [hidePassword, setHidePassword] = useState(true);

  const ButtonViewPassword = () => (
    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
      <FontAwesomeIcon icon={hidePassword ? "eye" : "eye-slash"} />
    </TouchableOpacity>
  );

  function _handleSubmit(data) {
    const schema = yup.object().shape({
      tipoConta: yup.number().default(tipoConta),
      nome: yup.string().required("Informe o seu nome"),
      idade: yup.number().min(18, "Somente maiores de 18 anos podem usar a plataforma"),
      telefone: yup.string().min(10, "Informe um telefone válido").max(11, "Informe um telefone válido"),
      email: yup.string().email("Informe um e-mail válido").required("Informe um e-mail"),
      cpfCnpj: yup.string().when('tipoConta', {
        is: 1,
        then: yup.string().required()
          .length(14, "Deve ser um CNPJ válido")
          .matches(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}/g, "Deve ser um CNPJ válido"),
        otherwise: yup.string().required()
          .length(11, "Deve ser um CPF válido")
          .matches(/\d{3}\.?\d{3}\.?\d{3}\-?\d{2}/g, "Deve ser um CPF válido")
      }),
      senha: yup.string().required("Digite uma senha").min(6, "Deve ter no mínimo 6 caracteres"),
      confirmaSenha: yup.string().required("Confirme a senha digitada").min(6, "Deve ter no mínimo 6 caracteres")
        .test('senhaIdentica', "As senhas não conferem", function (cs) { return cs === this.parent.senha }),
    });

    schema.validate(data, { abortEarly: false })
      .then(data => {
        Alert.alert("Dados do Usuario", data);
      })
      .catch(err => {
        const validationErrors = {};
        if(err instanceof yup.ValidationError) {
          err.inner.forEach(erro => { validationErrors[erro.path] = erro.message });
          _form.current.setErrors(validationErrors);
        }
      });
  }

  return <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
    <ScrollView>
      <Container>
        <Text style={{marginBottom: 30}}>Iniciando o processo de cadastro, você preencherá alguns dados básicos para o seu cadastro e informações pessoais para verificarmos sua identidade.</Text>
        
        <Form ref={_form} onSubmit={_handleSubmit}>
          <FormInput name="nome" 
            label={tipoConta === 0 ? "Nome completo" : "Nome Fantasia ou Razão Social"} 
            helper={`Informe ${tipoConta === 0 ? "o seu nome e sobrenome" : "o seu nome ou nome/razão social da sua empresa"}`} />

          {tipoConta === 0 ? <FormInput name="idade" label="Idade" keyboardType="numeric" helper="Informe a sua idade" /> : <></>}

          <FormInput name="telefone" label="Telefone" keyboardType="number-pad" helper="Informe um telefone para contato" />

          <FormInput name="email" label="E-mail" helper="Informe um e-mail de sua preferência" keyboardType="email-address" />

          <FormInput name="cpfCnpj" 
            label={tipoConta === 0 ? "CPF" :"CNPJ"} 
            helper={`Informe ${tipoConta === 0 ? "o seu CPF" : "ou o CNPJ de sua empresa"}`} keyboardType="number-pad" />

          <FormInput name="senha" label="Senha" helper="Digite a senha que será usada para acessar o aplicativo" secureTextEntry={hidePassword}>
            <ButtonViewPassword />
          </FormInput>

          <FormInput name="confirmaSenha" label="Confirme sua senha" helper="Confirme a senha que será utilizada" secureTextEntry={hidePassword}>
            <ButtonViewPassword />
          </FormInput>
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