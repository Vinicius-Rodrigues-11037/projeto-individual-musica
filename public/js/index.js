// Troca o card da direita (nome, capa e link do YouTube)
// de acordo com a música clicada na lista.

const CAPA_PADRAO = "./img/album_placeholder.svg";

const faixas = document.querySelectorAll(".faixa");
const titulo = document.getElementById("faixa_titulo");
const capa = document.getElementById("faixa_capa");
const links = document.querySelectorAll(".faixa_link");

function selecionarFaixa(faixa) {
    const nome = faixa.textContent.trim();

    faixas.forEach((f) => f.classList.remove("ativa"));
    faixa.classList.add("ativa");

    titulo.textContent = nome;
    capa.src = faixa.dataset.capa || CAPA_PADRAO;
    capa.alt = "Capa do álbum de " + nome;

    links.forEach((link) => {
        link.href = faixa.dataset.link;
    });
}

// se o caminho da capa estiver errado, mostra a imagem padrão
capa.addEventListener("error", () => {
    if (!capa.src.endsWith("album_placeholder.svg")) {
        capa.src = CAPA_PADRAO;
    }
});

faixas.forEach((faixa) => {
    faixa.addEventListener("click", () => selecionarFaixa(faixa));
});

// começa com a primeira música selecionada
if (faixas.length > 0) {
    selecionarFaixa(faixas[0]);
}