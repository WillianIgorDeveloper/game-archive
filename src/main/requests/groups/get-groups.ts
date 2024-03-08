import { Group } from "@/types/group";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

export async function getGroups(): Promise<Group[]> {
  const response = await fetch(`${url}/groups`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem(token)}`,
    },
  });
  const data = await response.json();
  return data.body.groups;
}
