const btnCancelar =
document.getElementById("btnCancelar");

const mensagem =
document.getElementById("mensagem");

btnCancelar.addEventListener("click", () => {

    mensagem.textContent =
    "Pedido cancelado com sucesso.";

    mensagem.style.color = "red";

    btnCancelar.disabled = true;

});