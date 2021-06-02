import UserApi from '../../api/models/userApi';
import Role from '../../models/role';
import User from '../../models/user';

import AvatarState from './avatarState';

class UserState {
    id: string;
    role: Role;
    name: string;
    email: string;
    avatar: AvatarState;
    createdAt: string;

    constructor(id: string, role: Role, name: string, email: string, avatar: AvatarState, createdAt: string) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }

    static fromModelToState(user: User): UserState {
        return new UserState(
            user.id,
            user.role,
            user.name,
            user.email,
            AvatarState.fromModelToState(user.avatar),
            user.createdAt,
        );
    }

    static fromStateToModel(userState: UserState): User {
        return new User(
            userState.id,
            userState.role,
            userState.name,
            userState.email,
            AvatarState.fromStateToModel(userState.avatar),
            userState.createdAt,
        );
    }

    static fromApiToState(userApi: UserApi): UserState {
        return new UserState(
            userApi._id,
            userApi.role,
            userApi.name,
            userApi.email,
            AvatarState.fromApiToState(userApi.avatar),
            userApi.createdAt,
        );
    }
}

export default UserState;
