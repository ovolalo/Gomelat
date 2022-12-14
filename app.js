'use strict'

//cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-Parser');
//Ejecutar express (Http)
var app = express();
//Cargar ficheros

var article_routes = require('./routes/article');

//anadir prefijos
app.use('/api', article_routes);


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//CORS



//exportar modulos (Fichero Actual)
module.exports = app;