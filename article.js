'use strict'


var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article');

var controller = {

datosGomelat: (req, res) => {
var hola = req.body.hola;

return res.status(200).send({
    proyecto: 'Gomelat',
    autor: 'Carlos Mejia',
    hola
});
},

test: (req, res) =>
{
    return res.status(200).send(
        {
           message: 'Soy la accion test de mi controler de articulos' 
        }
    );
},


save: (req, res) => {
//Recoger parametros por post
var params = req.body;
console.log(params);

//validar datos (validator)

try{
var validate_title = !validator.isEmpty(params.title);
var validate_content = !validator.isEmpty(params.content);
}catch(err){
return res.status(200).send({
    status: 'error',
   message: 'Faltan datos por enviar'
});
}

if(validate_title &&  validate_content){
   //Crear el objeto a guardar

   var article = new Article();
    //asignar valores 
    article.title = params.title;
    article.content = params.content;
    article.image = null;
    //Guardar Articulo
    article.save((err, articleStored) =>
    {
if(err || !articleStored){
    return res.status(400).send({
        status: 'error',
        message: 'El articulo no se ha guardado'

});
    }


    //devolver respuesta

    return res.status(200).send(
        {
            status: 'success',
            article: articleStored
    });

});
} else {
    return res.status(200).send({
        status: 'error',
        message: 'Los Datos no son validos'
});
}

}

};  //end controller

module.exports = controller;