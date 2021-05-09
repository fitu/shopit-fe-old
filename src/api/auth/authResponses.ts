interface BaseResponse {
    success: boolean;
}

interface LoginResponse extends BaseResponse {
    success: boolean;
    token: string;
    user: {
        avatar: {
            public_id: string;
            url: string;
        };
        role: string;
        _id: string;
        name: string;
        email: string;
        password: string;
        createdAt: string;
    };
}

type RegisterResponse = LoginResponse;

interface LogoutResponse extends BaseResponse {
    message: string;
}

export type { LoginResponse, RegisterResponse, LogoutResponse };
