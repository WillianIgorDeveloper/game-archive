import { Status } from "@/types/status";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

export async function getStatus(): Promise<Status[]> {
  const response = await fetch(`${url}/status`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem(token)}`,
    },
  });
  const data = await response.json();
  return data.body.status;
}
