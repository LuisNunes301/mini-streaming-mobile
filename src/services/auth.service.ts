import { api } from "./api";
import { 
  AuthRequest, 
  AuthResponse, 
  RegisterRequest, 
  RegisterResponse, 
  GetCurrentUserOutput 
} from "../types/Auth";

export async function login(request: AuthRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", request);
  return response.data;
}

export async function register(request: RegisterRequest): Promise<RegisterResponse> {
  const response = await api.post<RegisterResponse>("/auth/register", request);
  return response.data;
}

export async function getCurrentUser(): Promise<GetCurrentUserOutput> {
  const response = await api.get<GetCurrentUserOutput>("/auth/me");
  return response.data;
}