import { api } from "./api";
import { VideoResponse, HomeResponse } from "../types/Video";

// GET /home
export const getHomeFeed = async (): Promise<HomeResponse> => {
  const response = await api.get<HomeResponse>("/home");
  return response.data;
};

// GET /videos
export const listVideos = async (): Promise<VideoResponse[]> => {
  const response = await api.get<VideoResponse[]>("/videos");
  return response.data;
};

// GET /videos/{id}
export const getVideoById = async (id: string): Promise<VideoResponse> => {
  const response = await api.get<VideoResponse>(`/videos/${id}`);
  return response.data;
};

// GET /videos/category/{category}
export const getVideosByCategory = async (category: string): Promise<VideoResponse[]> => {
  const response = await api.get<VideoResponse[]>(`/videos/category/${category}`);
  return response.data;
};

// GET /videos/search?q={query}
export const searchVideos = async (query: string): Promise<VideoResponse[]> => {
  const response = await api.get<VideoResponse[]>("/videos/search", {
    params: { q: query },
  });
  return response.data;
};