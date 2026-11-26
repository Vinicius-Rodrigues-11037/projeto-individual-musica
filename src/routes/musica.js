var express = require("express");
var router = express.Router();
var musicaController = require("../controllers/musicaController");

router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
});
router.get("/ranking/:idUsuario", function (req, res) {
    musicaController.ranking(req, res);
});

router.get("/generos-mais-ouvidos/:idUsuario", function (req, res) {
    musicaController.generosMaisOuvidos(req, res);
});

module.exports = router;