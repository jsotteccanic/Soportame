'use strict'
var jwt = require('jwt-simple');
var moment =  require('moment');
var secret = 'patitaDeLeon';
exports.crearToken=  function(user){
    var token ={
        colaborador : user.colaborador,
        iat:moment().unix(),
        exp:moment().add(30,'days').unix
    };
    return jwt.encode(token,secret);
};