import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SelecaoTipoConta from 'screens/cadastro/SelecaoTipoConta';
import CadastroDadosUsuario from 'screens/cadastro/CadastroDadosUsuario';
import CadastroDadosEnderecoUsuario from 'screens/cadastro/CadastroDadosEnderecoUsuario';
import CadastroDadosPerfilUsuario from 'screens/cadastro/CadastroDadosPerfilUsuario';

const { Navigator, Screen } = createStackNavigator();

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false })

  return (
    <Navigator initialRouteName="selecaoTipoConta" screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTintColor: "#222222",
      headerStyle: { backgroundColor: "#FAFAFA", shadowOpacity: 0, elevation: 0 },
      headerLeft: ({onPress, tintColor}) => (
        <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
          <FontAwesomeIcon icon="arrow-left" size={20} color={tintColor} />
        </TouchableOpacity>
      )
    }}>
      <Screen name="selecaoTipoConta" component={SelecaoTipoConta} />
      <Screen name="cadastroDadosUsuario" component={CadastroDadosUsuario} />
      <Screen name="cadastroDadosEnderecoUsuario" component={CadastroDadosEnderecoUsuario} />
      <Screen name="cadastroDadosPerfilUsuario" component={CadastroDadosPerfilUsuario} />
    </Navigator>
  )
}