import { ROUTES } from "@/utils/routes";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export function LogoutBtn() {
  const navigate = useNavigate();

  function handleLogount() {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    navigate(ROUTES.HOME);
  }

  return (
    <Button variant="destructive" onClick={handleLogount}>
      Logout
    </Button>
  );
}
