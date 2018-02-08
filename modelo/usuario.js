'use strict'

var mongoose = require('mongoose');
var modelo = mongoose.Schema;

var modeloUsuario = modelo({
    usuario: String,
    password: String,
    colaborador: {type: modelo.ObjectId, ref:'Colaborador'},
    rol:String
});

module.exports = mongoose.model('Usuario', modeloUsuario);