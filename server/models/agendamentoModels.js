const db = require("../config/db.js");

module.exports = {
  // CREATE
  criarAgendamento: async (dt_agendamento) => {
    const sql = `INSERT INTO tb_agendamento (dt_agendamento)
      VALUES (?)`;

  console.log(dt_agendamento);
 

    const [resultado] = await db.execute(sql, [dt_agendamento]);

    return resultado.insertId;
  },

  // READ
  listarAgendamento: async () => {
    const sql = `SELECT * FROM tb_agendamento`;

    const [linhas] = await db.execute(sql);

    return linhas;
  },

  // UPDATE
  atualizarAgendamento: async (dt_agendamento) => {
    const sql = `UPDATE tb_agendamento
      SET dt_agendamento
      WHERE id_agendamento = ?`;

    const [resultado] = await db.execute(sql, [dt_agendamento]);

    return resultado.affectedRows;
  },

  // DELETE
  deletarAgendamento: async (id) => {
    const sql = `DELETE FROM tb_agendamento WHERE id_agendamento = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado.affectedRows;
  },

  // BUSCAR POR ID
  buscarPorId: async (id) => {
    const sql = `SELECT * FROM tb_agendamento WHERE id_agendamento = ?`;

    const [resultado] = await db.execute(sql, [id]);

    return resultado[0];
  },
};
