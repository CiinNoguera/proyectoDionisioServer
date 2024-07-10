const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    title: String,
    description: String,
    charge: Number,
    image: String,
});

module.exports = mongoose.model('Menu', MenuSchema);