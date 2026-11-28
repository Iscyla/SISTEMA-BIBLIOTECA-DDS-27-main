const db = require("../config/db.js");

module.exports = {
  // CREATE
  criarPet: async (nome, cpf, telefone, email, nome_pet, genero_pet) => {
    const sql = `INSERT INTO tb_tutor (nome, cpf, telefone, email, nome_pet, genero_pet)
      VALUES (?, ?, ?, ?, ?, ?)`;

  console.log(nome, cpf, telefone, email, nome_pet, genero_pet);
 

    const [resultado] = await db.execute(sql, [nome, cpf, telefone, email, nome_pet, genero_pet]);

    return resultado.insertId;
  },

  // READ
  listarPet: async () => {
    const sql = `SELECT * FROM tb_tutor`;

    const [linhas] = await db.execute(sql);

    return linhas;
  },

  // UPDATE
  atualizarPet: async (nome, cpf, telefone, email, nome_pet, genero_pet) => {
    const sql = `UPDATE tb_tutor
      SET nome, cpf, telefone, email, nome_pet, genero_pet
      WHERE id_tutor = ?`;

    const [resultado] = await db.execute(sql, [nome, cpf, telefone, email, nome_pet, genero_pet]);

    return resultado.affectedRows;
  },

  // DELETE
  deletarPet: async (id) => {
    const sql = `DELETE FROM tb_tutor WHERE id_tutor = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado.affectedRows;
  },

  // BUSCAR POR ID
  buscarPorId: async (id) => {
    const sql = `SELECT * FROM tb_tutor WHERE id_tutor = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado[0];
  },
};
