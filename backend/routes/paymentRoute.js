const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/auth');
const { processPayment, sendStripeAPIKey } = require('../controllers/paymentController');

const router = express.Router();

router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripeAPIKey);

module.exports = router;
