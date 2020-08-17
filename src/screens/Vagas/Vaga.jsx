import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Container from 'components/Container';
import Button from 'components/Button';

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: ({style}) => <Text style={[style, {color: "#FAFAFA"}]}>Bico de Garçom - DOCTOR BEER</Text>
  });

  return (
    <>
      <Image source={{uri: "https://scontent.fymy1-2.fna.fbcdn.net/v/t1.0-9/p720x720/103901952_1510217042494005_4737862598436095576_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=JMyk5HQYu0IAX-sw2Jy&_nc_ht=scontent.fymy1-2.fna&_nc_tp=6&oh=b05d4c7bca0e7644fbc9aa0cc564ae2c&oe=5F3D11DB"}} style={styles.banner} resizeMode="cover" />

      <Container style={{paddingVertical: 0}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.nomeOfertante}>DOCTOR BEER</Text>

          <Text style={styles.detalhes}>Av. Rio Branco, 1231</Text>
          <Text style={styles.detalhes}>Telefone: (14) 3422-5078</Text>
          <Text style={styles.detalhes}>Dias de trabalho: 1</Text>
          <Text style={styles.detalhes}>21/08 das 19:00h às 00:00h</Text>
          <Text style={styles.detalhes}>Valor: R$600,00</Text>
          
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum sodales tempus. Quisque tempor, nibh vitae faucibus pretium, est leo dapibus quam, porttitor pulvinar sapien sapien quis odio.</Text>
          
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
    padding: 20,
    marginHorizontal: 0
  }
})