import { api } from "./api";
import {
  AuthRequest,
  AuthResponse,
  RegisterRequest
} from "../types/Auth";

export const login = async (
  data: AuthRequest
): Promise<AuthResponse> => {

  const response =
    await api.post<AuthResponse>(
      "/auth/login",
      data
    );

  return response.data;
};

export const register = async (
  data: RegisterRequest
) => {

  const response =
    await api.post(
      "/auth/register",
      data
    );

  return response.data;
};

export const me = async () => {

  const response =
    await api.get("/auth/me");

  return response.data;
};