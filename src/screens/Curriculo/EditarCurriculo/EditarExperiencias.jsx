import { useNavigation } from "@react-navigation/native";
import FormInput from "components/FormInput"
import { Title } from "native-base"
import { View } from "react-native"

export default () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: "Editar experiências" })

  (
    <View>
      <Title>Experiências</Title>
      <FormInput numberOfLines={5} />
    </View>
  )
}