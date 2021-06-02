/* eslint-disable no-underscore-dangle */
import Role from '../../models/role';

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
}

export default UserApi;
