'use strict'
var express = require('express');
var bodyParser = require('body-parser');



var app = express();
//Interprete correctamente la ruta y que parsee  a json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//lista de routers
var r_usuario = require('./router/usuario');
var r_colaborador = require('./router/colaborador');
var r_atencion = require('./router/atencion');

//configurar header
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas base
app.use('/usuario', r_usuario);
app.use('/colaborador', r_colaborador);
app.use('/atencion', r_atencion);

app.get('/',function(req,res){
    res.status(200).send({mensaje:'Ingresa la ruta del servicio que deseas: http://localhost:8888/algunServicio'});
})

module.exports = app;