import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, List } from 'react-native-paper';
import Container from 'components/Container';
import ListItem, { ListIcon } from 'components/ListItem';
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation();

  const { tipoConta, usuario: { nome, cpfCnpj, email } } = useSelector(({login}) => login);

  return (
    <Container>
      <View style={styles.info}>
        <Text style={styles.header}>{ tipoConta ? 'NOME / RAZÃO SOCIAL' : 'NOME COMPLETO' }</Text>
        <Text style={styles.value}>{nome}</Text>
      </View>
      <Divider />

      <View style={styles.info}>
        <Text style={styles.header}>CPF ou CNPJ</Text>
        <Text style={styles.value}>{cpfCnpj}</Text>
      </View>
      <Divider />

      <View style={styles.info}>
        <Text style={styles.header}>E-MAIL</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <Divider />

      <List.Section>
        <ListItem title="Formas de contato" right={props => <ListIcon {...props} />} />
        <Divider />
        <ListItem title={`Formas de ${tipoConta ? 'pagamento' : 'recebimento'}`} right={props => <ListIcon {...props} />}  />
      </List.Section>
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