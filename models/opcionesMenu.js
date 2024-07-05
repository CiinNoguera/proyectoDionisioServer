const mongoose = require('mongoose');

const opcionesMenu = mongoose.Schema({
    title: String,
    description: String,
    charge: Number,
    image: String,
});

module.exports = mongoose.model('Menu', opcionesMenu);