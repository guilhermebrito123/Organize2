//é aqui onde fazemos nossas operações CRUD

import { config } from "./dbconfig.js";
import sql from "mssql";

async function getUsuarios() {
  try {
    let pool = await sql.connect(config);
    let organize = await pool.request().query("select * from [dbo].[Usuarios]");
    return organize.recordsets;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

async function updateUsuario(usuario) {
  try {
    let pool = await sql.connect(config);
    let usuarios = await pool
      .request()
      .input("input_parameter", sql.Int, usuario.Id)
      .query(`Update [dbo].[Usuarios]
    SET 
    [Nome] = '${usuario.Nome}',
    [Email] = '${usuario.Email}',
    [Senha] = '${usuario.Senha}'
    WHERE ID = @input_parameter
    `);
    return usuario.recordsets;
  } catch (error) {
    console.error("Erro ao atualizar usuário", error);
    throw error;
  }
}

async function getUsuario(usuarioId) {
  try {
    let pool = await sql.connect(config);
    let organize = await pool
      .request()
      .input("input_parameter", sql.Int, usuarioId)
      .query("select * from [dbo].[Usuarios] WHERE ID = @input_parameter");
    return organize.recordsets;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

async function delUsuario(usuarioId) {
  try {
    let pool = await sql.connect(config);
    let organize = await pool
      .request()
      .input("input_parameter", sql.Int, usuarioId)
      .query("DELETE from [dbo].[Usuarios] WHERE ID = @input_parameter");
    return organize.recordsets;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

async function addUsuario(usuario) {
  try {
    let pool = await sql.connect(config);
    let organize = await pool.request().query(`INSERT INTO [dbo].[Usuarios]
    (
    [Id],
    [Nome],
    [Email],
    [Senha]
    )VALUES(
      '${usuario.Id}',
      '${usuario.Nome}',
      '${usuario.Email}',
      '${usuario.Senha}'
    )`);
    return organize.recordsets;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

export { getUsuarios, updateUsuario, getUsuario, delUsuario, addUsuario };
