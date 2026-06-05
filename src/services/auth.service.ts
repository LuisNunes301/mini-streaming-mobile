import { api } from "./api";

import {
  AuthRequest,
  AuthResponse,
  RegisterRequest,
} from "../types/Auth";

export async function login(
  data: AuthRequest
): Promise<AuthResponse> {

  const response =
    await api.post<AuthResponse>(
      "/auth/login",
      data
    );

  return response.data;
}

export async function register(
  data: RegisterRequest
) {

  const response =
    await api.post(
      "/auth/register",
      data
    );

  return response.data;
}

export async function me() {

  const response =
    await api.get(
      "/auth/me"
    );

  return response.data;
}