import { newGame } from "@/types/game";

export async function postGame(game: newGame) {
	await fetch("http://localhost:2000/games", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify(game),
	});
}
