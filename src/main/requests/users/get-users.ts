import { User } from "@/types/user";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

export async function getUser(): Promise<User> {
  const response = await fetch(`${url}/users`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem(token)}`,
    },
  });
  const data = await response.json();
  console.log(data.body.user);
  return data.body.user;
}
