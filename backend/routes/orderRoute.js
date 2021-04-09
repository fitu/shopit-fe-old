const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {
    newOrder,
    getOrder,
    getMyOrders,
    allOrders,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');

const router = express.Router();

router.route('/orders/me').get(isAuthenticatedUser, getMyOrders);
router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getOrder);

// TODO replace hardcoded
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);
router
    .route('/admin/order/:id')
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
