export const types = {
    login: '[auth] login',
    logout: '[auth] logout',
};

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

export const authReducer = (state: AuthState = { logged: false }, action: AuthAction): AuthState => {
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