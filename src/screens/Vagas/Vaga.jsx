import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import Container from 'components/Container';
import { Button } from 'react-native-paper';
import { FormatarEnderecoSimples } from 'util/FormatarEndereco';
import { FormatarHorarioVaga } from 'util/FormatarHorario';

const currFormat = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const vaga = route.params.detalhes;

  navigation.setOptions({
    headerTitle: ({style}) => <Text style={[style, {color: "#FAFAFA"}]}>{vaga.nome}</Text>
  });

  return (
    <>
      <Image source={{uri: vaga.imagem}} style={styles.banner} resizeMode="cover" />

      <Container style={{paddingVertical: 0}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.nomeOfertante}>{vaga.anunciante.nome}</Text>

          <Text style={styles.detalhes}>{FormatarEnderecoSimples(vaga.anunciante.endereco)}</Text>
          <Text style={styles.detalhes}>Telefone: {vaga.anunciante.telefone}</Text>
          <Text style={styles.detalhes}>Dias de trabalho: 1</Text>
          <Text style={styles.detalhes}>13/11 {FormatarHorarioVaga(vaga)}</Text>
          <Text style={styles.detalhes}>Valor: {currFormat.format(vaga.valor)}</Text>
          
          <Text style={styles.descricao}>{vaga.descricao}</Text>
          
          <View style={{flexGrow: 1, justifyContent: "flex-end"}}>
            <Button style={styles.button}
              labelStyle={{ color: "#FAFAFA" }}
              underlayColor="#388e3b"
              onPress={() => {}}>
                CANDIDATAR-SE PARA A VAGA
            </Button>
          </View>
        </ScrollView>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 150
  },
  nomeOfertante: {
    fontSize: 20,
    fontWeight: "700",
    color: Constants.manifest.primaryColor,
    marginBottom: 10,
    marginTop: 20
  },
  detalhes: {
    lineHeight: 35
  },
  descricao: {
    marginTop: 10,
    fontSize: 12
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 0,
    marginBottom: 20
  }
})