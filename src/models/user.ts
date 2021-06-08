import UserState from '../store/state/models/userState';
import Avatar from './avatar';
import Role from './role';

class User {
    id: string;
    role: Role;
    name: string;
    email: string;
    avatar: Avatar;
    createdAt: string;

    constructor(id: string, role: Role, name: string, email: string, avatar: Avatar, createdAt: string) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }

    static toState(user: User): UserState {
        return new UserState(user.id, user.role, user.name, user.email, Avatar.toState(user.avatar), user.createdAt);
    }
}

export default User;
