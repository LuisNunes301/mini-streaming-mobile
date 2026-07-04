import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { getToken } from "../storage/tokenStorage";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    async function checkAuth() {
      try {
        const token = await getToken();

        if (token) {
          // Se tem token, joga direto para a Home
          navigation.replace("Home");
        } else {
          // Se não tem, vai para a tela de Login
          navigation.replace("Login");
        }
      } catch (error) {
        console.log("Erro ao verificar token na inicialização:", error);
        navigation.replace("Login");
      }
    }

    checkAuth();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212", // Mantendo o padrão dark do streaming
      }}
    >
      <ActivityIndicator size="large" color="#E50914" />
    </View>
  );
}