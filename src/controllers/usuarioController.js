var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined || senha == undefined) {
        return res.status(400).send("Email ou senha undefined!");
    }

    usuarioModel.autenticar(email, senha).then(function (resultado) {
        if (resultado.length == 1) {
            res.json(resultado[0]);   // { id, nome, email }
        } else {
            res.status(403).send("Email e/ou senha inválido(s)");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined || email == undefined || senha == undefined) {
        return res.status(400).send("Dados do cadastro undefined!");
    }

    usuarioModel.cadastrar(nome, email, senha).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { autenticar, cadastrar };