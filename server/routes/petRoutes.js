
// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express");
const router = express.Router();

// IMPORTAR O CONTROLLER DOS LIVROS
const petControllers = require("../controllers/petControllers.js");

// CRUD DE LIVROS

// MOSTRA A PÁGINA DE CADASTRAR LIVROS
router.get("/cadastrar", (req, res) => {
    res.render("petTutor/cadastrar");
});

// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/cadastrar", petControllers.criar);

// MOSTRA A PÁGINA DE EDITAR LIVROS
router.get("/editar/:id", petControllers.renderizarEditar);
router.post("/editar/:id", petControllers.editar);

// MOSTRA A PÁGINA DE LISTAR LIVROS
router.get("/listar", petControllers.listar);

// MOSTRA A LISTA DE LIVROS NA ROTA PRINCIPAL
router.get("/", petControllers.listar);

// ROTA PARA DELETAR UM LIVRO
router.post("/deletar/:id", petControllers.deletar);

// EXPORTAR O ROUTER
module.exports = router;
