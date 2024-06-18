const jwt = require('../utils/jwt');


function asureAuth(req, res, next) {

    // verificamos que llegue le token
    if(!req.headers.authorization) {
        res.status(403).send({msg: 'La petición no tiene cabecera'});
    }

    //quitamos la palabra Bearer al token 
    const token = req.headers.authorization.replace('Bearer ', '');
    
    try {
    //cuando llega el token, recibimos el playload (datos) 
        const payload = jwt.decode(token);
    // sacamos la fecha de expiración
        const { exp } = payload;
    // sacamos la fecha actual
        const currentData = new Date().getTime();

    // si el token ha expirado..
    if (exp <= currentData) {
        return res.status(400).send({msg: 'El token ha expirado'});

    }

    req.user = payload;
    next();

    } catch (error) {
    // msj token invalido 
        return res.status(400).send({msg: 'Token Invalido'});
    }

}

module.exports = {
    asureAuth,
};