import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import Container from 'components/Container';
import MenuItem from 'components/MenuItem';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.info}>
        <Text style={styles.header}>NOME COMPLETO</Text>
        <Text style={styles.value}>Fulano de Tal</Text>
      </View>
      <Divider />

      <View style={styles.info}>
        <Text style={styles.header}>IDENTIFICAÇÃO</Text>
        <Text style={styles.value}>987.654.321-00</Text>
      </View>
      <Divider />

      <View style={styles.info}>
        <Text style={styles.header}>E-MAIL</Text>
        <Text style={styles.value}>fulano.tal@gmail.com</Text>
      </View>
      <Divider />

      <MenuItem label="Formas de contato" />
      <Divider />
      <MenuItem label="Formas de recebimento" />
    </Container>
  )
}

const styles = StyleSheet.create({
  info: {
    marginVertical: 10
  },
  header: {
    letterSpacing: 1,
    fontSize: 12,
    color: "#444"
  },
  value: {
    marginVertical: 2,
    fontSize: 16
  }
})