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

export default RegisterPayload;
