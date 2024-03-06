import { useLoadGames } from "@/main/http-queryes/games/load-games";
import { AddGame } from "./add-game";
import { GameCard } from "./game-card";
import { SearchBar } from "./search-bar";

export function GamesTable() {
  const { data: games } = useLoadGames();

  return (
    <>
      <div className="flex gap-3 pb-3">
        <SearchBar />
        <AddGame />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {games?.map((game) => <GameCard key={game.id} gameData={game} />)}
      </div>
    </>
  );
}
