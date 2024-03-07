import { Game } from "@/types/game";

type getGamesParams = {
  search: string;
};

export async function getGames({ search = "" }: getGamesParams): Promise<Game[]> {
  const response = await fetch(
    "http://localhost:2000/games?" + new URLSearchParams({ search: search })
  );
  const data = await response.json();
  return data.body.games;
}
