import { Badge } from "@/presentation/components/ui/badge";
import { Game } from "@/types/game";
import { Link } from "lucide-react";

export function GameCard({ gameData }: { gameData: Game }) {
  return (
    <div className="p-3 border shadow bg-zinc-50 rounded-lg">
      <div className="flex justify-between items-center">
        <a href="" className="flex items-center gap-2">
          <h3>{gameData.name}</h3>
          <Link size={14} />
        </a>
        <Badge>status</Badge>
      </div>
      <div className="py-2">⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</div>
    </div>
  );
}
