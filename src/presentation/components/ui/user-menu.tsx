import { useLoadUser } from "@/main/http-queryes/users/load-user";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { LogoutBtn } from "./logout-btn";

export function UserMenu() {
  const { data: user } = useLoadUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Profle</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>@{user?.tag}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
