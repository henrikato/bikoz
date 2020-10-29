import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
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
        <Button color="#4CAF50" mode="contained" dark={true} onPress={() => navigation.navigate("login")}>
            EFETUAR LOGIN
        </Button>
        <Button mode="contained" color="#FAFAFA" style={{marginTop: 40}} onPress={() => navigation.navigate("cadastro")}>
          CRIAR MINHA CONTA
        </Button> 
      </View>

      <Button mode="contained" color="#FAFAFA" labelStyle={{color: "#217CEF"}} disabled
        icon={props => <FontAwesomeIcon icon={['fab', 'facebook']} {...props}/>}>
          LOGIN COM FACEBOOK
        </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Constants.manifest.primaryColor,
    justifyContent: "space-evenly"
  }
});