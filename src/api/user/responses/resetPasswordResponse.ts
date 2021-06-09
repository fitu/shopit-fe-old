import UserApi from '../../models/userApi';

class ResetPasswordResponse {
    token: string;
    user: UserApi;

    constructor(token: string, user: UserApi) {
        this.token = token;
        this.user = user;
    }
}

export default ResetPasswordResponse;
