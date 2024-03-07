import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
	const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
	return token ? <Outlet /> : <Navigate to="/signin" replace={true} />;
}
