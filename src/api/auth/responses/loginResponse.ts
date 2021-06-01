import UserApi from '../../models/userApi';

class LoginApi {
    token: string;
    user: UserApi;

    constructor(token: string, user: UserApi) {
        this.token = token;
        this.user = user;
    }
}

export default LoginApi;
