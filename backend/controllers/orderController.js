const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const order = require('../models/order');

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const { orderItems, shippingInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paymentInfo } = req.body;
    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id,
    });

    res.status(200).json({
        success: true,
        order,
    });
});

exports.getOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
        return next(new ErrorHandler(`Order not found: ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});

exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        orders,
    });
});

exports.allOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;
    orders.forEach((order) => (totalAmount += order.totalPrice));

    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});

exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400));
    }

    order.orderItems.forEach(async (item) => {
        await updateStock(item.product, item.quantity, next);
    });

    order.orderStatus = req.body.status;
    order.deliveredAt = Date.now();
    await order.save();

    res.status(200).json({
        success: true,
    });
});

async function updateStock(productId, quantity, next) {
    const product = await Product.findById(productId);

    const remainingStock = product.stock - quantity;
    if (remainingStock < 0) {
        return next(new ErrorHandler('No enough stock for this order', 400));
    }

    product.stock = remainingStock;

    await product.save({ validateBeforeSave: false });
}

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler(`Order not found: ${req.params.id}`, 404));
    }

    await order.deleteOne();

    res.status(200).json({
        success: true,
    });
});
