import Role from '../../../models/role';

import AvatarState from './avatarState';

class UserState {
    constructor(
        public id: string,
        public role: Role,
        public name: string,
        public email: string,
        public avatar: AvatarState,
        public createdAt: string,
    ) {}
}

export default UserState;
