import { types } from "../types/Auth";

interface AuthAction {
    type: string;
    payload?: {
        name: string;
    };
}

interface AuthState {
    logged: boolean;
    name?: string;
}

export const AuthReducer = (state: AuthState = { logged: false }, action: AuthAction): AuthState => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
};