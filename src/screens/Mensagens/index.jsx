import React from 'react';
import Container from 'components/Container';
import { Subtitle, Title } from 'native-base';
import MockData from 'services/MockData';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import FlexImage from 'components/FlexImage';

const renderizaMensagem = ({item}) => (
  <TouchableHighlight style={styles.vaga} underlayColor="#E7E7E7">
    <View style={styles.conteudoVaga}>
      <FlexImage source={{uri: item.thumbnail}} style={styles.imgVaga} resizeMode="cover" />
      <View style={{ flex: 1 }}>
        <Text style={styles.tituloVaga}>{item.titulo}</Text>
        <Text style={styles.subTituloVaga}>{item.mensagem}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

export default () => (
  <Container>
    <Title>Mensagens</Title>
    <FlatList data={MockData.mensagens} 
              renderItem={renderizaMensagem}
              keyExtractor={({id}) => String(id)}
              ListEmptyComponent={<Subtitle>Você não possui nenhuma mensagem</Subtitle>} />
  </Container>
)

const styles = StyleSheet.create({
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
    borderRadius: 5,
  },
  tituloVaga: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 10
  },
  subTituloVaga: {
    fontSize: 12
  }
})