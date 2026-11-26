var express = require("express");
var router = express.Router();
var jogoController = require("../controllers/jogoController");

router.post("/cadastrar", function (req, res) {
    jogoController.cadastrar(req, res);
});
router.get("/tempo-por-jogo/:idUsuario", function (req, res) {
    jogoController.tempoPorJogo(req, res);
});
router.get("/generos-mais-jogados/:idUsuario", function (req, res) {
    jogoController.generosMaisJogados(req, res);
});

module.exports = router;