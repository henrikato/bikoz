import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from 'components/Container';
import { Button } from 'react-native-paper';
import PageHeader from 'components/PageHeader';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({headerLeft: null});
  
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 40}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <PageHeader>Meu currículo</PageHeader>

          <Text style={styles.subHeader}>Experiências</Text>
          <Text>Garçom por 3 meses, empacotador por 4 meses, motoboy por 5 meses</Text>

          <Text style={styles.subHeader}>Serviços oferecidos</Text>
          <Text>Garçom, Empacotador, Motoboy, Eletricista</Text>

          <Text style={styles.subHeader}>Informações adicionais</Text>
          <Text>Formado em Engenharia Elétrica</Text>

          <View style={{flexGrow: 1, justifyContent: "flex-end"}}>
            <Button style={{marginTop: 20}} onPress={() => navigation.navigate("editarCurriculo")}>EDITAR MEU  CURRÍCULO</Button>
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