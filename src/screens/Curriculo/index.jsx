import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from 'components/Container';
import { Button, Divider, List } from 'react-native-paper';
import { Title } from 'native-base';
import ListItem from 'components/ListItem';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});
  
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Title>Meu currículo</Title>

          <List.Section>
            <ListItem 
              title="Experiências" 
              description="Informe aqui suas experiências prévias em outros empregos ou serviços" />
            <Divider />

            <ListItem 
              title="Serviços oferecidos" 
              description="Informe aqui quais os serviços que você oferece ou é capacitado" />
            <Divider />

            <ListItem 
              title="Informações adicionais" 
              description="Insira outras informações que gostaria de adicionar ao seu currículo (ex: conhecimento de outros idiomas)" />
          </List.Section>

          <View style={{flexGrow: 1, justifyContent: "flex-end"}}>
            <Button mode="contained" style={{marginTop: 20}} onPress={() => navigation.navigate("editarCurriculo")}>EDITAR MEU CURRÍCULO</Button>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 20
  }
})