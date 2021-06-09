import UserApi from '../../models/userApi';

class CurrentUserResponse {
    user: UserApi;

    constructor(user: UserApi) {
        this.user = user;
    }
}

export default CurrentUserResponse;
