import { useEffect, useReducer, type FC, type ReactNode } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "../context/AuthContext";
import type { AuthState } from "../types/Auth";
import type { User } from "../types/User";

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
	loading: false,
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
		}
	}, []);

	const login = (user: User) => {
		dispatch({ type: "LOADING" });
		setTimeout(() => {
			dispatch({ type: "LOGIN", payload: user });
			localStorage.setItem("user", JSON.stringify(user));
		}, 1000);
	};

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
