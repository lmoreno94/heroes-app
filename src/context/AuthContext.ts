import { createContext, type Dispatch } from 'react';
import type { AuthAction } from '../types/Auth';

interface AuthState {
    logged: boolean;
    name?: string;
}

interface AuthContextProps {
    user: AuthState;
    dispatch: Dispatch<AuthAction>;
}

export const initialState: AuthState = { logged: false };

export const AuthContext = createContext<AuthContextProps>({
    user: initialState,
    dispatch: () => null,
});