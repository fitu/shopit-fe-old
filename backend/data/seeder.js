const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');
const mockProducts = require('./products');

dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products deleted');

        await Product.insertMany(mockProducts);
        console.log('Products added');
    } catch (error) {
        console.log(error.message);
    } finally {
        process.exit();
    }
};

seedProducts();
