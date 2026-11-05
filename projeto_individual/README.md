# Playhear — Música e Videogame

Projeto de site em HTML e CSS criado a partir de um print de referência e do código HTML enviado por um estudante de Ciência da Computação. Este README registra a conversa (pedidos e respostas), o código final e as imagens usadas.

## Estrutura de pastas

```
index.html
style.css
README.md
imagens/
   fundo_dj.jpg          # ilustração de fundo (DJ)
   logo_site.png         # logo do header
   referencia_print.png  # print que serviu de modelo
```

## Imagens

**Print de referência** (modelo do layout):

![Print de referência](imagens/referencia_print.png)

**Fundo do site** (`fundo_dj.jpg`, 650×433 px):

![Fundo DJ](imagens/fundo_dj.jpg)

**Logo** (`logo_site.png`, 526×474 px, fundo transparente):

![Logo Playhear](imagens/logo_site.png)

---

# Histórico da conversa

## 1. Plano de estudos para uma prova

**Pedido:** "Me ajude a criar um plano de estudos para uma prova — o que revisar a cada dia e como me testar."

**Resposta:** Para montar um plano que funcione, foram feitas três perguntas: quanto tempo falta até a prova, quanto tempo por dia o aluno consegue estudar e qual o tipo de prova (múltipla escolha, dissertativa, cálculos ou mista). As perguntas não foram respondidas e a conversa seguiu para outro assunto (o site). Portanto, o plano de estudos **não foi criado**.

## 2. Pedido do site e envio do print

**Pedido:** "Sou um estudante de ciência da computação e preciso de ajuda para fazer um site usando HTML e CSS, leia meu código e use a imagem fornecida para fazer o site."

**Resposta:** O print chegou, mas nenhum código. Foi descrito o que aparece nele: site **Playhear** com o tema "Música e Videogame", cabeçalho escuro com logo, menu azul (Início, Efeitos, Trilhas, Formulário, Simulador) e botão Login lilás; fundo com ilustração de DJ; card central semitransparente com título rosa "MÚSICA E VIDEOGAME", subtítulo "O que é música?" e texto sobre melodia, harmonia e ritmo. Foi pedido que o código fosse colado ou anexado.

## 3. Envio do código HTML

**Pedido:** o usuário colou o HTML (header com logo em texto e nav "Home / Sobre / Conteúdo", div `imagem_fundo`, div `conteudo` com títulos, parágrafos e botão "Conheça mais", seção "Sobre o projeto" e rodapé) junto com o print.

**Resposta:** Foram criados `index.html` e `style.css`.

Mudanças no HTML:
- Menu igual ao print: Início, Efeitos, Trilhas, Formulário, Simulador e botão Login (links com âncoras que ainda precisam de seções ou páginas).
- Logo trocado de texto para imagem (`<img>`).
- `lang="en"` trocado por `pt-BR`; aspas em "voz" e "batida" e o trecho "(como os acordes)" acrescentados para igualar o texto do print.
- "Sobre o projeto" colocado dentro de `<section id="sobre">`, destino do botão "Conheça mais".

O CSS criou: cabeçalho escuro fixo, menu azul, botão Login lilás arredondado, card escuro semitransparente com cantos arredondados, título em fonte Righteous e layout responsivo. Como as imagens não puderam ser extraídas do print, foram deixados os caminhos `imagens/fundo.jpg` e `imagens/logo.png` para o usuário preencher. Também foi avisado que o CSS original do usuário não foi recebido.

## 4. Envio das imagens e ajuste da logo

**Pedido:** "fundo_dj é a imagem de fundo do site e logo_site é a logo localizada no canto do header, dentro do codigo altere o tamanho da logo para ficar adequado ao tamanho do header"

**Resposta:**
- Imagens copiadas para a pasta `imagens/`, e os caminhos no HTML e no CSS atualizados para `fundo_dj.jpg` e `logo_site.png`.
- Logo ajustada para **46px de altura** dentro do header de **56px**, com `width: auto` para manter a proporção, e o container `.logo` centralizado na vertical. Em telas de até 640px a logo passa a 38px.
- Aviso: o fundo tem só 650×433 px e pode ficar borrado em monitores grandes.

## 5. Explicação do código e do `@import`

**Pedido:** "me explique cada parte do codigo e o que é o import na primeira linha do css"

**Resposta (resumo):**

**`@import`:** manda o navegador carregar outro CSS dentro do seu. Aqui ele vem do Google Fonts e traz as fontes Montserrat (texto, pesos 400, 500 e 700) e Righteous (título). O `display=swap` mostra uma fonte reserva enquanto a fonte real baixa. O `@import` precisa ser a primeira regra do CSS, e um `<link>` no `<head>` do HTML costuma carregar mais rápido.

