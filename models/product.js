const mongoose = require('mongoose');

const productsearch_schema = new mongoose.Schema({
    title: 
    {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_src: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

const product = mongoose.model('product', productsearch_schema);

module.exports = product;