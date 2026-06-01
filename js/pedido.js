const checkboxes =
document.querySelectorAll('input[type="checkbox"]');

const total =
document.getElementById("total");

const mensagem =
document.getElementById("mensagem");

const btnPedido =
document.getElementById("btnPedido");

const btnCancelar =
document.getElementById("btnCancelar");

function atualizarTotal() {

    let soma = 0;

    checkboxes.forEach(item => {

        if(item.checked){

            soma += Number(item.value);

        }

    });

    total.textContent =
    `Total: R$${soma}`;
}

checkboxes.forEach(item => {

    item.addEventListener(
        "change",
        atualizarTotal
    );

});

btnPedido.addEventListener("click", () => {

    btnPedido.disabled = true;

    btnPedido.textContent =
    "Processando...";

    mensagem.style.color = "green";

    mensagem.textContent =
    "Pedido criado com sucesso!";

});

btnCancelar.addEventListener("click", () => {

    mensagem.style.color = "red";

    mensagem.textContent =
    "Pedido cancelado com sucesso.";

});