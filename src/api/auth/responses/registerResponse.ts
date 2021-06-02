import UserApi from '../../models/userApi';

class RegisterApi {
    token: string;
    user: UserApi;

    constructor(token: string, user: UserApi) {
        this.token = token;
        this.user = user;
    }
}

export default RegisterApi;
