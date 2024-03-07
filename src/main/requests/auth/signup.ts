import { Credentials } from "@/types/auth";

const url = import.meta.env.VITE_API_URL;

export async function signup(params: Credentials) {
  const response = await fetch(`${url}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
}
