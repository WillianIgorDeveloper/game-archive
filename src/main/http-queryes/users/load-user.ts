import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/main/requests/users/get-users";

export function useLoadUser() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
