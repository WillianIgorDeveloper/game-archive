import { getGames } from "@/main/requests/games/get-games";
import { useQuery } from "@tanstack/react-query";

export function useLoadGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });
}
