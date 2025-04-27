const url = "http://localhost:8090/api/Usuarios/";

function atualizarCampos() {
  var usuarioAtualizado = {
    Nome: "Guigui",
    Email: "guigui@gmail.com",
    Senha: "123Aluno",
  };

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if ((this, this.readyState == 4)) {
      if (this.status == 204) {
        alert("Carro foi atualizado com sucesso!");
      } else {
        alert("Erro ao atualizar o carro, status: " + this.status);
      }
    }
  };

  xhttp.open("PATCH", "http://localhost:8090/api/Usuarios/");
  xhttp.setRequestHeader("Content-type", "application/json");

  xhttp.send(JSON.stringify(usuarioAtualizado));
}

async function getUsuarios() {
  let usuarios = document.querySelector(".usuarios");
  let data = await fetch(url);

  let response = await data.json();

  for (let i = 0; i < response.length; i++) {
    let nome = response[i].Nome;
    let email = response[1].Email;

    usuarios.innerHTML += `
        <div>
            <p>${nome}</p>
            <p>${email}</p>
            <button onClick="atualizarCampos()"/>
        </div>
        `;
  }
}

getUsuarios();
