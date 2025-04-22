var Db = require("../../dboperations");
var Usuario = require("./usuario");
const dboperations = require("../../dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/Usuarios").get((request, Response) => {
  dboperations.getUsuarios().then(result => {
    Response.json(result[0]);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("api de Usuarios rodando na porta: " + port);
