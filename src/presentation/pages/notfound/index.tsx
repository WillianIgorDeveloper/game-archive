import { Button } from "@/presentation/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-9xl font-black bg-brand-gradient text-transparent bg-clip-text">
        404
      </h1>
      <p className="px-3">We couldn't find the page you were looking for.</p>
      <Button variant="link" className="inline">
        <Link to={ROUTES.HOME}>Go back to the homepage.</Link>
      </Button>
    </div>
  );
}
