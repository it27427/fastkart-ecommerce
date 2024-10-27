const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({});

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;
