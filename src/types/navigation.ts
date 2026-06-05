import { Video } from "./Video";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Splash: undefined;

    VideoDetails: {
        video: Video;
    };
    VideoPlayer:{
      videoUrl: string;
      startAt: number;
    }
  };