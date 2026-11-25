
const db = require("../config/db.js");

module.exports = {

  // CREATE
  criarLivro: async (titulo, autor, ano_publicacao, genero, esta_disponivel) => {
    const sql = `INSERT INTO tb_livros
      (titulo, autor, ano_publicacao, genero, esta_disponivel)
      VALUES (?, ?, ?, ?, ?)`;

    const [resultado] = await db.execute(sql, [
      titulo,
      autor,
      ano_publicacao,
      genero,
      esta_disponivel
    ]);

    return resultado.insertId;
  },

  // READ
  listarLivros: async () => {
    const sql = `SELECT * FROM tb_livros`;

    const [linhas] = await db.execute(sql);

    return linhas;
  },

  // UPDATE
  atualizarLivros: async (id, titulo, autor, ano_publicacao, genero, esta_disponivel) => {
    const sql = `UPDATE tb_livros
      SET titulo = ?, autor = ?, ano_publicacao = ?, genero = ?, esta_disponivel = ?
      WHERE id_livro = ?`;

    const [resultado] = await db.execute(sql, [
      titulo,
      autor,
      ano_publicacao,
      genero,
      esta_disponivel,
      id
    ]);

    return resultado.affectedRows;
  },

  // DELETE
  deletarLivros: async (id) => {
    const sql = `DELETE FROM tb_livros WHERE id_livro = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado.affectedRows;
  },

  // BUSCAR POR ID
  buscarPorId: async (id) => {
    const sql = `SELECT * FROM tb_livros WHERE id_livro = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado[0];
  }

};
