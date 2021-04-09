const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // TODO: use another file for production, not env vars
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err,
            stack: err.stack,
        });
    }

    let error = { ...err };
    error.message = err.message;

    // Wrong Mongoose object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).join('. ');
        error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Duplicate Key Errors
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        error = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT Error
    if (err.name === 'JsonWebTokenError') {
        const message = 'JSON Web Token is invalid. Try again';
        error = new ErrorHandler(message, 400);
    }

    // Handling Expired JWT Error
    if (err.name === 'TokenExpiredError') {
        const message = 'JSON Web Token is expired. Try again';
        error = new ErrorHandler(message, 400);
    }

    // Default error
    res.status(error.statusCode).json({
        success: false,
        message: error.message || ' Internal server error',
    });
};
