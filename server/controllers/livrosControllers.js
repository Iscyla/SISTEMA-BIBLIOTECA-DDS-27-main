
// IMPORTAÇÃO DO MODEL
const livrosModels = require("../models/livrosModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // CREATE
  criar: async (req, res) => {
    try {
      const {
        titulo,
        autor,
        ano_publicacao,
        genero,
        esta_disponivel
      } = req.body;

      await livrosModels.criarLivro(
        titulo,
        autor,
        ano_publicacao,
        genero,
        esta_disponivel
      );

      res.redirect("/livros");

    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao criar o livro"
      });
    }
  },

  // READ
  listar: async (req, res) => {
    try {
      const listaLivros = await livrosModels.listarLivros();

      res.render("livros/listar", { listaLivros });

    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao listar os livros"
      });
    }
  },

  // DELETE
  deletar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      await livrosModels.deletarLivros(idDaUrl);

      res.redirect("/livros");

    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Não é possível excluir este livro, pois ele está vinculado a um empréstimo."
      });
    }
  },

  // MOSTRAR PÁGINA DE EDIÇÃO
  renderizarEditar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      const livroEditado = await livrosModels.buscarPorId(idDaUrl);

      res.render("livros/editar", { livroEditado });

    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao buscar o livro"
      });
    }
  },

  // UPDATE
  editar: async (req, res) => {
    try {
      const idDaUrl = req.params.id;

      const {
        titulo,
        autor,
        ano_publicacao,
        genero,
        esta_disponivel
      } = req.body;

      await livrosModels.atualizarLivros(
        idDaUrl,
        titulo,
        autor,
        ano_publicacao,
        genero,
        esta_disponivel
      );

      res.redirect("/livros");

    } catch (erro) {
      console.log(erro);
      res.render("erro", {
        erro,
        mensagem: "Erro ao editar o livro"
      });
    }
  }
};
