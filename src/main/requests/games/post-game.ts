import { newGame } from "@/types/game";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

export async function postGame(game: newGame) {
  await fetch(`${url}/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem(token)}`,
    },
    body: JSON.stringify(game),
  });
}
