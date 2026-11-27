const db = require("../config/db.js");

module.exports = {
  // CREATE
  criarPet: async (nome_pet, tutor, genero) => {
    const sql = `INSERT INTO tb_pet
      (nome_pet, tutor, genero)
      VALUES (?, ?, ?)`;

    const [resultado] = await db.execute(sql, [nome_pet, tutor, genero]);

    return resultado.insertId;
  },

  // READ
  listarPet: async () => {
    const sql = `SELECT * FROM tb_pet`;

    const [linhas] = await db.execute(sql);

    return linhas;
  },

  // UPDATE
  atualizarPet: async (nome_pet, tutor, genero) => {
    const sql = `UPDATE tb_pet
      SET nome_pet = ?, tutor = ?, genero = ?
      WHERE id_livro = ?`;

    const [resultado] = await db.execute(sql, [nome_pet, tutor, genero]);

    return resultado.affectedRows;
  },

  // DELETE
  deletarPet: async (id) => {
    const sql = `DELETE FROM tb_pet WHERE id_pet = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado.affectedRows;
  },

  // BUSCAR POR ID
  buscarPorId: async (id) => {
    const sql = `SELECT * FROM tb_pet WHERE id_pet = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado[0];
  },
};
