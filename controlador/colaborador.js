var Colaborador = require('../modelo/colaborador');

function listarColaboradores(req, res) {
    Colaborador.find({},'dni nombres apellidos',function (err, result) {
        if (err) {
            res.status(500).send({ mensaje: 'Error al realizar la consulta' });
        } else {
            res.status(200).send({
                Colaborador: result
            });
        }
    });

}
function registrarColaborador(req, res) {
    nColaborador = new Colaborador();
    var params = req.query;
    nColaborador.dni = params.dni;
    nColaborador.nombres = params.nombres;
    nColaborador.apellidos = params.apellidos;
    nColaborador.area = params.area;
    nColaborador.cargo = params.cargo;

    nColaborador.save(function (err, colaborador) {
        if (err) {
            res.status(500).send({ mensaje: "Error al crear el colaborador" });
        } else {
            if (!colaborador) {
                res.status(404).send({ mensaje: 'No se puedo guardar el colaborador' });
            } else {
                res.status(200).send({ 'Colaborador': colaborador });
            }
        }
    });

}

function test(req, res) {
    res.status(200).send({ mensaje: "Servicio Colaborador OK!" });
}
module.exports = {
    listarColaboradores,
    test,
    registrarColaborador
}