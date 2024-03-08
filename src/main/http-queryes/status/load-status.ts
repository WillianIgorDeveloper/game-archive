import { useQuery } from "@tanstack/react-query";
import { getStatus } from "@/main/requests/status/get-status";

export function useLoadStatus() {
  return useQuery({
    queryKey: ["status"],
    queryFn: getStatus,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
