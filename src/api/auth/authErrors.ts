class LoginError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export { LoginError };
