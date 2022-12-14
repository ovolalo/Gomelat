'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;

mongoose.createConnection('mongodb://localhost:27017/Gomelat', { 
     useNewUrlParser: true,}
     ,()=>{
    console.log('La Conexion ha sido realizada!!!');

//Crear Servidor y ponerme a escuchar peticiones HTTP
app.listen(port, ()  => {

    console.log('Servidor corriendo en http://localhost:'+port);
});


});