// src/api/client.ts
// Central place for API base URL, axios instance, retries, and helpers.

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

// In dev, you can proxy "/api" to localhost:4000 via vite.config.ts.
// In prod, read from env. We support VITE_API_BASE (preferred) and VITE_API_URL (legacy).
const DEV = import.meta.env.DEV;
const ENV_BASE = (import.meta.env.VITE_API_BASE ??
                  import.meta.env.VITE_API_URL) as string | undefined;

// Base URL rules:
//  - Dev: use "/api" only if you have a Vite proxy. Otherwise, fall back to ENV_BASE or Render URL.
//  - Prod: use ENV_BASE or Render URL.
export const API_BASE: string = DEV
  ? ("/api") // change to ENV_BASE if you are NOT using a Vite proxy in dev
  : (ENV_BASE || "https://aesthetic-ai-backend.onrender.com");

// ---- Axios instance
export const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: false, // using Bearer tokens (no cookies)
  timeout: 90_000,
});

// ---- Attach Bearer token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    (config.headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// ---- Basic 401 handling: clear and redirect to login
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      const next = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/login?next=${next}`;
    }
    return Promise.reject(err);
  }
);

// ---- Util: tiny sleep
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ---- Which errors are safe to retry?
function isRetryableError(err: unknown): boolean {
  const e = err as AxiosError;
  if (e.code === "ECONNABORTED") return true;          // timeout
  if (!e.response) return true;                        // network error
  const s = e.response.status;
  return s === 429 || s === 502 || s === 503 || s === 504;
}

// ---- Retry wrapper with exponential backoff
export async function withRetries<T>(
  fn: () => Promise<T>,
  { tries = 4, baseDelay = 800 }: { tries?: number; baseDelay?: number } = {}
): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i === tries - 1 || !isRetryableError(err)) break;
      const backoff = baseDelay * Math.pow(1.6, i); // 0.8s, 1.28s, 2.05s, ...
      await delay(backoff);
    }
  }
  throw lastErr;
}

// ---- Wake the backend (good for Render free tier cold starts)
export async function waitForBackendReady(
  { maxTries = 8, intervalMs = 3000 }: { maxTries?: number; intervalMs?: number } = {}
): Promise<void> {
  for (let i = 1; i <= maxTries; i++) {
    try {
      await api.get("/status", { timeout: 30_000 });
      return;
    } catch {
      if (i === maxTries) throw new Error("Backend not responding");
      await delay(intervalMs);
    }
  }
}

// ---- Convenience JSON helpers
export async function getJSON<T = unknown>(url: string, config?: AxiosRequestConfig) {
  return withRetries(() => api.get<T>(url, config).then((r) => r.data));
}

export async function postJSON<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig) {
  return withRetries(() => api.post<T>(url, data, config).then((r) => r.data));
}
