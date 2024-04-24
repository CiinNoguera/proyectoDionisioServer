const User = require('../models/user');
const bcryptjs = require('bcryptjs');

async function register(req, res) {
    const { firstname, email, password, role} = req.body;

    if(!email) res.status(400).send({msg: 'Todos los campos son obligatorios'});
    if (!password) res.status(400).send({msg: 'Todos los campos son obligatorios'});
    if(!firstname) res.status(400).send({msg: 'Todos los campos son obligatorios'});

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

    res.status(200).send({ msg: 'Todo OK'});
}

module.exports= {
    register,
};