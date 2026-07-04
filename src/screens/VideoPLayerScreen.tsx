import { View } from "react-native";
import { useEffect } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
// Importar seu serviço de progresso do playback
import { updatePlaybackProgress } from "../services/playback.service"; 

type Props = NativeStackScreenProps<RootStackParamList, "VideoPlayer">;

export default function VideoPlayerScreen({ route }: Props) {
  // Recebe também o ID do vídeo para saber a quem atribuir o progresso no backend
  const { videoUrl, startAt, videoId } = route.params; 

  const player = useVideoPlayer(videoUrl, (playerInstance) => {
    playerInstance.currentTime = startAt; // Inicia de onde parou[cite: 1]
    playerInstance.play(); // Dá o play automático[cite: 1]
  });

  useEffect(() => {
    // Configura o timer de progresso (a cada 10 segundos)
    const progressInterval = setInterval(async () => {
      if (player && player.playing) {
        try {
          const currentProgress = player.currentTime;
          
          // Dispara o progresso para o backend
          await updatePlaybackProgress({
            videoId: videoId,
            progress: currentProgress
          });
          
          console.log(`Progresso sincronizado: ${currentProgress}s`);
        } catch (error) {
          console.log("Erro ao sincronizar progresso:", error);
        }
      }
    }, 10000); // 10 segundos

    // Limpa o intervalo se o usuário fechar a tela do player
    return () => {
      clearInterval(progressInterval);
    };
  }, [player, videoId]);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <VideoView
        style={{ flex: 1 }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}