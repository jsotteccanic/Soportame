'use strict'
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/soportameDB',function(err,res){
    if(err){
        // throw err;
        return false;
    }else{
        // console.log('Conexion correcta!');
        return true;
    }
})

module.exports = mongoose;