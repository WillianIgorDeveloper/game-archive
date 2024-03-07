import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/presentation/components/ui/input";
import { useSearchParams } from "react-router-dom";
import { useLoadGames } from "@/main/http-queryes/games/load-games";

export function SearchBar() {
  const [_, setSearchParams] = useSearchParams();
  const { refetch } = useLoadGames();

  const handleSearch = useDebouncedCallback(async (term: string) => {
    setSearchParams({ search: term });
    await new Promise((resolve) => setTimeout(resolve, 10));
    refetch();
  }, 500);

  return (
    <Input
      placeholder="Search game"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
