export type VideoCategory = 
  | 'MUSIC'
  | 'DOCUMENTARY'
  | 'TECHNOLOGY'
  | 'EDUCATION'
  | 'SPORTS'
  | 'NEWS'
  | 'GAMING'
  | 'ENTERTAINMENT';

export interface VideoResponse {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: number;
  category: VideoCategory;
}

export interface CategoryGroup {
  category: VideoCategory;
  videos: VideoResponse[];
}

export interface HomeResponse {
  trending: VideoResponse[];
  continueWatching: VideoResponse[];
  categories: CategoryGroup[];
}

export interface TrendingVideoResponse {
  id: string;
  title: string;
  thumbnailUrl: string;
  views: number; // Mapeado com base no caso de uso de estatísticas
}