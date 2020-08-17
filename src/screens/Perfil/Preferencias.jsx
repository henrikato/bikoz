import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet, Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import Constants from 'expo-constants';
import Container from 'components/Container';

export default () => {
  const [_receberNotificacoesPush, setReceberNotificacoesPush] = useState(false);
  const [_permitirCompartilharPerfil, setPermitirCompartilharPerfil] = useState(false);
  
  return (
    <Container>
      <View style={styles.item}>
        <View>
          <Text style={styles.itemLabel}>Receber notificações push</Text>
          <Text style={styles.itemHelper}>Deseja receber notificações de novas vagas e quando alguém entrar em contato?</Text>
        </View>
        <Switch style={styles.switch} value={_receberNotificacoesPush} onValueChange={setReceberNotificacoesPush} />
      </View>
      <Divider />
  
      <View style={styles.item}>
        <View>
          <Text style={styles.itemLabel}>Permitir compartilhamento do perfil</Text>
          <Text style={styles.itemHelper}>Caso queira, outras pessoas podem compartilhar o seu perfil para que mais oportunidades apareçam.</Text>
        </View>
        <Switch style={styles.switch} value={_permitirCompartilharPerfil} onValueChange={setPermitirCompartilharPerfil} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemLabel: {
    color: Constants.manifest.primaryColor
  },
  itemHelper: {
    fontSize: 12,
    color: "#444",
    maxWidth: 270
  },
  switch: {
    transform: [{ scale: .6 }]
  }
})