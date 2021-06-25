import Role from '../../../models/role';

import Avatar from './Avatar';

// TODO: add null object
class User {
    constructor(
        public id: string,
        public role: Role,
        public name: string,
        public email: string,
        public avatar: Avatar,
        public createdAt: string,
    ) {}
}

export default User;
