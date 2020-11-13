import React from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Constants from 'expo-constants';
import Container from 'components/Container';
import FlexImage from 'components/FlexImage';
import { FormatarEnderecoSimples } from 'util/FormatarEndereco';
import { FormatarHorarioVaga } from 'util/FormatarHorario';
import { listarVagas } from 'store/actions/vagaActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Subtitle, Title } from 'native-base';
import { Divider } from 'react-native-paper';

const mapDispatchToProps = dispatch => bindActionCreators({listarVagas}, dispatch);

class Vagas extends React.Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({headerLeft: null});

    this.state = {
      vagas: []
    }
  }
  componentDidMount() {
    this.props.listarVagas().then(({payload: {data}}) => this.setState({vagas: data}))
  }

  renderizaVaga = ({item}) => (
    <TouchableHighlight style={styles.vaga} underlayColor="#E7E7E7" onPress={() => this.props.navigation.navigate("vaga", {detalhes: item})}>
      <View style={styles.conteudoVaga}>
        <FlexImage source={{uri: item.imagem}} style={styles.imgVaga} />
        <View style={{ flex: 1 }}>
          <Text style={styles.tituloVaga} numberOfLines={1} ellipsizeMode="tail">{item.nome} - {item.anunciante.nome}</Text>
          <Text style={styles.subTituloVaga}>{FormatarEnderecoSimples(item.anunciante.endereco)}</Text>
          <Text style={styles.subTituloVaga}>{FormatarHorarioVaga(item)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} placeholder="Procure por uma vaga..." />
            <FontAwesomeIcon icon="search" style={{marginRight: 10}} />
          </View>
        </View>
        <Container>
          <Title>Vagas anunciadas</Title>
          <FlatList data={this.state.vagas} 
            renderItem={this.renderizaVaga}
            keyExtractor={({id}) => String(id)}
            ListEmptyComponent={<Subtitle>Opa, parece que ainda não temos nenhuma oportunidade para você.</Subtitle>} />
        </Container>
      </>
    )
  }
}

export default connect(null, mapDispatchToProps)(Vagas);

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
    borderRadius: 5,
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