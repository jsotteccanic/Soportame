'use strict'
var express = require('express');
var controladorUsuario = require('../controlador/usuario');

var api =  express.Router();
api.get('',controladorUsuario.test);
api.post('/login',controladorUsuario.login);
api.post('/crearUsuario',controladorUsuario.crearUsuario);

module.exports =api;