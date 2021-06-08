import UserApi from '../../models/userApi';

class UpdateProfileResponse {
    user: UserApi;

    constructor(user: UserApi) {
        this.user = user;
    }
}

export default UpdateProfileResponse;
