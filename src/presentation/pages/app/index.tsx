import { GamesTable } from "./components/games-table";
import { Navbar } from "./components/navbar";

export function AppPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1">
        <section className="py-6 container">
          <GamesTable />
        </section>
      </main>
    </div>
  );
}
