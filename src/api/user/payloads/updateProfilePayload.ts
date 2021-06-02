class UpdateProfilePayload {
    name: string;
    email: string;
    avatar: string; // TODO: check this

    constructor(name: string, email: string, avatar: string) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
    }
}

export default UpdateProfilePayload;
