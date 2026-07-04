import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { removeToken } from "../storage/tokenStorage";
import { getHomeFeed } from "../services/video.service";
import VideoCard from "../components/VideoCard";
import { HomeResponse, VideoResponse } from "../types/Video";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [homeData, setHomeData] = useState<HomeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  async function loadHomeData() {
    try {
      const data = await getHomeFeed();
      setHomeData(data);
    } catch (error) {
      console.log("Erro ao carregar home:", error);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await removeToken();
    navigation.replace("Login");
  }

  if (loading || !homeData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121212" }}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  // Helper para renderizar os carrosséis horizontais de vídeo
  const renderVideoSection = (title: string, videoList: VideoResponse[]) => {
    if (videoList.length === 0) return null;
    return (
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF", marginBottom: 10, marginLeft: 4 }}>
          {title}
        </Text>
        <FlatList
          horizontal
          data={videoList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginRight: 12 }}>
              <VideoCard
                video={item}
                onPress={() => navigation.navigate("VideoDetails", { video: item })}
              />
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#121212", padding: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#E50914" }}>MiniStreaming</Text>
        <Button title="Logout" color="#E50914" onPress={logout} />
      </View>

      {/* 1. Seção de Continuar Assistindo */}
      {renderVideoSection("Continuar Assistindo", homeData.continueWatching)}

      {/* 2. Seção de Tendências / Trending */}
      {renderVideoSection("Bombando", homeData.trending)}

      {/* 3. Listagem dinâmica das Categorias que vieram do Backend */}
      {homeData.categories.map((group) => (
        <View key={group.category}>
          {renderVideoSection(group.category, group.videos)}
        </View>
      ))}
    </ScrollView>
  );
}