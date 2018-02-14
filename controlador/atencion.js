var Atencion = require('../modelo/atencion');
function test(req, res){
    res.status(200).send({
        mensaje:'Servicio de atención funcionando'
    });
}
function registrarAtencion(req, res) {
    data = req.query;
    var ticket = new Atencion();
    ticket.tipoAtencion = data.tipoAtencion;
    ticket.fecha_inicio = new Date(data.fecha_inicio);
    ticket.fecha_fin = new Date(data.fecha_fin);
    ticket.descripcion = data.descripcion;
    ticket.colaborador = data.colaborador;
    ticket.usuario = data.usuario;

    ticket.save(function (err, res) {
        if (err) {
            res.status(500).send({ mensaje: 'Error al crear la atención' });
        } else {
            console.log(res);
            if (!res) {
                res.status(404).send({ mensaje: 'No se ha registrado la atención' });
            } else {
                res.status(200).send({ atencion: res });
            }
        }
    })
}

module.exports ={
    test,
    registrarAtencion
}