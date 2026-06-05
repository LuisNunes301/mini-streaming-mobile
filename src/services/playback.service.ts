import { api } from "./api";
import { getToken } from "../storage/tokenStorage";

export async function startPlayback(videoId: string) {
  const token = await getToken();

  const response = await api.get(
    `/playback/start/${videoId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}