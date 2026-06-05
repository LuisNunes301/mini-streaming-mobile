export function formatDuration(
    seconds: number
  ) {
  
    const minutes =
      Math.floor(seconds / 60);
  
    const remainingSeconds =
      Math.floor(seconds % 60);
  
    return `${minutes}m ${remainingSeconds}s`;
  }


  export type VideoStatus =
  | "UPLOADING"
  | "PROCESSING"
  | "READY"
  | "FAILED";