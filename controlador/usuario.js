'use strict'
var bcrypt = require('bcrypt-nodejs');
var Usuario = require('../modelo/usuario');
var jwt = require('../servicio/jwt');

function test(req, res) {
    res.status(200).send({
        mensaje: 'Ruta de prueba para usuario'
    });
}
function crearUsuario(req, res) {
    var user = new Usuario();
    var params = req.query;
    console.log(params);
    //Cargar objeto
    debugger;
    user.usuario = params.usuario;
    user.colaborador = params.colaborador;
    user.rol = params.rol;
    //Registrar

    if (params.password) {
        // encriptar contraseña
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;
            if (user.usuario != null && user.colaborador != null  && user.rol != null) {
                user.save(function(err,resultado){
                    if(err){
                        res.status(500).send({mensaje:'Error al crear al usuario'});
                    }else{
                        console.log(resultado);
                        if(!resultado){
                            res.status(404).send({mensaje:'No se ha registrado al usuario'});
                        }else{
                            res.status(200).send({user:resultado});
                        }
                    }
                });
                res.status(200)
            } else {
                res.status(200).send({ mensaje: 'Rellena todos los campos' });
            }
        });
    } else {
        res.status(500).send({ mensaje: 'Debes ingresar una contraseña' });
    }
}
function login(req, res) {
    var params = req.query;
    var c_usuario = params.usuario;
    var password =  params.password;

    Usuario.find({usuario: c_usuario},function(err, resData){
        if(err){
            res.status(500).send({mensaje:'Error en la petición'});
        }else{
            console.log(resData);
            if(!resData){
                res.status(404).send({mensaje:'El usuario no existe'});
            }else{
                bcrypt.compare(password,resData[0].password, function(err, check){
                    if(check){
                        if(params.gethash){
                            res.status(200).send({
                                token:jwt.crearToken(resData[0])
                            });
                        }else{
                            res.status(200).send({resData});
                        }
                    }else{
                        res.status(404).send({mensaje:'El usuario no ha podido iniciar sesión'});
                    }
                })
            }   
        }
    });
}
module.exports = {
    test,
    login,
    crearUsuario
}