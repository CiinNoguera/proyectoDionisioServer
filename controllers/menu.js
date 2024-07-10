const image = require('../utils/getFileName');
const Menu = require('../models/menu');

async function createMenu(req, res) {
  
  const menu = new Menu(req.body);
  console.log(menu);

  if(req.files.image) {
    const imagePath = image.getFileName(req.files.image);
    menu.image = imagePath;
  }
  try{
    await menu.save();
    res.status(200).send({ msg: 'Nuevo menú guardado'});
   }catch (err) {
    res.status(500).send({msg: `Error al guardar menú` });
   }
  
}

// obtener plato..

// actualizar plato..

// eliminar plato..

module.exports = {
    createMenu,
};