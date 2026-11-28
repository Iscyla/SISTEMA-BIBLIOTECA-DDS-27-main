// IMPORTAÇÃO DO MODEL
const petModels = require("../models/petModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // CREATE
  criar: async (req, res) => {
    try {
      const { nome, cpf, telefone, email, nome_pet, genero_pet} = req.body;

      await petModels.criarPet(nome, cpf, telefone, email, nome_pet, genero_pet);

      res.redirect("/petTutor");
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro, mensagem: "Erro ao criar o pet" });
    }
  },

  // READ
  listar: async (req, res) => {
    try {
      const listarPet = await petModels.listarPet();

      res.render("petTutor/listar", { listarPet });
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao listar os pets",
      });
    }
  },

  // DELETE
  deletar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      await petModels.deletarPet(idDaUrl);

      res.redirect("/petTutor");
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Não é possível excluir este pet.",
      });
    }
  },

  // MOSTRAR PÁGINA DE EDIÇÃO
  renderizarEditar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      const petEditado = await petModels.buscarPorId(idDaUrl);

      res.render("petTutor/editar", { petEditado });
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao buscar o livro",
      });
    }
  },

  // UPDATE
  editar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      const { nome, cpf, telefone, email, nome_pet, genero_pet } = req.body;

      await petModels.atualizarPet(idDaUrl, nome, cpf, telefone, email, nome_pet, genero_pet);

      res.redirect("/petTutor");
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao editar o livro",
      });
    }
  },
};
