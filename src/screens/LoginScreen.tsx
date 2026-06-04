import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { login } from "../services/auth.service";
import { saveToken } from "../storage/tokenStorage";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await login(
        email,
        password
      );

      await saveToken(response.token);

      Alert.alert(
        "Sucesso",
        "Login realizado"
      );

    } catch (error) {

      Alert.alert(
        "Erro",
        "Falha no login"
      );

      console.log(error);
    }
  };

  return (
    <View
      style={{
        padding: 20,
        marginTop: 80,
      }}
    >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
  );
}