import type { AxiosInstance } from "axios";
import axios from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
