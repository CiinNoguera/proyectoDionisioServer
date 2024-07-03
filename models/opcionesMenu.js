const mongoose = require('mongoose');

const menu = mongoose.Schema({
    title: String,
    description: String,
    charge: Number,
    image: String,
});

module.exports = mongoose.model('Menu', menu);