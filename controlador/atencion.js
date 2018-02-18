var Atencion = require('../modelo/atencion');
function test(req, res){
    res.status(200).send({
        mensaje:'Servicio de atención funcionando'
    });
}
function registrarAtencion(req, res) {
    data = req.body;
    var ticket = new Atencion();
    ticket.tipoAtencion = data.tipoAtencion;
    ticket.fecha_inicio = new Date();
    if(data.fecha_fin){
        ticket.fecha_fin = new Date(data.fecha_fin);
    }    
    ticket.descripcion = data.descripcion;
    ticket.colaborador = data.colaborador;
    ticket.usuario = req.user.colaborador;

    ticket.save(function (err, regTicket) {
        if (err) {
            res.status(500).send({ mensaje: 'Error al crear la atención' });
        } else {
            console.log(regTicket);
            if (!regTicket) {
                res.status(404).send({ mensaje: 'No se ha registrado la atención' });
            } else {
                res.status(200).send({ atencion: regTicket });
            }
        }
    })
}
function listarAtenciones(req, res) {
    Atencion.find({},function (err, result) {
        if (err) {
            res.status(500).send({ mensaje: 'Error al realizar la consulta' });
        } else {
            res.status(200).send({
                atencion: result
            });
        }
    });

}
module.exports ={
    test,
    registrarAtencion,
    listarAtenciones
}