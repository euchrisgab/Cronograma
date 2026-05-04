
const textos = document.querySelectorAll(".aba-conteudo");
const botoes = document.querySelectorAll('.botao');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            botoes[j].style.backgroundColor = "";
            botoes[j].style.fontWeight = "";
            botoes[j].style.color = "";
        }

        botoes[i].classList.add('ativo');
        botoes[i].style.backgroundColor = "var(--verde)"; 
        botoes[i].style.fontWeight = "700";
        botoes[i].style.color = "var(--cor-de-fundo)";
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[0].textContent = "Contagem regressiva";