import { useSearchParams } from "react-router-dom";
import { getGames } from "@/main/requests/games/get-games";
import { useQuery } from "@tanstack/react-query";

export function useLoadGames() {
  const [searchParams] = useSearchParams();
  return useQuery({
    queryKey: ["games"],
    queryFn: () => {
      return getGames({ search: searchParams.get("search") ?? "" });
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
