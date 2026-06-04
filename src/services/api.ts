import axios from "axios";
import { getToken } from "../storage/tokenStorage";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  
});
console.log("API URL:", process.env.EXPO_PUBLIC_API_URL);
console.log("BASE URL:", api.defaults.baseURL);
api.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);