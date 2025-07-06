import { createContext } from 'react';
import type { User } from '../types/User';
import type { AuthState } from '../types/Auth';

interface AuthContextProps extends AuthState {
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);