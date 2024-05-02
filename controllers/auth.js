const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('../utils/jwt');

async function register(req, res) {
    const { firstname, email, password, role} = req.body;

    if(!email) {
        res.status(400).send({msg: 'Todos los campos son obligatorios'});
        return;
    }
    if (!password) {
        res.status(400).send({msg: 'Todos los campos son obligatorios'});
        return;
    }

    const user = new User({
        firstname: firstname,
        email: email.toLowerCase(),
        password: password,
        role: role
    });

   const salt = bcryptjs.genSaltSync(10);
   const hashPassword = bcryptjs.hashSync(password, salt);
   user.password = hashPassword;

   try{
    await user.save();
    res.status(200).send({ msg: 'Usuario guardado'});
   }catch (err) {
    res.status(400).send({msg: `Error al guardar usuario: ${err}` });
   }

}

async function login(req, res) {

    // obtengo datos del lado del cliente
    const { email, password } = req.body;

    // validar datos
    if(!email) {
        res.status(400).send({msg: 'Todos los campos son obligatorios'});
        return;
    }
    if (!password) {
        res.status(400).send({msg: 'Todos los campos son obligatorios'});
        return;
    }

    //verificar si existe el usuario
    try{
        // findOne método de mongoose para buscar
         const user = await User.findOne({ email: email.toLowerCase()});
             // Verificacion de contraseña
         const check = await bcryptjs.compare(password, user.password);

         if(!check) {
            res.status(400).send({msg: 'Usuario o contraseña incorrectos'});
         } else {
            res.status(200).send({access: jwt.createAccessToken(user)});
         }
            
    }catch(err) {
        res.status(500).send({msg: "Usuario inexistente"});
    } 
}
module.exports = {
    register,
    login,
};