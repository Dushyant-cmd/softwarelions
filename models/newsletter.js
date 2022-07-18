const mongoose = require('mongoose');

const newsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date_time: {
        type: String,
        required: true
    }
})

const newsletter = mongoose.model('newsletter', newsLetterSchema);

module.exports = newsletter;