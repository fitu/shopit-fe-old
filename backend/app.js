// Create express app
const express = require('express');
const app = express();

// Middleware parser
app.use(express.json());

// Import all routes
const productsRoute = require('./routes/productsRoute');

// Set routes
app.use('/api/v1', productsRoute);

// Middleware errors
const errorMiddleware = require('./middlewares/errors');
app.use(errorMiddleware);

module.exports = app;