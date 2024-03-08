import { useLoadGames } from "@/main/http-queryes/games/load-games";
import { AddGame } from "./add-game";
import { GameCard } from "./game-card";
import { SearchBar } from "./search-bar";
// import { FiltersBtn } from "./filters-btn";
import { SkeletonLoader } from "./skeleton-loader";

export function GamesTable() {
  const { data: games, isLoading } = useLoadGames();

  return (
    <>
      <div className="flex gap-3 pb-3">
        <SearchBar />
        {/* <FiltersBtn /> */}
        <AddGame />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          games?.map((game) => <GameCard key={game.id} gameData={game} />)
        )}
      </div>
    </>
  );
}
