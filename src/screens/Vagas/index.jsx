import React from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import Constants from 'expo-constants';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import FlexImage from 'components/FlexImage';
import { FormatarEnderecoSimples } from 'util/FormatarEndereco';
import { FormatarHorarioVaga } from 'util/FormatarHorario';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});

  const _vagas = [
    {
      id: 0,
      titulo: "Bico de Garçom",
      ofertante: {
        nome: "DOCTOR BEER",
      },
      endereco: {
        endereco: "Av. Rio Branco",
        numero: "1231"
      },
      dataHoraInicio: moment("2020-08-21T19:00:00"),
      dataHoraFim: moment("2020-08-22T00:00:00")
    }
  ]

  const renderizaVaga = ({id, titulo, ofertante, endereco, ...props}) => (
    <TouchableHighlight style={styles.vaga} underlayColor="#E7E7E7" onPress={() => navigation.navigate("vaga")}>
      <View style={styles.conteudoVaga}>
        <FlexImage source={{url: "http://placehold.it/120x120"}} style={styles.imgVaga} />
        <View>
          <Text style={styles.tituloVaga}>{titulo} - {ofertante.nome}</Text>
          <Text style={styles.subTituloVaga}>{FormatarEnderecoSimples(endereco)}</Text>
          <Text style={styles.subTituloVaga}>{FormatarHorarioVaga(props)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  return (
    <>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Procure por uma vaga..." />
          <FontAwesomeIcon icon="search" style={{marginRight: 10}} />
        </View>
      </View>
      <Container>
        <PageHeader>Vagas anunciadas</PageHeader>
        <FlatList data={_vagas} 
          renderItem={({item}) => renderizaVaga(item)} 
          ListEmptyComponent={<Text>Nenhuma vaga disponível no momento.</Text>}
          keyExtractor={({id}) => String(id)} />
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  searchBarWrapper: {
    backgroundColor: Constants.manifest.primaryColor
  },
  searchBar: {
    marginBottom: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#FAFAFA"
  },
  searchInput: {
    flexGrow: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25
  },
  vaga: {
    padding: 5,
    marginVertical: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 5
  },
  conteudoVaga: {
    flexDirection: "row",
    alignItems: "center"
  },
  imgVaga: {
    marginRight: 5,
    height: 60,
    width: 60,
    overflow: "hidden",
    borderRadius: 5
  },
  tituloVaga: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10
  },
  subTituloVaga: {
    fontSize: 12
  }
});