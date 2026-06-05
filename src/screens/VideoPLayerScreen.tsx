import { View } from "react-native";
import { useEffect } from "react";

import {
  useVideoPlayer,
  VideoView,
} from "expo-video";

import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { RootStackParamList }
from "../types/navigation";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "VideoPlayer"
  >;

export default function VideoPlayerScreen({
  route,
}: Props) {

  const {
    videoUrl,
    startAt,
  } = route.params;

  const player =
    useVideoPlayer(
      videoUrl,
      player => {

        player.currentTime =
          startAt;

        player.play();
      }
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <VideoView
        style={{
          flex: 1,
        }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}