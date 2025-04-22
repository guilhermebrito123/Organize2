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

router.route("/Usuarios").get((request, response) => {
  dboperations.getUsuarios().then(result => {
    response.json(result[0]);
  });
});

router.route('Usuarios').patch((request,response) => {
  let usuario = {...request.body}

  dboperations.updateUsuario(usuario).then(result => 
    response.status(204).json(result)
  )
})

router.route('Usuarios/:id').get((request, response) => {
  dboperations.getUsuario(request.params.id),then(result => {
    response.json(result[0])
  })
})

router.route('Usuarios/:id').delete((request, response) => {
  dboperations.delUsuario(request.params.id),then(result => {
    response.json(result[0])
  })
})

router.route('Usuarios').post((request,response) => {
  let usuario = {...request.body}

  dboperations.addUsuario(usuario).then(result => {
    response.status(201).json(result)
  })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log("api de Usuarios rodando na porta: " + port);
