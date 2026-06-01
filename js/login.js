const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (
        email === "cliente@raizes.com" &&
        senha === "123456"
    ) {

        mensagem.textContent =
            "Login realizado com sucesso!";

        mensagem.style.color = "green";

    } else {

        mensagem.textContent =
            "Usuário ou senha inválidos.";

        mensagem.style.color = "red";
    }

});