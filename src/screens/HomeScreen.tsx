import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { RootStackParamList }
from "../types/navigation";

import { removeToken }
from "../storage/tokenStorage";

import { getVideos }
from "../services/video.service";

import VideoCard from "../components/VideoCard";

import { Video } from "../types/Video";

type Props =
  NativeStackScreenProps<
    RootStackParamList,
    "Home"
  >;

export default function HomeScreen({
  navigation,
}: Props) {

  const [videos, setVideos] =
    useState<Video[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  async function loadVideos() {

    try {

      const data =
        await getVideos();

      setVideos(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  }

  async function logout() {

    await removeToken();

    navigation.replace(
      "Login"
    );
  }

  if (loading) {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Button
        title="Logout"
        onPress={logout}
      />

      <FlatList
        data={videos}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <VideoCard
            video={item}
            onPress={() =>
              navigation.navigate(
                "VideoDetails",
                { video: item }
              )
            }
          />
        )}
      />
    </View>
  );
}