import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import Container from 'components/Container';
import FlexImage from 'components/FlexImage';

import logo from 'assets/logo-branco.png'

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false });

  return (
    <Container style={styles.view}>
      <FlexImage source={logo} style={{flexGrow: .5, width: 300, alignSelf: "center"}} />

      <View>
        <Button labelStyle={{ color: "#FAFAFA" }} 
          style={{backgroundColor: "#4CAF50"}} 
          underlayColor="#388e3b" 
          onPress={() => navigation.navigate("login")}>
          EFETUAR LOGIN
        </Button>
        <Button style={styles.button} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate("cadastro")}>CRIAR MINHA CONTA</Button>
      </View>

      <Button style={styles.button} labelStyle={{color: "#1877F2", marginLeft: 10}} 
        icon={<FontAwesomeIcon icon={['fab', 'facebook']} color="#1877F2" />}>
        LOGIN COM FACEBOOK
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Constants.manifest.primaryColor,
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "#EFEFEF"
  },
  buttonLabel: {
    color: "#222222"
  }
});