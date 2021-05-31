import UserResponse from '../../models/userResponse';

class RegisterResponse {
    token: string;
    user: UserResponse;

    constructor(token: string, user: UserResponse) {
        this.token = token;
        this.user = user;
    }
}

export default RegisterResponse;
