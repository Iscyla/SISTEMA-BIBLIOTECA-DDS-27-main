// IMPORTAÇÃO DO MODEL
const agendamentoModels = require("../models/agendamentoModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // CREATE
  criar: async (req, res) => {
    try {
      const {dt_agendamento} = req.body;

      await agendamentoModels.criarAgendamento(dt_agendamento);

      res.redirect("/agendamento");
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro, mensagem: "Erro ao criar o pet" });
    }
  },

  // READ
  listar: async (req, res) => {
    try {
      const listarPet = await agendamentoModels.listarAgendamento();

      res.render("agendamento/listar", { listarPet });
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

      await agendamentoModels.deletarAgendamento(idDaUrl);

      res.redirect("/agendamento");
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

      const petEditado = await agendamentoModels.buscarPorId(idDaUrl);

      res.render("agendamento/editar", { petEditado });
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

      const {dt_agendamento} = req.body;

      await agendamentoModels.atualizarAgendamento(idDaUrl, dt_agendamento);

      res.redirect("/agendamento");
    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao editar o livro",
      });
    }
  },
};
