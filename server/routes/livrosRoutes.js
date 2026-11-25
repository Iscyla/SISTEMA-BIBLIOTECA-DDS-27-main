
// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express");
const router = express.Router();

// IMPORTAR O CONTROLLER DOS LIVROS
const livrosControllers = require("../controllers/livrosControllers.js");

// CRUD DE LIVROS

// MOSTRA A PÁGINA DE CADASTRAR LIVROS
router.get("/cadastrar", (req, res) => {
    res.render("livros/cadastrar");
});

// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/cadastrar", livrosControllers.criar);

// MOSTRA A PÁGINA DE EDITAR LIVROS
router.get("/editar/:id", livrosControllers.renderizarEditar);

// RECEBER AS INFORMAÇÕES EDITADAS
router.post("/editar/:id", livrosControllers.editar);

// MOSTRA A PÁGINA DE LISTAR LIVROS
router.get("/listar", livrosControllers.listar);

// MOSTRA A LISTA DE LIVROS NA ROTA PRINCIPAL
router.get("/", livrosControllers.listar);

// ROTA PARA DELETAR UM LIVRO
router.post("/deletar/:id", livrosControllers.deletar);

// EXPORTAR O ROUTER
module.exports = router;
