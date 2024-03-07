import { Game } from "@/types/game";

export function GameCard({ gameData }: { gameData: Game }) {
  return (
    <div className="p-3 border shadow bg-zinc-50 rounded-lg">
      <h3>{gameData.name}</h3>
    </div>
  );
}
