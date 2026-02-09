// src/api/auth.ts
import { api, postJSON } from "./client";

export type User = {
  id: string;
  email: string;
  name?: string;
  phone?: string;
};

export type AuthResponse = {
  token: string;
  user: User;
};

// Register new user
export async function signup(email: string, password: string) {
  const data = await postJSON<AuthResponse>("/signup", { email, password });
  return data;
}

// Login existing user
export async function login(email: string, password: string) {
  const data = await postJSON<AuthResponse>("/login", { email, password });
  return data;
}

// Get user profile (requires Authorization header; handled by axios interceptor)
export async function getProfile(id: string) {
  const { data } = await api.get<User>(`/profile/${id}`);
  return data;
}

// Update user profile
export async function updateProfile(id: string, body: Partial<User>) {
  const { data } = await api.put<User>(`/profile/${id}`, body);
  return data;
}
