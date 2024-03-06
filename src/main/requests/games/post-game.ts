import { newGame } from "@/@types/game";

export async function postGame(game: newGame) {
  await fetch("http://localhost:2000/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
}
