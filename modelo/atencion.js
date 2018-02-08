'use strict'

var mongoose = require('mongoose');
var modelo = mongoose.Schema;

var modeloAtencion = modelo({
    tipoAtencion: String,
    fecha: Date,
    descripcion: String,
    colaborador: {type: modelo.ObjectId, ref:'Colaborador'},
    usuario: {type: modelo.ObjectId, ref:'Usuario'}
});

module.exports = mongoose.model('Atencion', modeloAtencion);