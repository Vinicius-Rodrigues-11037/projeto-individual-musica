var database = require("../database/config");

function buscarGenero(nomeGenero) {
    return database.executar(`SELECT id FROM genero_jogo WHERE nome = '${nomeGenero}';`);
}

function cadastrarGenero(nomeGenero) {
    return database.executar(`INSERT INTO genero_jogo (nome) VALUES ('${nomeGenero}');`);
}

function cadastrar(nome, tempo, idUsuario, idGenero) {
    var instrucaoSql = `
        INSERT INTO jogo (nome, tempo, fk_usuario, fk_genero_jogo)
        VALUES ('${nome}', ${tempo}, ${idUsuario}, ${idGenero});
    `;
    return database.executar(instrucaoSql);
}


function tempoPorJogo(idUsuario) {
    var instrucaoSql = `
        SELECT nome, SUM(tempo) AS total
        FROM jogo
        WHERE fk_usuario = ${idUsuario}
        GROUP BY nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

function generosMaisJogados(idUsuario) {
    var instrucaoSql = `
        SELECT g.nome, COUNT(j.id) AS total
        FROM jogo j
            JOIN genero_jogo g ON j.fk_genero_jogo = g.id
        WHERE j.fk_usuario = ${idUsuario}
        GROUP BY g.nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = { buscarGenero, cadastrarGenero, cadastrar, tempoPorJogo, generosMaisJogados };

