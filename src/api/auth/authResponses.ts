class AvatarResponse {
    public_id: string;
    url: string;

    constructor(publicId: string, url: string) {
        this.public_id = publicId;
        this.url = url;
    }
}
class UserResponse {
    avatar: AvatarResponse;
    role: string;
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;

    constructor(
        avatar: AvatarResponse,
        role: string,
        id: string,
        name: string,
        email: string,
        password: string,
        createdAt: string,
    ) {
        this.avatar = avatar;
        this.role = role;
        this._id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }
}
class LoginResponse {
    token: string;
    user: UserResponse;

    constructor(token: string, user: UserResponse) {
        this.token = token;
        this.user = user;
    }
}

class RegisterResponse {
    token: string;
    user: UserResponse;

    constructor(token: string, user: UserResponse) {
        this.token = token;
        this.user = user;
    }
}

class LogoutResponse {
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}

export { LoginResponse, RegisterResponse, LogoutResponse };
