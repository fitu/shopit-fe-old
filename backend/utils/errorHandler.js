class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

const handleErrors = (server) => {
    // Handle Uncaught exceptions
    process.on('uncaughtException', (err) => {
        console.log(`Error: ${err.message}`);
        console.log(`Shutting down the server due to Uncaught exception`);
        process.exit(1);
    });

    // Handle Uhandled Promise rejections
    process.on('unhandledRejection', (err) => {
        console.log(`Error: ${err.message}`);
        console.log(`Shutting down the server due to Unhandled Promise rejection`);
        server.close(() => {
            process.exit(1);
        });
    });
};

module.exports = {
    ErrorHandler,
    handleErrors,
};
