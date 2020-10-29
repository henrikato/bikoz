import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from 'components/Container';
import FlexImage from 'components/FlexImage';
import MenuItem from 'components/MenuItem';
import PageHeader from 'components/PageHeader';
import { Divider } from 'react-native-paper';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});

  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container style={{alignItems: "center"}}>
          <PageHeader>Meu perfil</PageHeader>
          <FlexImage source={{uri: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}} style={styles.avatar} imgStyle={styles.img} />
          <PageHeader style={{marginBottom: 20}}>Fulano de Tal</PageHeader>
  
          <MenuItem label="Dados pessoais" onPress={() => navigation.navigate("dadosPessoais")}/>
          <Divider />
  
          <MenuItem label="Currículo" onPress={() => navigation.navigate("curriculo")}/>
          <Divider />
  
          <MenuItem label="Preferências" onPress={() => navigation.navigate("preferencias")}/>
          <Divider />
          
          <MenuItem label="Sobre" onPress={() => navigation.navigate("sobre")}/> 
          <Divider />
  
          <MenuItem label="Sair" 
            onPress={() => navigation.reset({ index: 0, routes: [{ name: "inicio" }] })}
            labelStyle={{color: "#D20000"}}/>
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
    borderRadius: 75
  },
  img: {
    width: 120,
    height: 120
  }
})