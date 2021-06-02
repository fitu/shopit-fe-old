import UserApi from '../../models/userApi';

class UpdateUserResponse {
    user: UserApi;

    constructor(user: UserApi) {
        this.user = user;
    }
}

export default UpdateUserResponse;
