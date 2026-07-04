import { api } from "./api";
import { PlaybackStartResponse } from "../types/Playback";

interface UpdateProgressInput {
  videoId: string;
  progress: number;
}

/**
 * Inicia a reprodução de um vídeo trazendo a URL do manifesto HLS (.m3u8) e o tempo de parada.
 * GET /playback/start/{videoId}
 */
export async function startPlayback(videoId: string): Promise<PlaybackStartResponse> {
  // O interceptor do api.ts já injeta o Bearer Token automaticamente!
  const response = await api.get<PlaybackStartResponse>(`/playback/start/${videoId}`);
  return response.data;
}

/**
 * Atualiza o tempo atual assistido pelo usuário para alimentar o "Continuar Assistindo".
 * POST /playback/progress
 */
export async function updatePlaybackProgress(input: UpdateProgressInput): Promise<void> {
  // Ajuste as chaves ("videoId", "progress") se o seu DTO no Spring Boot usar nomes diferentes
  await api.post("/playback/progress", {
    videoId: input.videoId,
    progress: input.progress,
  });
}