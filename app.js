'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var r_usuario = require('./router/usuario');
//Interprete correctamente la ruta y que parsee  a json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutas
app.use('/api', r_usuario);

app.get('/',function(req,res){
    res.status(200).send({mensaje:'Ingresa la ruta del servicio que deseas: http://localhost:8888/algunServicio'});
})

module.exports = app;