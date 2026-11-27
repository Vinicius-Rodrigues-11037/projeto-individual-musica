// Troca o título e a descrição do card da direita
// de acordo com o jogo clicado na lista "Meus jogos favoritos".

(function () {
    const jogos = document.querySelectorAll(".jogo");
    const tituloJogo = document.getElementById("jogo_titulo");
    const descricaoJogo = document.getElementById("jogo_descricao");

    if (jogos.length === 0 || !tituloJogo || !descricaoJogo) {
        return;
    }

    function selecionarJogo(jogo) {
        jogos.forEach((j) => j.classList.remove("ativa"));
        jogo.classList.add("ativa");

        tituloJogo.textContent = jogo.textContent.trim();
        descricaoJogo.textContent = jogo.dataset.descricao;
    }

    jogos.forEach((jogo) => {
        jogo.addEventListener("click", () => selecionarJogo(jogo));
    });

    // começa com o primeiro jogo selecionado
    selecionarJogo(jogos[0]);
})();