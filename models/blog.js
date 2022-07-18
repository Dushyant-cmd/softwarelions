const mongoose = require('mongoose');

const blogs_schema = new mongoose.Schema({
    url:{
        type:String,
        required: true
    },
    title: 
    {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const blog = mongoose.model('blog', blogs_schema);

module.exports = blog;