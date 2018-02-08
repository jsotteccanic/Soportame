'use strict'
var express = require('express');
var controladorUsuario = require('../controlador/usuario');
var md_auth = require('../middleware/autenticacion');

var api =  express.Router();
api.get('',md_auth.ensureAuth,controladorUsuario.test);
api.post('/login',controladorUsuario.login);
api.post('/crearUsuario',controladorUsuario.crearUsuario);

module.exports =api;