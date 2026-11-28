
// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express");
const router = express.Router();

// IMPORTAR O CONTROLLER DOS LIVROS
const agendamentoControllers = require("../controllers/agendamentoControllers.js");

// CRUD DE LIVROS

// MOSTRA A PÁGINA DE CADASTRAR LIVROS
router.get("/cadastrar", (req, res) => {
    res.render("agendamento/cadastrar");
});

// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/cadastrar", agendamentoControllers.criar);

// MOSTRA A PÁGINA DE EDITAR LIVROS
router.get("/editar/:id", agendamentoControllers.renderizarEditar);
router.post("/editar/:id", agendamentoControllers.editar);

// MOSTRA A PÁGINA DE LISTAR LIVROS
router.get("/listar", agendamentoControllers.listar);

// MOSTRA A LISTA DE LIVROS NA ROTA PRINCIPAL
router.get("/", agendamentoControllers.listar);

// ROTA PARA DELETAR UM LIVRO
router.post("/deletar/:id", agendamentoControllers.deletar);

// EXPORTAR O ROUTER
module.exports = router;
