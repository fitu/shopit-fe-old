const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const errorMiddleware = require('./middlewares/errors');

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Import routes and set them
const productsRoute = require('./routes/productsRoute');
const authRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');
const paymentRoute = require('./routes/paymentRoute');

app.use('/api/v1', productsRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', paymentRoute);
app.use(errorMiddleware);

// TODO: use another file for production, not env vars
if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

module.exports = app;
