import { Game } from "@/@types/game";
import { postGame } from "@/main/requests/games/post-game";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateGame() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postGame,
    onSuccess: (_, newGame) => {
      queryClient.setQueryData(["games"], (currentGames: Game[]) => {
        if (currentGames) {
          return [...currentGames, newGame];
        } else {
          return [newGame];
        }
      });
    },
  });
}
