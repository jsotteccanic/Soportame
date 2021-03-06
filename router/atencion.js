'use strict'
var express = require('express');
var controladorAtencion =  require('../controlador/atencion');
var md_auth = require('../middleware/autenticacion');

var api =  express.Router();
api.get('',controladorAtencion.test);
api.post('/registrarAtencion',md_auth.ensureAuth, controladorAtencion.registrarAtencion);
api.get('/listarAtenciones',md_auth.ensureAuth,controladorAtencion.listarAtenciones);
api.put('/cerrarAtencion/:id',md_auth.ensureAuth,controladorAtencion.cerrarAtencion);

module.exports = api;