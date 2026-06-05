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

import { register } from "../services/auth.service";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "Register"
  >;

export default function RegisterScreen({
  navigation,
}: Props) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleRegister() {

    try {

      await register({
        name,
        email,
        password,
      });

      Alert.alert(
        "Sucesso",
        "Usuário cadastrado com sucesso",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.replace(
                "Login"
              ),
          },
        ]
      );

    } catch (error: any) {

      const message =
        error.response?.data?.message ??
        "Erro ao cadastrar usuário";
    
      Alert.alert(
        "Erro",
        message
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
        Criar Conta
      </Text>

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
        }}
      />

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
        title="Cadastrar"
        onPress={handleRegister}
      />

      <Button
        title="Voltar"
        onPress={() =>
          navigation.goBack()
        }
      />
    </View>
  );
}