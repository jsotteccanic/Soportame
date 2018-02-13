'use strict'
var mongoose = require('mongoose');
var modelo = mongoose.Schema;

var modeloColaborador = modelo({
    dni: String,
    nombres: String,
    apellidos: String,
    area: String,
    cargo: String,
    sede: String
});

module.exports = mongoose.model('Colaborador', modeloColaborador,'Colaborador');