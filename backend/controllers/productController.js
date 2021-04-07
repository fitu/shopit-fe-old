const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary');

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    let images = [];
    if (typeof req.body.images === 'string') {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'products',
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    req.body.images = imagesLinks;
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

exports.getProducts = async (req, res, next) => {
    const resultsPerPage = 8;
    const productCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(), req.query);
    const products = await apiFeatures.search().filter().pagination(resultsPerPage).query;

    res.status(200).json({
        success: true,
        productCount,
        resultsPerPage,
        products,
    });
};

exports.getAdminProducts = async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products,
    });
};

exports.getProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    let images = [];
    if (typeof req.body.images === 'string') {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    let imagesLinks = [];
    if (images != undefined) {
        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: 'products',
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }
    }

    req.body.images = imagesLinks;

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        updatedProduct,
    });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    await product.delete();
    res.status(200).json({
        success: true,
        message: 'Product deleted',
    });
});

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find((r) => r.user.toString() === req.user.id.toString());
    if (isReviewed) {
        product.reviews.forEach((r) => {
            if (r.user.toString() == req.user.id.toString()) {
                r.comment = comment;
                r.rating = rating;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        review,
    });
});

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    const reviews = product.reviews.filter((review) => review._id.toString() != req.query.id.toString());

    const ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        { reviews, ratings, numOfReviews },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
});
