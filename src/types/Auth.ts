export const types = {
    login: '[AUTH] - LogIn',
    logout: '[AUTH] - LogOut',
};

export type AuthAction = {
    type: string;
    payload?: {
        name: string;
    };
};