import { Game } from "@/types/game";

type getGamesParams = {
  search: string;
};

export async function getGames({ search = "" }: getGamesParams): Promise<Game[]> {
  const response = await fetch(
    "http://localhost:2000/games?" + new URLSearchParams({ search: search }),
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(
          import.meta.env.VITE_TOKEN_NAME
        )}`,
      },
    }
  );

  if (response.status === 400) {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
  }

  const data = await response.json();
  return data.body.games;
}
