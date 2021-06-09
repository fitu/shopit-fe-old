import Role from '../../../models/role';

class UpdateUserPayload {
    name: string;
    email: string;
    role: Role;

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

export default UpdateUserPayload;
