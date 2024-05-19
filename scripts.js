function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var mostrar = document.getElementById("mostrar");

    mostrar.textContent = "Email: " + email + " | Senha: " + senha;
}
