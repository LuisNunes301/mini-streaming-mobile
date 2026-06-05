import { useState } from "react";

import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";

import { saveToken } from "../storage/tokenStorage";

import { login } from "../services/auth.service";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "Login"
  >;

export default function LoginScreen({
  navigation,
}: Props) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {

    try {

      const response =
        await login({
          email,
          password,
        });

      await saveToken(
        response.token
      );

      navigation.replace(
        "Home"
      );

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Erro",
        "Email ou senha inválidos"
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 12,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        MiniStreaming
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
        }}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
        }}
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
      />

      <Button
        title="Cadastrar"
        onPress={() =>
          navigation.navigate(
            "Register"
          )
        }
      />
    </View>
  );
}