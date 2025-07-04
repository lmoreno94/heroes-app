import { useReducer, type FC, type ReactNode } from "react";
import { AuthReducer,  } from "../reducers/AuthReducer";
import { AuthContext, initialState } from "../context/AuthContext";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};