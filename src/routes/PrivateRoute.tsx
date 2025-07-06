import { useEffect, type FC } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: FC = () => {
	const { isAuthenticated, user } = useAuth();

	useEffect(() => {
		if (user?.id) {
			console.log(`User ID: ${user.id}`);
		}
	}, [user?.id]);

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
