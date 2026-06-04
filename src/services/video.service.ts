import { api } from "./api";
import { Video } from "../types/Video";

export const getVideos = async (): Promise<Video[]> => {
  const response = await api.get("/videos");

  return response.data;
};