**HTML:**
- `<head>`: `<!DOCTYPE html>`, `lang="pt-BR"`, `meta charset="UTF-8"` (acentos), `meta viewport` (adaptação ao celular), `<link>` do CSS e `<title>`.
- `<body>`: `<header>` (logo + `<nav>` com links e o botão Login), `.imagem_fundo` (faixa com a ilustração) contendo o card `.conteudo`, `<section id="sobre">` e `<footer>`.

**CSS:** variáveis em `:root`; reset com `* { box-sizing: border-box; margin: 0; padding: 0; }`; `body` com a fonte padrão; `header` com flex e `position: sticky`; `.logo img` com 46px; `nav a` e `.login`; `.imagem_fundo` com `background-size: cover` e `min-height: calc(100vh - 56px)`; `.conteudo` como card; `h1` e `h2` com cores e `clamp()`; `.botao` em formato de pílula; `#sobre` e `footer` com fundo escuro; e `@media (max-width: 640px)` para telas pequenas.

## 6. Detalhamento dos pontos complexos e da nomeação

**Pedido:** "detalhe os pontos considerados mais complexos e como realizou a separação dos elementos e a nomeação para o CSS"

**Resposta (resumo):**

**Separação dos elementos:** uma caixa por responsabilidade.

| Bloco | Tag | Função |
|---|---|---|
| Topo | `<header>` | logo e navegação |
| Área principal | `<div class="imagem_fundo">` | faixa com a ilustração |
| Card | `<div class="conteudo">` | texto sobre a música |
| Apresentação | `<section id="sobre">` | "Sobre o projeto" |
| Fim | `<footer>` | direitos |

**Nomeação:**
- Foram mantidos os nomes que já existiam no HTML do usuário (`imagem_fundo`, `conteudo`, `subtitulo`, `elementos`, `botao`).
- Os nomes novos (`logo`, `login`) dizem o que o elemento **é**, não como ele aparece (por exemplo, `.botao-rosa` ficaria errado se a cor mudasse).
- `class` para estilos (pode repetir), `id` só em `#sobre`, que também é destino do link `#sobre`.
- Sem acentos nem espaços nos nomes.

**Pontos complexos:**
1. **Flexbox:** `justify-content` age no eixo principal (horizontal) e `align-items` no eixo cruzado (vertical). `space-between` empurra a logo e o menu para os lados. Na faixa de fundo, `justify-content: center` centraliza o card e `align-items: flex-start` o cola no topo. O card usa `width: 100%` com `max-width: 470px`.
2. **`calc(100vh - 56px)`:** `100vh` é a altura da janela, descontando o header de 56px. `min-height` permite que a faixa cresça junto com o texto.
3. **`position: sticky`:** o header gruda no topo ao rolar, e `z-index: 10` o mantém por cima do conteúdo.
4. **`clamp(1.6rem, 5vw, 2.1rem)`:** valor mínimo, ideal e máximo para o título, sem media query.
5. **Variáveis CSS:** `:root { --titulo: #ff4fa8; }` e `var(--titulo)` permitem mudar uma cor em um lugar só.
6. **Especificidade:** tag < classe < `id`. Por isso `nav a.login` vence `nav a`, e `.conteudo h2` (alinhado à esquerda) vence o `text-align: center` herdado do card.
7. **`box-sizing: border-box`:** o padding fica dentro da largura declarada.
8. **`border-radius: 999px` e `rgba`:** o raio enorme gera o formato de pílula; o quarto valor do `rgba` (0,88) é a opacidade do card.
9. **Media query:** `@media (max-width: 640px)` só vale em telas de até 640px; o header quebra linha e a logo diminui.

## 7. Este README

**Pedido:** "faça um README com nossa conversa, salve os prompts, as respostas e todas as informações oferecidas como código e imagens, também faça um resumo desta conversa com os prompts pedidos e as respostas fornecidas e mantenha aqui no chat mesmo"

**Resposta:** este arquivo, mais um resumo da conversa no próprio chat.

---

# Código final

