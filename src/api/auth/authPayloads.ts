class LoginPayload {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

class RegisterPayload {
    name: string;
    email: string;
    password: string;
    avatar: string; // TODO check this

    constructor(name: string, email: string, password: string, avatar: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}

export { LoginPayload, RegisterPayload };
