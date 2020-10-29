import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SegmentedControl from '@react-native-community/segmented-control';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Container from 'components/Container';
import { useDispatch } from 'react-redux';
import { cadastroParcial } from 'store/actions/usuarioActions';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Criação de conta"
  });

  const dispatch = useDispatch();

  const [tipoConta, setTipoConta] = useState(0);
  const [nomeTipoConta, setNomeTipoConta] = useState("Candidato");
  const [mensagem, setMensagem] = useState("Selecione um tipo de conta");

  useEffect(() => {
    switch(nomeTipoConta){
      case "Candidato": {
        setMensagem("Você criará um perfil informando alguns dados pessoais e dados profissionais como serviços que você disponibiliza e experiências anteriores para que possamos lhe oferecer as melhores vagas");
        setTipoConta(0);
        break;
      }
      case "Anunciante": {
        setMensagem("Você criará um perfil informando alguns dados pessoais e dados da sua empresa para que você possa disponibilizar suas vagas");
        setTipoConta(1);
        break;
      }
      default: {
        setMensagem("Selecione um tipo de conta");
        setTipoConta(null);
      }
    }
  }, [nomeTipoConta]);

  function continuar () {
    dispatch(cadastroParcial({tipoConta}));
    navigation.navigate("cadastroDadosUsuario");
  }

  return (
    <Container>
      <View style={{flexGrow: 1, justifyContent: "center"}}>
        <Text>Informe qual tipo de perfil você deseja ter, inicialmente. Você poderá modificar ou trocar isto a qualquer momento.</Text>

        <Text style={{marginTop: 30, fontSize: 16}}>Tipo de conta</Text>
        <SegmentedControl values={["Candidato", "Anunciante"]} fontSize={16} tintColor={Constants.manifest.primaryColor}
          activeTextColor="#FAFAFA" style={{marginVertical: 10}} selectedIndex={tipoConta}
          onValueChange={value => setNomeTipoConta(value)} />
        
        <Text style={{minHeight: 100}}>{mensagem}</Text>
      </View>

      <Button mode="outlined" color="#4CAF50" onPress={continuar}
        style={styles.button} disabled={tipoConta === null}
        icon={props => <FontAwesomeIcon icon="chevron-right" {...props} />}>
        CONTINUAR
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    borderColor: "#4CAF50",
    marginTop: 20
  }
});