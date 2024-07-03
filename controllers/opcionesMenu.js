// crear plato..

async function createMenu(req, res) {
    console.log(req.boby);
    res.status(200).send({msg: 'todo ok'});
}

// obtener plato..

// actualizar plato..

// eliminar plato..

module.exports = {
    createMenu,
};