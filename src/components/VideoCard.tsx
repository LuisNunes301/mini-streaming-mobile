import {
  View,
  Text,
  Pressable,
} from "react-native";

import { Video }
from "../types/Video";

import { formatDuration, VideoStatus } from "../utils/videos.utils";
interface Props {
  video: Video;
  onPress: () => void;
  
}

export default function VideoCard({
  video,
  onPress,
}: Props) {

  const status = video.status as VideoStatus;

  const statusColor = status === "READY" ? "green" : status === "PROCESSING" ? "yellow" : "red";

  return (
    <Pressable onPress={onPress}>
      
      <View
        style={{
          padding: 20,
          marginBottom: 16,
          borderWidth: 1,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {video.title}
        </Text>

        <Text>
          Status: <Text style={{ color: statusColor }}>{status}</Text>
        </Text>
        <Text>
          Resolução: {video.width}x{video.height}
        </Text>
        <Text>
          Duração: {formatDuration(video.duration)}
        </Text>
      </View>
    </Pressable>
  );
}