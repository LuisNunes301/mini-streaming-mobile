export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string; // Mapeia o Map.of("message", "...") do Spring Boot
}

export interface GetCurrentUserOutput {
  id: string;
  name: string;
  email: string;
}