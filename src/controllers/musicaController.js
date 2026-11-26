var musicaModel = require("../models/musicaModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuarioServer;
    var genero = req.body.generoServer;

    if (nome == undefined || tempo == undefined || idUsuario == undefined || genero == undefined) {
        return res.status(400).send("Dados da música undefined!");
    }

    genero = genero.trim();

    musicaModel.buscarGenero(genero).then(function (resultado) {
        if (resultado.length > 0) {
            return resultado[0].id;
        }
        return musicaModel.cadastrarGenero(genero).then(function (novo) {
            return novo.insertId;
        });
    }).then(function (idGenero) {
        return musicaModel.cadastrar(nome, tempo, idUsuario, idGenero);
    }).then(function () {
        res.status(200).send("Música cadastrada com sucesso");
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function ranking(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        return res.status(400).send("idUsuario inválido!");
    }

    musicaModel.ranking(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function generosMaisOuvidos(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        return res.status(400).send("idUsuario inválido!");
    }

    musicaModel.generosMaisOuvidos(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { cadastrar, ranking, generosMaisOuvidos };