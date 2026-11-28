-- Banco de dados da clínica Pet's & Amor
CREATE DATABASE IF NOT EXISTS db_pet;
USE db_pet;

CREATE TABLE tb_usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(255),
    perfil VARCHAR(20)
);

CREATE TABLE tb_tutor (
    id_tutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(255),
    telefone VARCHAR(20),
    email VARCHAR(100),
    nome_pet VARCHAR(100),
    genero_pet VARCHAR(20)
);

CREATE TABLE tb_agendamento (
    id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
    dt_agendamento DATE,
    id_tutor INT,
    FOREIGN KEY (id_tutor) REFERENCES tb_tutor(id_tutor)
);

-- Usuarios
INSERT INTO tb_usuarios (nome, email, senha, perfil) VALUES
('Administrador','admin@petsamor.com','admin123','adm'),
('Ana Souza','ana@petsamor.com','ana123','usuario'),
('Carlos Lima','carlos@petsamor.com','carlos123','usuario');

-- Tutores e seus pets
INSERT INTO tb_tutor (nome, cpf, telefone, email, nome_pet, genero_pet) VALUES
('Mariana Alves','00000000001','27999990001','mariana@email.com','Mel','Femea'),
('João Santos','00000000002','27999990002','joao@email.com','Thor','Macho'),
('Fernanda Costa','00000000003','27999990003','fernanda@email.com','Luna','Femea');

-- Agendamentos
INSERT INTO tb_agendamento (dt_agendamento, id_tutor) VALUES
('2026-12-01',1),
('2026-12-02',2),
('2026-12-03',3);