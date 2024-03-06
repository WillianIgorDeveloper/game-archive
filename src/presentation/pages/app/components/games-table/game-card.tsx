import { Game } from "@/@types/game";

export function GameCard({ gameData }: { gameData: Game }) {
  return (
    <div className="p-3 bg-zinc-200 rounded-lg">
      <h3>{gameData.name}</h3>
    </div>
  );
}
