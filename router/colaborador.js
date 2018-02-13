'use strict'
var express = require('express');
var controladorColaborador = require('../controlador/colaborador');
var md_auth = require('../middleware/autenticacion');

var api =  express.Router();   
api.get('',md_auth.ensureAuth,controladorColaborador.test);
api.get('/listarColaboradores',controladorColaborador.listarColaboradores);
api.post('/registrarColaborador',controladorColaborador.registrarColaborador);

module.exports =api;