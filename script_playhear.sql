CREATE DATABASE playhear;
USE playhear;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
email VARCHAR (50) NOT NULL,
senha VARCHAR (20) NOT NULL
);

CREATE TABLE genero_jogo(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL
);

CREATE TABLE genero_msc(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL
);

CREATE TABLE musica(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
tempo DECIMAL(7,1) NOT NULL, 
fk_usuario INT NOT NULL,
fk_genero_msc INT NOT NULL,
CONSTRAINT fk_fk_usuario 
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
CONSTRAINT fk_fk_genero_msc
	FOREIGN KEY (fk_genero_msc) 
		REFERENCES genero_msc(id)
);

CREATE TABLE jogo(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
tempo DECIMAL(7,1) NOT NULL,
fk_usuario INT NOT NULL,
fk_genero_jogo INT NOT NULL,
CONSTRAINT ckfk_usuario 
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
CONSTRAINT ckfk_genero_jogo
	FOREIGN KEY (fk_genero_jogo) 
		REFERENCES genero_jogo(id)
);

INSERT INTO usuario(nome, email, senha) VALUES
('Ana', 'ana@email.com', '123456'),
('Bruno', 'bruno@email.com', '123123'),
('Carla', 'carla@email.com', '12341234');

INSERT INTO genero_jogo(nome) VALUES
('Terror'),
('Aventura'),
('RPG'),
('Corrida'),
('Ritmo');

INSERT INTO genero_msc(nome) VALUES
('Rock'),
('Eletronica'),
('Trilha de jogo'),
('Pop'),
('Funk');

INSERT INTO jogo(nome, tempo, fk_usuario, fk_genero_jogo) VALUES
('Amnesia', 2, 1, 1),
('Genshin impact', 1.8, 1, 2),
('The Witcher 3', 2.4, 1, 3),
('Forza Horizon 5', 1, 1, 4),
('Rhythm Doctor', 4, 2, 5),
('GTA VI', 6, 2, 2),
('Elden Ring', 3, 3, 3),
('Dead By Daylight', 2, 3, 2);

INSERT INTO jogo(nome, tempo, fk_usuario, fk_genero_jogo) VALUES
('Amnesia', 2, 1, 1),
('Genshin impact', 1.8, 1, 2);

INSERT INTO musica(nome, tempo, fk_usuario, fk_genero_msc) VALUES
('Megalovania', 3, 1, 1),
('Sweden', 4, 1, 2),
('BFG Division', 8, 1, 1),
('Secunda', 3, 1, 3),
('Hopes and Dreams', 5, 1, 3),
('Blinding Lights', 4, 2, 4),
('Take Five', 6, 2, 5),
('Cornfield Chase', 3, 3, 3),
('Starlight', 4, 3, 1),
('Shelter', 4, 3, 2);

INSERT INTO musica(nome, tempo, fk_usuario, fk_genero_msc) VALUES
('Megalovania', 3, 1, 1),
('Sweden', 4, 1, 2);

SELECT
    SUM(tempo) AS 'Total de horas',
    SUM(tempo) * 60 AS 'Total de minutos'
FROM jogo
WHERE fk_usuario = 1;

SELECT
    SUM(tempo) AS 'Total de minutos',
    SUM(tempo) / 60 AS 'Total de Horas'
FROM musica
WHERE fk_usuario = 1;

SELECT 
	nome,
	COUNT(nome) AS 'Quantidade de vezes jogado',
    SUM(tempo) AS 'Total de horas',
    SUM(tempo) * 60 AS 'Total de minutos'
FROM jogo GROUP BY nome;

SELECT 
	nome,
	COUNT(nome) AS 'Quantidade de vezes tocada',
    SUM(tempo) AS 'Total de Minutos',
    SUM(tempo) / 60 AS 'Total de Horas'
FROM musica GROUP BY nome;

SELECT 
	nome,
    COUNT(*) AS 'Quantidade de vezes tocada',
    tempo
FROM musica
WHERE  (
    SELECT MAX(tempo)
    FROM musica
)
GROUP BY nome
ORDER BY tempo DESC;

SELECT
    nome,
    COUNT(*) AS 'Quantidade de vezes tocada',
    SUM(tempo) AS 'Tempo tocado'
FROM musica
GROUP BY nome, tempo
ORDER BY COUNT(*) DESC;

SELECT
    nome,
	COUNT(*) AS 'Quantidade de vezes tocada',
    SUM(tempo) AS 'Tempo total'
FROM musica
GROUP BY nome
ORDER BY SUM(tempo) DESC;

SELECT
    u.nome AS 'Nome usuario',
    g.nome AS 'Genero',
    COUNT(j.id) AS 'Quantidade de jogos'
FROM jogo j
	JOIN genero_jogo g 
		ON j.fk_genero_jogo = g.id
	JOIN usuario u 
		ON j.fk_usuario = u.id
GROUP BY u.nome, g.nome
ORDER BY u.nome, COUNT(j.id) DESC;

SELECT
    u.nome AS 'Nome usuario',
    g.nome AS 'Genero',
    COUNT(m.id) AS 'Quantidade de musica'
FROM musica m
	JOIN genero_msc g 
		ON m.fk_genero_msc = g.id
	JOIN usuario u 
		ON m.fk_usuario = u.id
GROUP BY u.nome, g.nome
ORDER BY u.nome, COUNT(m.id) DESC;