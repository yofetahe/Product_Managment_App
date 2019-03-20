const mongoose = require('mongoose');
require('./dbConnection')(mongoose);

const ProductsSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: String},
    image: {type: String},
    description: {type: String}    
});

const Product = mongoose.model('Products', ProductsSchema);

module.exports = { Product };