import UserApi from '../../models/userApi';

class UserDetailsResponse {
    user: UserApi;

    constructor(user: UserApi) {
        this.user = user;
    }
}

export default UserDetailsResponse;
