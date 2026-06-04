export interface Video {
    id: string;
    title: string;
  
    status: string;
  
    duration: number;
  
    width: number;
    height: number;
  
    size: number;
  
    active: boolean;
  
    processing: boolean;
    failed: boolean;
  
    objectKey: string;
  
    thumbnailUrl: string;
  
    hlsPlaylistUrl: string;
  
    createdAt: string;
    processedAt: string | null;
  
    processingError: string | null;
  }