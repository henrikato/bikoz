import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SegmentedControl from '@react-native-community/segmented-control';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Constants from 'expo-constants';
import Container from 'components/Container';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Criação de conta"
  });

  const [tipoConta, setTipoConta] = useState(0);

  const MensagemTipoConta = ({tipo}) => {
    switch(tipo) {
      case 0: return <Text>Você criará um perfil informando alguns dados pessoais e dados profissionais como serviços que você disponibiliza e experiências anteriores para que possamos lhe oferecer as melhores vagas.</Text>
      case 1: return <Text>Você criará um perfil informando alguns dados pessoais e dados da sua empresa para que você possa disponibilizar suas vagas.</Text>
      default: <Text>Selecione um tipo de conta</Text>
    }
  }

  return (
    <Container>
      <Text>Informe qual tipo de perfil você deseja ter, inicialmente. Você poderá modificar ou trocar isto a qualquer momento.</Text>
      <Text style={{marginTop: 30, fontSize: 16}}>Tipo de conta</Text>
      <SegmentedControl values={['Candidato', 'Anunciante']}
        fontSize={16}
        tintColor={Constants.manifest.primaryColor}
        activeTextColor="#FAFAFA"
        style={{marginVertical: 20}}
        selectedIndex={tipoConta}
        onChange={({nativeEvent}) => setTipoConta(nativeEvent.selectedSegmentIndex)} />
      <MensagemTipoConta tipo={tipoConta}/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("cadastroDadosUsuario", {tipoConta})}>
        <Text style={styles.buttonLabel}>CONTINUAR</Text>
        <FontAwesomeIcon icon="chevron-right" color="#4CAF50" />
      </TouchableOpacity>
    </Container>
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
  }
});