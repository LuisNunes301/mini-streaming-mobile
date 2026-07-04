import { api } from "./api";
import { UserProfileResponse, UpdateProfileRequest, FavoriteResponse } from "../types/Profile";

export const profileService = {
  // GET /profiles/me
  getMe: async (): Promise<UserProfileResponse> => {
    const response = await api.get<UserProfileResponse>("/profiles/me");
    return response.data;
  },

  // PUT /profiles
  updateProfile: async (request: UpdateProfileRequest): Promise<UserProfileResponse> => {
    const response = await api.put<UserProfileResponse>("/profiles", request);
    return response.data;
  },

  // POST /profiles/avatar (Consome multipart/form-data)
  uploadAvatar: async (fileUri: string, fileName: string, fileType: string): Promise<UserProfileResponse> => {
    const formData = new FormData();
    // No React Native, para arquivos multimídia, passamos um objeto com uri, name e type
    formData.append("file", {
      uri: fileUri,
      name: fileName,
      type: fileType,
    } as any);

    const response = await api.post<UserProfileResponse>("/profiles/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  // GET /profiles/favorites
  listFavorites: async (): Promise<FavoriteResponse[]> => {
    const response = await api.get<FavoriteResponse[]>("/profiles/favorites");
    return response.data;
  },

  // POST /profiles/favorites/{videoId}
  addFavorite: async (videoId: string): Promise<void> => {
    await api.post(`/profiles/favorites/${videoId}`);
  },

  // DELETE /profiles/favorites/{videoId}
  removeFavorite: async (videoId: string): Promise<void> => {
    await api.delete(`/profiles/favorites/${videoId}`);
  },
};