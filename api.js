import * as Db from "./dboperations.js";
import { Usuario } from "./usuario.js";
import {
  getUsuarios,
  updateUsuario,
  getUsuario,
  delUsuario,
  addUsuario,
} from "./dboperations.js";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";;
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/Usuarios").get((request, response) => {
  getUsuarios().then((result) => {
    response.json(result[0]);
  });
});

router.route("/Usuarios").patch((request, response) => {
  let usuario = { ...request.body };

  updateUsuario(usuario).then((result) => response.status(204).json(result));
});

router.route("/Usuarios/:id").get((request, response) => {
  getUsuario(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/Usuarios/:id").delete((request, response) => {
  delUsuario(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/Usuarios").post((request, response) => {
  let usuario = { ...request.body };

  addUsuario(usuario).then((result) => {
    response.status(201).json(result);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("api de Usuarios rodando na porta: " + port);
