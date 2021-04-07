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

// Import routes
const productsRoute = require('./routes/productsRoute');
const authRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');
const paymentRoute = require('./routes/paymentRoute');

// Set routes
app.use('/api/v1', productsRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', paymentRoute);

const path = require('path');
if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

// Middleware errors
const errorMiddleware = require('./middlewares/errors');
app.use(errorMiddleware);

module.exports = app;
