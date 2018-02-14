'use strict'
var express = require('express');
var controladorAtencion =  require('../controlador/atencion');
var md_auth = require('../middleware/autenticacion');

var api =  express.Router();
api.get('',controladorAtencion.test);
api.post('/registrarAtencion',controladorAtencion.registrarAtencion);

module.exports = api;