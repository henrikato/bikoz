import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from 'components/Container';
import FlexImage from 'components/FlexImage';
import { Divider, List } from 'react-native-paper';
import { Title } from 'native-base';
import ListItem, { ListChevron } from 'components/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});


  const logout = () => {
    Alert.alert("Desconectar", "Você está se desconectando da sua conta e será necessário fazer o login da próxima vez que abrir o aplicativo, tem certeza que deseja continuar?", [
      { style: "destructive", text: "Cancelar" },
      { text: "Sim", onPress: () => navigation.reset({ index: 0, routes: [{ name: "inicio" }] }) }
    ]);
  }


  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Title>Meu perfil</Title>
          <FlexImage source={{uri: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}} style={styles.avatar} imgStyle={styles.img} />
          <Title style={{marginBottom: 20}}>Fulano de Tal</Title>
  
          <List.Section>
            <ListItem title="Dados pessoais" 
              onPress={() => navigation.navigate("dadosPessoais")}
              right={props => <ListChevron {...props} />} />
            <Divider />
  
            <ListItem title="Currículo" 
              onPress={() => navigation.navigate("curriculo")}
              right={props => <ListChevron {...props} />} />
            <Divider />

            <ListItem title="Preferências" 
              onPress={() => navigation.navigate("preferencias")}
              right={props => <ListChevron {...props} />}/>
            <Divider />
            
            <ListItem title="Sobre" 
              onPress={() => navigation.navigate("sobre")}
              right={props => <ListChevron {...props} />}/> 
            <Divider />

            <ListItem title="Sair" 
              onPress={logout} titleStyle={{color: "#D20000"}}
              right={props => <FontAwesomeIcon icon="power-off" color="#D20000" />}/>
          </List.Section>
  
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  avatar: {
    marginVertical: 20,
    height: 120,
    width: 120,
    overflow: "hidden",
    borderRadius: 75,
    alignSelf: "center"
  },
  img: {
    width: 120,
    height: 120
  }
})