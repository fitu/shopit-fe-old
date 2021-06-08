import Role from '../../../models/role';
import User from '../../../models/user';

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

    static toModel(userState: UserState): User {
        return new User(
            userState.id,
            userState.role,
            userState.name,
            userState.email,
            AvatarState.toModel(userState.avatar),
            userState.createdAt,
        );
    }
}

export default UserState;
