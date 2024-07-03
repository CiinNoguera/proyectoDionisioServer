const mongoose = require('mongoose');

const opcionesMenu = mongoose.Schema({
    title: String,
    image: String,
    description: String,
    precio: Number,
});

module.exports = mongoose.model('Plato', opcionesMenu);