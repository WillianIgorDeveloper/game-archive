import { Score } from "@/types/score";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

export async function getScores(): Promise<Score[]> {
  const response = await fetch(`${url}/scores`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem(token)}`,
    },
  });
  const data = await response.json();
  return data.body.scores;
}
