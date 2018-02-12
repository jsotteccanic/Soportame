'use strict'
function iniciarsession() {
    valores = $("#loginForm").form('get values');
    valores.gethash =true;
    $.ajax({
        url: ruta+'/usuario/login',
        type: 'post',
        data: valores,
        success: function (r) {
            debugger;
            sessionStorage.setItem('sesion',r.token);         
            window.location = 'http://192.168.0.12:9090/usuario.html';
        },
        error:function(res){
           alert(res.responseJSON.mensaje);
        }
    });
}