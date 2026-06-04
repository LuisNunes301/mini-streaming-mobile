import { Button, Text, View } from "react-native";

import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { RootStackParamList }
from "../types/navigation";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "Register"
  >;

export default function RegisterScreen({
  navigation,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Register Screen</Text>

      <Button
        title="Voltar"
        onPress={() =>
          navigation.goBack()
        }
      />
    </View>
  );
}