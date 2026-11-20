CREATE DATABASE playhear;
USE playhear;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
email VARCHAR (50) NOT NULL,
senha VARCHAR (20) NOT NULL
);

CREATE TABLE genero(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL
);

CREATE TABLE musica(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
criador VARCHAR (50) NOT NULL,
tempo INT NOT NULL, 
fk_usuario INT NOT NULL,
fk_genero INT NOT NULL,
CONSTRAINT fk_fk_usuario 
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
CONSTRAINT fk_fk_genero
	FOREIGN KEY (fk_genero) 
		REFERENCES genero(id)
);

CREATE TABLE jogo(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50) NOT NULL,
criador VARCHAR (50) NOT NULL,
descricao VARCHAR(200) NOT NULL, 
fk_usuario INT NOT NULL,
fk_genero INT NOT NULL,
CONSTRAINT ckfk_usuario 
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
CONSTRAINT ckfk_genero
	FOREIGN KEY (fk_genero) 
		REFERENCES genero(id)
);

