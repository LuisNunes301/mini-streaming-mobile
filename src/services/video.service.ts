import { api } from "./api";

import { Video } from "../types/Video";

export async function getVideos(): Promise<Video[]> {

  const response =
    await api.get<Video[]>(
      "/videos"
    );

  return response.data;
}