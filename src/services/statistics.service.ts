import { api } from "./api";
import { VideoStatisticsResponse } from "../types/Statistics";
import { TrendingVideoResponse } from "../types/Video";

export const statisticsService = {
  // GET /statistics/video/{videoId}
  getVideoStats: async (videoId: string): Promise<VideoStatisticsResponse> => {
    const response = await api.get<VideoStatisticsResponse>(`/statistics/video/${videoId}`);
    return response.data;
  },

  // GET /statistics/trending
  getTrendingStats: async (): Promise<TrendingVideoResponse[]> => {
    const response = await api.get<TrendingVideoResponse[]>("/statistics/trending");
    return response.data;
  },
};