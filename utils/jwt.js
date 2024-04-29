const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_KEY = process.env.JWT_KEY;

function createAccessToken(user) {
    //fecha expiracion token
    const expToken = new Date();
    //setHours establece las hs de un objeto - getHours devuelve la hs actual del objeto 
    expToken.setHours(expToken.getHours() + 3);

    //credenciales (estan detras del token)
    const payload = {
        tpken_type: 'access',
        user_id: user._id,
        iat: Date.now(),
        exp: expToket.getTime(),
    }
    //devolver token
    return jwt.sign(payload, JWT_KEY);
}

module.exports = {
    createAccessToken,
}