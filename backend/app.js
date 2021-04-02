// Create express app
const express = require('express');
const app = express();

// Middleware json parser
app.use(express.json());

// Middleware body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// File upload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// Import all routes
const productsRoute = require('./routes/productsRoute');
const authRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');

// Set routes
app.use('/api/v1', productsRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', orderRoute);

// Middleware errors
const errorMiddleware = require('./middlewares/errors');
app.use(errorMiddleware);

module.exports = app;
