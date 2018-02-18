'use strict'

var mongoose = require('mongoose');
var modelo = mongoose.Schema;

var modeloAtencion = modelo({
    tipoAtencion: String,
    fecha_inicio: Date,
    fecha_fin: Date,
    descripcion: String,
    colaborador: {type: modelo.ObjectId, ref:'Colaborador'},
    usuario: {type: modelo.ObjectId, ref:'Colaborador'},
    abierto: Boolean
});

module.exports = mongoose.model('Atencion', modeloAtencion,'Atencion');