const User = require('../models/user');
const bcryptjs = require('bcryptjs');

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
    console.log('todo OK');
    res.status(200).send({msg: 'controlador funcionando'})
}
module.exports= {
    register,
    login,
};