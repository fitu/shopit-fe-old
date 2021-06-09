/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Role from '../../models/role';
import UserState from '../../store/state/models/userState';

import AvatarApi from './avatarApi';

class UserApi {
    _id: string;
    avatar: AvatarApi;
    role: Role;
    name: string;
    email: string;
    createdAt: string;

    constructor(_id: string, avatar: AvatarApi, role: Role, name: string, email: string, createdAt: string) {
        this._id = _id;
        this.avatar = avatar;
        this.role = role;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

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
