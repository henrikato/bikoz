import React, { useRef, useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as yup from 'yup';

import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FlexImage from 'components/FlexImage';
import {Button, IconButton} from 'react-native-paper';

import logo from 'assets/logo.png'
import { useDispatch } from 'react-redux';
import { loginRequest } from 'store/actions/autenticacaoActions';
import { Toast } from 'native-base';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: null,
    headerBackVisible: false
  });
  const _form = useRef(null);
  const [hidePassword, setHidePassword] = useState(true);

  const dispatch = useDispatch();

  function _handleSubmit(data) {
    const schema = yup.object().shape({
      login: yup.string().email("Informe um e-mail válido").required("Informe o seu login"),
      senha: yup.string().min(6, "A senha possui no mínimo 6 caracteres.").required("Informe a sua senha")
    });
    schema.validate(data, { abortEarly: false })
      .then(data => {
        dispatch(loginRequest(data))
          .then(res => {
            console.tron.log("Login", res);
            navigation.reset({ index: 0, routes: [{name: "main"}] })
          })
          .catch(() => Toast.show({
            text: "Login inválido",
            duration: 3000,
            type: "warning"
          }))
      })
      .catch(err => {
        const validationErrors = {};
        if(err instanceof yup.ValidationError) {
          err.inner.forEach(erro => { validationErrors[erro.path] = erro.message });
          _form.current.setErrors(validationErrors);
        }
      });
  }

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container style={{justifyContent: "space-evenly"}}>
          <FlexImage source={logo} style={{flexGrow: .5, width: 250, alignSelf: "center"}} />

          <Form ref={_form} onSubmit={_handleSubmit}>
            <FormInput label="Login" 
              name="login" 
              keyboardType="email-address" 
              autoCapitalize="none"
              autoFocus 
              autoCorrect={false}
              autoCompleteType="email" 
              textContentType="emailAddress" 
              helper="Informe o seu e-mail de login" />

            <FormInput label="Senha" 
              name="senha" 
              secureTextEntry={hidePassword} 
              autoCompleteType="password" 
              textContentType="password" 
              helper="Informe a sua senha"
              right={
                <IconButton icon={props => <FontAwesomeIcon icon={hidePassword ? "eye" : "eye-slash"} {...props} />}
                  color="#222222"
                  size={16}
                  onPress={() => setHidePassword(!hidePassword)} />
              }/>
          </Form>

          <View>
            <Button style={{marginBottom: 20}} 
              mode="contained" 
              color="#4CAF50" 
              labelStyle={{ color: "#FAFAFA" }}               
              onPress={() => _form.current.submitForm()}>
                LOGIN
            </Button>

            <Button mode="contained" 
              color="#EFEFEF" 
              labelStyle={{color: "#222"}}
              onPress={() => _form.current.submitForm()}>
                ESQUECI MINHA SENHA
            </Button>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}