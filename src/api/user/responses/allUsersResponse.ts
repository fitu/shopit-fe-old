import UserApi from '../../models/userApi';

class AllUsersResponse {
    users: Array<UserApi>;
    count: number;

    constructor(users: Array<UserApi>, count: number) {
        this.users = users;
        this.count = count;
    }
}

export default AllUsersResponse;
