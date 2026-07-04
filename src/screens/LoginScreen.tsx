import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { saveToken } from "../storage/tokenStorage";
import { login } from "../services/auth.service";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Aviso", "Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      const response = await login({ email, password });
      await saveToken(response.token);
      navigation.replace("Home");
    } catch (error: any) {
      // LOG ESSENCIAL: Mostra o erro real no terminal do VSCode/Expo
      console.log("Erro completo no Login:", error);
      if (error.response) {
        console.log("Dados da resposta do erro do Backend:", error.response.data);
        console.log("Status HTTP do erro:", error.response.status);
      }

      const errorMessage = error.response?.data?.message || "Email ou senha inválidos ou erro de conexão.";
      Alert.alert("Erro", errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, gap: 12, backgroundColor: "#121212" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center", color: "#E50914", marginBottom: 20 }}>
        MiniStreaming
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: "#333", padding: 12, borderRadius: 8, backgroundColor: "#222", color: "#FFF" }}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#777"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: "#333", padding: 12, borderRadius: 8, backgroundColor: "#222", color: "#FFF" }}
      />

      <View style={{ marginTop: 10, gap: 10 }}>
        <Button title={loading ? "Entrando..." : "Entrar"} color="#E50914" disabled={loading} onPress={handleLogin} />
        <Button title="Cadastrar" color="#555" onPress={() => navigation.navigate("Register")} />
      </View>
    </View>
  );
}