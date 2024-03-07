import { Game } from "@/types/game";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN_NAME;

type getGamesParams = {
  search: string;
};

export async function getGames({ search = "" }: getGamesParams): Promise<Game[]> {
  const response = await fetch(
    `${url}/games?${new URLSearchParams({ search: search })}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(token)}`,
      },
    }
  );
  const data = await response.json();
  return data.body.games;
}
