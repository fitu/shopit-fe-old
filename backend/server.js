// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') {
    const dotenv = require('dotenv');
    dotenv.config({ path: 'backend/config/config.env' });
}

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught exception`);
    process.exit(1);
});

// Connecting to DB
const connectDatabase = require('./config/database');
connectDatabase();

// Setting up cloudinary
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
const app = require('./app');
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle Uhandled Promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise rejection`);
    server.close(() => {
        process.exit(1);
    });
});
