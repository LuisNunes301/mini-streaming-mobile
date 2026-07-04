import { VideoCategory } from "./Video";

export interface UserProfileResponse {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
}

export interface UpdateProfileRequest {
  name: string;
  bio?: string;
}

export interface FavoriteResponse {
  id: string;
  videoId: string;
  videoTitle: string;
  thumbnailUrl: string;
  category: VideoCategory;
}