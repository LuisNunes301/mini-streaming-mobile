import { View, Text } from "react-native";
import { Video } from "../types/Video";

interface Props {
  video: Video;
}

export default function VideoCard({
  video,
}: Props) {
  return (
    <View
      style={{
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 8,
      }}
    >
      <Text>{video.title}</Text>

      <Text>
        Status: {video.status}
      </Text>

      <Text>
        Duração: {Math.floor(video.duration)}s
      </Text>
    </View>
  );
}