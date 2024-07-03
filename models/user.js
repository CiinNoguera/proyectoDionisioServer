const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    firstName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String,

});

module.exports = mongoose.model('User', UserSchema);