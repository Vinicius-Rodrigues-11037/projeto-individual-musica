var database = require("../database/config");

function buscarGenero(nomeGenero) {
    return database.executar(`SELECT id FROM genero_msc WHERE nome = '${nomeGenero}';`);
}

function cadastrarGenero(nomeGenero) {
    return database.executar(`INSERT INTO genero_msc (nome) VALUES ('${nomeGenero}');`);
}

function cadastrar(nome, tempo, idUsuario, idGenero) {
    var instrucaoSql = `
        INSERT INTO musica (nome, tempo, fk_usuario, fk_genero_msc)
        VALUES ('${nome}', ${tempo}, ${idUsuario}, ${idGenero});
    `;
    return database.executar(instrucaoSql);
}

function ranking(idUsuario) {
    var instrucaoSql = `
        SELECT nome, SUM(tempo) AS total, COUNT(id) AS vezes
        FROM musica
        WHERE fk_usuario = ${idUsuario}
        GROUP BY nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

function generosMaisOuvidos(idUsuario) {
    var instrucaoSql = `
        SELECT g.nome, COUNT(m.id) AS total
        FROM musica m
            JOIN genero_msc g ON m.fk_genero_msc = g.id
        WHERE m.fk_usuario = ${idUsuario}
        GROUP BY g.nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = { buscarGenero, cadastrarGenero, cadastrar, ranking, generosMaisOuvidos };