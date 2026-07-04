import { VideoResponse } from "./Video";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  VideoDetails: { video: VideoResponse }; 
  VideoPlayer: {
    videoUrl: string;
    startAt: number;
    videoId: string;
  };
};