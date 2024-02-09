const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Digite o nome completo"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green";
    }
}

function validarEmail2(){
  let txtEmail = document.querySelector("#txtEmail")

  if((email.value.indexOf("@") && email.value.indexOf(".")) == -1) {
    txtEmail.innerHTML = "Digite o e-mail corretamente"
    txtEmail.style.color = "red"
  } else {
    txtEmail.innerHTML = "E-mail válido!"
    txtEmail.style.color = "green"
  }

  }

  function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.length>50) {
      txtMensagem.innerHTML = "Mensagem muito grande."
      txtMensagem.style.color = "red"
    }

  }