import { useEffect, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";

import VideoCard from "../components/VideoCard";

import { Video } from "../types/Video";

import { getVideos } from "../services/video.service";

export default function HomeScreen() {

  const [videos, setVideos] =
    useState<Video[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadVideos();

  }, []);

  async function loadVideos() {

    try {

      const response =
        await getVideos();

      setVideos(response);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
      />
    </View>
  );
}