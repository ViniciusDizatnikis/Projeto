function senhaEmail() {
    // Obter o valor do campo de senha
    var senha = document.getElementById("senha").value;

    // Obter o valor do campo de email
    var email = document.getElementById("email").value;

    // Obter o elemento onde queremos exibir os valores
    var mostrar = document.getElementById("mostrar");

    // Exibir os valores
    mostrar.textContent = "Senha: " + senha + ", Email: " + email;
}
