import { type AuthAction, type AuthState } from "../types/Auth";

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload, loading: false };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null, loading: false };
        case 'LOADING':
            return { ...state, loading: true };
        default:
            return state;
    }
};