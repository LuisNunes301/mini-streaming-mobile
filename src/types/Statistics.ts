export interface VideoStatisticsResponse {
  videoId: string;
  totalViews: number;
  watchTimeSum: number; // Ex: em segundos ou minutos dependendo da sua regra de negócio
  completionRate: number;
}