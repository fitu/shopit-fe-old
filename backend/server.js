// Setting up config file
// TODO: use another file for production, not env vars
if (process.env.NODE_ENV !== 'PRODUCTION') {
    const dotenv = require('dotenv');
    dotenv.config({ path: 'backend/config/config.env' });
}

// Connecting to DB
const connectDatabase = require('./db/database');
connectDatabase();

// Setting up cloudinary
const setUpCloudinary = require('./services/cloudinary');
setUpCloudinary();

// Start the server
const app = require('./app');
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle errors
const { handleErrors } = require('./utils/errorHandler');
handleErrors(server);
