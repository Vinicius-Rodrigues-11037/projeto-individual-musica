var jogoModel = require("../models/jogoModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuarioServer;
    var genero = req.body.generoServer;   // texto digitado no input

    if (nome == undefined || tempo == undefined || idUsuario == undefined || genero == undefined) {
        return res.status(400).send("Dados do jogo undefined!");
    }

    genero = genero.trim();

    jogoModel.buscarGenero(genero).then(function (resultado) {
        if (resultado.length > 0) {
            return resultado[0].id;  // gênero já existe
        }
        return jogoModel.cadastrarGenero(genero).then(function (novo) {
            return novo.insertId;    // gênero novo: usa o id criado
        });
    }).then(function (idGenero) {
        return jogoModel.cadastrar(nome, tempo, idUsuario, idGenero);
    }).then(function () {
        res.status(200).send("Jogo cadastrado com sucesso");
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempoPorJogo(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        return res.status(400).send("idUsuario inválido!");
    }

    jogoModel.tempoPorJogo(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function generosMaisJogados(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        return res.status(400).send("idUsuario inválido!");
    }

    jogoModel.generosMaisJogados(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { cadastrar, tempoPorJogo, generosMaisJogados };