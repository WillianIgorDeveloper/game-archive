import { useLoadUser } from "@/main/http-queryes/users/load-user";
import { useLoadGroups } from "@/main/http-queryes/groups/load-groups";
import { AtSignIcon, MenuSquare, PlusCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { LogoutBtn } from "./logout-btn";
import { Button } from "./button";

export function UserMenu() {
  const { data: user } = useLoadUser();
  const { data: groups } = useLoadGroups();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuSquare size={28} className="text-blue-600" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center gap-1">
            <AtSignIcon size={20} />
            {user?.tag ?? "Carregando..."}
          </SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <div className="flex flex-col">
            <h2>Groups</h2>
            <ul className="py-2">
              {groups?.map((group) => (
                <li className="pl-3 py-2">{group?.tag}</li>
              ))}
            </ul>
            <Button variant="link" className="items-center gap-1 self-center">
              <PlusCircle size={16} /> Create a group
            </Button>
          </div>
        </div>
        <div className="pt-6">
          <LogoutBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
}
