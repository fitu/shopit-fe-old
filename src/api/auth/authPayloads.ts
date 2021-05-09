interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    avatar: string; // TODO check this
}

export type { LoginRequest, RegisterRequest };
