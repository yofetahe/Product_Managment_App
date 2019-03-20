const mongoose = require('mongoose');
require('./dbConnection')(mongoose);

const ProductsSchema = new mongoose.Schema({
    title: {type: String, minlength: [4, 'min length is 4'], required: [true, 'Title is required']},
    price: {type: String, required: [true, 'Price is required']},
    image: {type: String},
    description: {type: String}    
});

const Product = mongoose.model('Products', ProductsSchema);

module.exports = { Product };