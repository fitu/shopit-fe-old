/* eslint-disable no-underscore-dangle */
import Role from '../../models/role';

import AvatarResponse from './avatarResponse';

class UserResponse {
    avatar: AvatarResponse;
    role: Role;
    _id: string;
    name: string;
    email: string;
    createdAt: string;

    constructor(avatar: AvatarResponse, role: Role, _id: string, name: string, email: string, createdAt: string) {
        this.avatar = avatar;
        this.role = role;
        this._id = _id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }
}

export default UserResponse;
