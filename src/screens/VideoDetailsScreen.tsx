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
        }
      );

    } catch (error) {

      console.log(error);

    }
  }
  return (

    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {video.title}
      </Text>

      <Text>
        Status: {video.status}
      </Text>

      <Text>
        Duração: {video.duration}
      </Text>

      <Text>
        Resolução:
        {" "}
        {video.width}x{video.height}
      </Text>

      <Button
        title="Assistir"
        onPress={handleWatch}
      />
    </View>
  );
}