class ResetPasswordPayload {
    password: string;
    confirmPassword: string;

    constructor(token: string, password: string, confirmPassword: string) {
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

export default ResetPasswordPayload;
