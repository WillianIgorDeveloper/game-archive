import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { UserMenu } from "@/presentation/components/ui/user-menu";

export function Navbar() {
  return (
    <header className="shadow">
      <nav className="container flex items-center justify-between p-3">
        <Link to={ROUTES.HOME}>
          <h1 className="text-lg font-semibold bg-brand-gradient text-transparent bg-clip-text">
            Game Archive
          </h1>
        </Link>

        <UserMenu />
      </nav>
    </header>
  );
}
