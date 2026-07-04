import {
  Button,
  Text,
  View,
} from "react-native";
import { startPlayback }
  from "../services/playback.service";
import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { RootStackParamList }
  from "../types/navigation";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "VideoDetails"
  >;

export default function VideoDetailsScreen({
  route, navigation
}: Props) {
  const { video } = route.params;
  { console.log("video", video) }
  async function handleWatch() {

    try {

      const playback =
        await startPlayback(video.id);

      navigation.navigate(
        "VideoPlayer",
        {
          videoUrl: playback.videoUrl,
          startAt: playback.startAt,
          videoId: video.id
        }
      );

    } catch (error) {

      console.log(error);

    }
  }
  return (
  <View style={{ flex: 1, padding: 20, backgroundColor: "#121212" }}>
    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#FFF", marginBottom: 10 }}>
      {video.title}
    </Text>

    <Text style={{ color: "#AAA", marginBottom: 5 }}>
      Categoria: {video.category}
    </Text>

    <Text style={{ color: "#AAA", marginBottom: 20 }}>
      Duração original: {video.duration.toFixed(2)}s
    </Text>

    <Button
      title="Assistir"
      color="#E50914"
      onPress={handleWatch}
    />
  </View>
);
}