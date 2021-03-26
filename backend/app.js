// Create express app
const express = require('express');
const app = express();

// Middleware parser
app.use(express.json());

// Middleware cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Import all routes
const productsRoute = require('./routes/productsRoute');
const authRoute = require('./routes/authRoute');

// Set routes
app.use('/api/v1', productsRoute);
app.use('/api/v1', authRoute);

// Middleware errors
const errorMiddleware = require('./middlewares/errors');
app.use(errorMiddleware);

module.exports = app;