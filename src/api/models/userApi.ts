/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Role from '../../models/role';
import UserState from '../../store/state/models/userState';

import AvatarApi from './avatarApi';

class UserApi {
    constructor(
        public _id: string,
        public avatar: AvatarApi,
        public role: Role,
        public name: string,
        public email: string,
        public createdAt: string,
    ) {}

    static toState(userApi: UserApi): UserState {
        return new UserState(
            userApi._id,
            userApi.role,
            userApi.name,
            userApi.email,
            AvatarApi.toState(userApi.avatar),
            userApi.createdAt,
        );
    }
}

export default UserApi;
