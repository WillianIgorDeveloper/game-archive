import { ROUTES } from "@/utils";
import { Link } from "react-router-dom";
import { LogoutBtn } from "@/presentation/components/ui/logout-btn";
import { GamesTable } from "./components/games-table";

export function AppPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="shadow">
        <nav className="container flex items-center justify-between p-3">
          <Link to={ROUTES.HOME}>
            <h1 className="text-lg font-semibold bg-brand-gradient text-transparent bg-clip-text">
              Game Archive
            </h1>
          </Link>
          <LogoutBtn />
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-6 container">
          <GamesTable />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
