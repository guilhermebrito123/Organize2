//é aqui onde fazemos nossas operações CRUD

var config = require("./dbconfig");
const sql = require("mssql");

async function getUsuarios() {
  try {
    let pool = await sql.connect(config);
    let organize = await pool.request().query("select * from Usuarios");
    return organize.recordsets;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

module.exports = { getUsuarios: getUsuarios };
