import type { User } from "./User";

export const types = {
    login: '[AUTH] - LogIn',
    logout: '[AUTH] - LogOut',
};

export type AuthAction = 
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'LOADING' };

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
}