## `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Playhear</title>
</head>
<body>

    <header>
        <div class="logo">
            <img src="imagens/logo_site.png" alt="Playhear">
        </div>

        <nav>
            <a href="index.html">Início</a>
            <a href="#efeitos">Efeitos</a>
            <a href="#trilhas">Trilhas</a>
            <a href="#formulario">Formulário</a>
            <a href="#simulador">Simulador</a>
            <a href="#login" class="login">Login</a>
        </nav>
    </header>

    <div class="imagem_fundo">

        <!-- Conteúdo principal -->
        <div class="conteudo">

            <h1>MÚSICA E VIDEOGAME</h1>

            <h2>O que é música?</h2>

            <p>
                A música é a arte de organizar sons e silêncio
                ao longo do tempo de maneira estética e expressiva.
            </p>

            <p class="subtitulo">
                Elementos Básicos da Música:
            </p>

            <div class="elementos">

                <p>
                    <strong>Melodia:</strong>
                    A sequência de notas tocadas ou cantadas
                    uma após a outra, formando a "voz" principal
                    que você consegue cantar ou assobiar.
                </p>

                <p>
                    <strong>Harmonia:</strong>
                    A combinação de várias notas tocadas
                    ao mesmo tempo (como os acordes), que serve de apoio
                    e base para a melodia.
                </p>

                <p>
                    <strong>Ritmo:</strong>
                    A organização dos sons no tempo e a
                    marcação da pulsação, que dá a "batida"
                    e o movimento à música.
                </p>

            </div>

            <a href="#sobre" class="botao">Conheça mais</a>

        </div>
    </div>

    <section id="sobre">
        <h2>Sobre o projeto</h2>

        <p>
            Explore a relação entre a música e o universo
            dos videogames, conhecendo suas histórias,
            características e influências.
        </p>
    </section>

    <footer>
        <p>Música e Videogame © 2026</p>
    </footer>

</body>
</html>
```

## `style.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Righteous&display=swap");

:root {
    --header-bg: #2b2b2b;
    --link: #4a80d9;
    --login-bg: #a9a5ea;
    --login-text: #3d5fb8;
    --card-bg: rgba(20, 20, 20, 0.88);
    --titulo: #ff4fa8;
    --subtitulo: #e8174f;
    --texto: #c9c9f5;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Montserrat", Arial, sans-serif;
    background: #f2f2f2;
    color: var(--texto);
}

/* ---------- Cabeçalho ---------- */
header {
    background: var(--header-bg);
    height: 56px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
}

.logo img {
    height: 46px;   /* header tem 56px: sobram 5px em cima e embaixo */
    width: auto;    /* mantém a proporção da logo */
    display: block;
}

nav {
    display: flex;
    align-items: center;
    gap: 26px;
}

nav a {
    color: var(--link);
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
}

nav a:hover,
nav a:focus-visible {
    text-decoration: underline;
}

nav a.login {
    background: var(--login-bg);
    color: var(--login-text);
    padding: 6px 0;
    width: 100px;
    text-align: center;
    border-radius: 999px;
    font-size: 13px;
}

nav a.login:hover {
    text-decoration: none;
    filter: brightness(1.08);
}

/* ---------- Seção principal ---------- */
.imagem_fundo {
    min-height: calc(100vh - 56px);
    padding: 15px 16px 60px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #d9d9e8;
    background-image: url("imagens/fundo_dj.jpg");
    background-size: cover;
    background-position: center;
}

.conteudo {
    width: 100%;
    max-width: 470px;
    background: var(--card-bg);
    border-radius: 24px;
    padding: 18px 22px 24px;
    text-align: center;
}

.conteudo h1 {
    font-family: "Righteous", sans-serif;
    font-size: clamp(1.6rem, 5vw, 2.1rem);
    letter-spacing: 1px;
    color: var(--titulo);
    margin-bottom: 8px;
}

.conteudo h2 {
    font-size: 1.5rem;
    color: var(--subtitulo);
    text-align: left;
    padding-left: 12px;
    margin-bottom: 10px;
}

.conteudo p {
    font-size: 0.82rem;
    line-height: 1.5;
}

.subtitulo {
    margin-top: 4px;
}

.elementos {
    margin-top: 22px;
}

.elementos p {
    margin-bottom: 18px;
}

.botao {
    display: inline-block;
    margin-top: 6px;
    padding: 8px 24px;
    border-radius: 999px;
    background: var(--titulo);
    color: #1a1a1a;
    font-weight: 700;
    font-size: 0.85rem;
    text-decoration: none;
}

.botao:hover,
.botao:focus-visible {
    filter: brightness(1.1);
}

/* ---------- Sobre + rodapé ---------- */
#sobre {
    background: var(--header-bg);
    padding: 36px 20px;
    text-align: center;
}

#sobre h2 {
    color: var(--titulo);
    margin-bottom: 10px;
}

#sobre p {
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.6;
}

footer {
    background: #1d1d1d;
    padding: 16px;
    text-align: center;
    font-size: 0.8rem;
}

/* ---------- Telas pequenas ---------- */
@media (max-width: 640px) {
    header {
        height: auto;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 14px;
    }

    .logo img {
        height: 38px;
    }

    nav {
        gap: 14px;
        flex-wrap: wrap;
    }

    nav a {
        font-size: 13px;
    }
}
```

---

## O que ainda pode ser feito

- Criar as seções ou páginas para as âncoras do menu (`#efeitos`, `#trilhas`, `#formulario`, `#simulador`, `#login`).
- Trocar o fundo por uma versão de maior resolução.
- Transformar o menu em botão "hambúrguer" no celular.
- Retomar o plano de estudos para a prova, que ficou sem resposta.
