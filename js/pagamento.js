const btnAprovado = document.getElementById("btnAprovado");
const btnRecusado = document.getElementById("btnRecusado");
const btnTimeout = document.getElementById("btnTimeout");
const mensagem = document.getElementById("mensagem");

if(btnAprovado){
    btnAprovado.addEventListener("click", () => {
        mensagem.textContent = "Pagamento aprovado com sucesso!";
        mensagem.style.color = "green";
    });
}

if(btnRecusado){
    btnRecusado.addEventListener("click", () => {
        mensagem.textContent = "Pagamento recusado.";
        mensagem.style.color = "red";
    });
}

if(btnTimeout){
    btnTimeout.addEventListener("click", () => {
        mensagem.textContent = "Não foi possível concluir o pagamento. Tente novamente em alguns instantes..";
        mensagem.style.color = "orange";
    });
}