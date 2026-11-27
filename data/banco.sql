-- BANCO DA BIBLIOTECA

-- CRIAR O BANCO 
CREATE DATABASE db_pet;

-- UTILIZAR O BANCO
USE db_pet;

-- CRIAR AS TABELAS

-- CRIAR TABELA USUÁRIOS
CREATE TABLE tb_usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(15),
    perfil VARCHAR(10)
);


-- TABELA LEITOR
CREATE TABLE tb_tutor(
	id_tutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(15),
    telefone VARCHAR(15),
    email VARCHAR(100)
);

-- TABELA LIVRO
CREATE TABLE tb_pet(
	id_pet INT PRIMARY KEY AUTO_INCREMENT,
    nome_pet VARCHAR(100),
    tutor VARCHAR(50),
	genero VARCHAR(50)
);


-- TABELA EMPRÉSTIMO 
CREATE TABLE tb_agendamento(
	id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
    dt_agendamento DATE,
	tutor_agend VARCHAR(50),
	pet_agend VARCHAR(50)
);


    