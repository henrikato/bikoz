import React, { useRef, useState } from 'react';
import { View, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FlexImage from 'components/FlexImage';
import Button from 'components/Button';

import logo from 'assets/logo.png'

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: null,
    headerBackVisible: false
  });
  const _form = useRef(null);
  const [hidePassword, setHidePassword] = useState(true);

  function _handleSubmit(data) {
    // const schema = yup.object().shape({
    //   login: yup.string().email("Informe um e-mail válido").required("Informe o seu login"),
    //   senha: yup.string().min(6, "A senha possui no mínimo 6 caracteres.").required("Informe a sua senha")
    // });

    // schema.validate(data, { abortEarly: false })
    //   .then(data => {
        navigation.reset({ index: 0, routes: [{name: "main"}] })
      // })
      // .catch(err => {
      //   const validationErrors = {};
      //   if(err instanceof yup.ValidationError) {
      //     err.inner.forEach(erro => { validationErrors[erro.path] = erro.message });
      //     _form.current.setErrors(validationErrors);
      //   }
      // });
  }

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container style={{justifyContent: "space-evenly"}}>
          <FlexImage source={logo} style={{flexGrow: .5, width: 250, alignSelf: "center"}} />

          <Form ref={_form} onSubmit={_handleSubmit}>
            <FormInput label="Login" name="login" keyboardType="email-address" autoCompleteType="email" helper="Informe o seu e-mail de login" />
            <FormInput label="Senha" name="senha" secureTextEntry={hidePassword} autoCompleteType="password" helper="Informe a sua senha">
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
                <FontAwesomeIcon icon={hidePassword ? "eye" : "eye-slash"} />
              </TouchableOpacity>
            </FormInput>
          </Form>

          <View>
            <Button style={{backgroundColor: "#4CAF50"}} 
              labelStyle={{ color: "#FAFAFA" }} 
              underlayColor="#388e3b" 
              onPress={() => _form.current.submitForm()}>
              LOGIN
            </Button>

            <Button style={{backgroundColor: "#EFEFEF"}} 
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