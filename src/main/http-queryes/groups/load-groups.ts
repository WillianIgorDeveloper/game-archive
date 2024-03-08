import { useQuery } from "@tanstack/react-query";
import { getGroups } from "@/main/requests/groups/get-groups";

export function useLoadGroups() {
  return useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
