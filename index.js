'use strict'
var cnx = require('./conexion');
var app = require('./app');

var puerto = process.env.PORT || 8888;

if (cnx.connect) {
    app.listen(puerto, function (err, res) {
        console.log("Servidor activo!");
    })
} else {
    console.log('Error al conectarse con la bd');
}