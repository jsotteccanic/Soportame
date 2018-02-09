
var usuario;
var tiempo;
(function () {
$.ajax({
        url: 'php/enrutador.php?type=2',
        type: 'post',
        success: function (r) {
            datos = JSON.parse(r);
            console.log(datos);
            if (datos == '0') {
                location.href = 'login.html';
            }
        }
    });
    // traer usuario
    $.ajax({
        url: 'php/enrutador.php?type=5',
        type: 'post',
        success: function (r) {
            datos = JSON.parse(r);
            $('#dni').empty();
            $('#dni').append('<option value="">Seleccione</option>');
            for (i = 0; i < datos.length; i++) {
                $('#dni').append("<option value='" + datos[i]['id_cliente'] + "'>" + datos[i]['nom_cliente'] + "<option>");
            }
            $('#dni').dropdown();
        }
    });
    //Traer tipo
    $.ajax({
        url: 'php/enrutador.php?type=6',
        type: 'post',
        success: function (r) {
            datos = JSON.parse(r);
            $('#tipoAtencion').empty();
            $('#tipoAtencion').append('<option value="">Seleccione</option>');
            for (i = 0; i < datos.length; i++) {
                $('#tipoAtencion').append("<option value='" + datos[i]['id_tipo'] + "'>" + datos[i]['nombre'] + "<option>");
            }
            $('#tipoAtencion').dropdown();
        }
    });
})();

function mostrarModal() {
    $.ajax({
        url: 'php/enrutador.php?type=7',
        type: 'post',
        success: function (r) {
            datos = JSON.parse(r);
            tiempo= datos[0]['fecha'];
            $("#modal").modal('show');
        }
    });
    // date = new Date();
    // tiempo = date.getFullYear()+"-"+date.getUTCMonth()+"-"+date.getUTCDate()+" "+date.getUTCHours()+"-"+date.getUTCMinutes()+"-"+date.getUTCSeconds();
    // // tiempo = date.getUTCFullYear() + '-' +
    // //     ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
    // //     ('00' + date.getUTCDate()).slice(-2) + ' ' +
    // //     ('00' + date.getHours()).slice(-2) + ':' +
    // //     ('00' + date.getMinutes()).slice(-2) + ':' +
    // //     ('00' + date.getSeconds()).slice(-2);
    // console.log(tiempo);
    

}
function atender() {
    //valores = $("#formulario").form('get values');
    valores = {};
    valores.dni = $("#dni option:selected").val();
    valores.tipoAtencion = $("#tipoAtencion option:selected").val();
    valores.detalle = $("#detalle").val();
    valores.t_inicio = tiempo;
    console.log(valores);
    $.ajax({
        url: 'php/enrutador.php?type=4',
        data: valores,
        type: 'post',
        success: function (r) {
            rpt = JSON.parse(r);
            if (rpt[0]['ok'] == '1') {

                $("#formulario").form('clear');
                $("#formulario").form('reset');
                // $('#tipoAtencion').dropdown();
                //  $('#dni').dropdown();
                alert('Se registro satisfactoriamente!');
            }
            else {
                alert('no eres xevere');
            }
        }
    });


}