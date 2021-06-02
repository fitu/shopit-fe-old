import UserApi from '../../models/userApi';

class UpdatePasswordResponse {
    token: string;
    user: UserApi;

    constructor(token: string, user: UserApi) {
        this.token = token;
        this.user = user;
    }
}

export default UpdatePasswordResponse;
