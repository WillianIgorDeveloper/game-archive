import { Game } from "@/@types/game";

export async function getGames(): Promise<Game[]> {
  const response = await fetch("http://localhost:2000/games");
  const data = await response.json();
  return data.body.games;
}
