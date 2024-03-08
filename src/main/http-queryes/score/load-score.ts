import { useQuery } from "@tanstack/react-query";
import { getScores } from "@/main/requests/score/get-scores";

export function useLoadScore() {
  return useQuery({
    queryKey: ["scores"],
    queryFn: getScores,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
