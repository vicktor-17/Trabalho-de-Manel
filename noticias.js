// ===== COMO ATUALIZAR AS FOFOCAS =====
// 1) Copie um bloco { ... } da lista abaixo e cole no TOPO da lista.
// 2) Troque os textos (título, resumo, data, fonte e link).
// 3) Em "categoria" use: lancamento, anuncio, rumor ou mercado.
// 4) Troque a data em ATUALIZADO.
// Dica: coloque "destaque: true" só na notícia principal do dia.

const ATUALIZADO = "2026-11-19";

const NOTICIAS = [
    {
        titulo: "GTA 6 chega hoje ao PS5 e ao Xbox Series",
        resumo: "O grande lançamento da semana sai hoje (19/11) para PS5 e Xbox Series X|S. Para PC, ainda não há data anunciada.",
        categoria: "lancamento",
        data: "2026-11-19",
        fonte: "Oficina da Net",
        url: "https://www.oficinadanet.com.br/games/74199-lancamentos-jogos-semana-16-a-22-novembro-2026",
        destaque: true
    },
    {
        titulo: "29 lançamentos na semana de 16 a 22 de novembro",
        resumo: "Além de GTA 6, a lista inclui Goat Simulator 3 – Ticket to Dizzyworld em sete plataformas e The Binding of Isaac: Repentance+ no Switch 2.",
        categoria: "lancamento",
        data: "2026-11-16",
        fonte: "Oficina da Net",
        url: "https://www.oficinadanet.com.br/games/74199-lancamentos-jogos-semana-16-a-22-novembro-2026"
    },
    {
        titulo: "Remake de Zelda: Ocarina of Time chega ao Switch 2",
        resumo: "O remake do clássico saiu em 5/11 com avaliações muito positivas e já aparece entre os jogos mais bem avaliados do ano, segundo o Playday.",
        categoria: "lancamento",
        data: "2026-11-05",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "Switch 2 em queda e PS5 perto dos 100 milhões",
        resumo: "Nos resultados financeiros, a Nintendo reportou queda de 37% nas vendas do Switch 2 no ano. A Sony disse que o PS5 está perto de 100 milhões de unidades vendidas.",
        categoria: "mercado",
        data: "2026-11-05",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "World of Warcraft: Forever chegou ao PC",
        resumo: "Uma releitura da experiência de 2004, com novas zonas, missões e combinações de raça e classe. Quem já assina o WoW joga sem pagar a mais.",
        categoria: "lancamento",
        data: "2026-11-04",
        fonte: "Canaltech",
        url: "https://canaltech.com.br/games/lancamentos-jogos-novos-novembro-2026/"
    },
    {
        titulo: "God of War Laufey fica para 2027",
        resumo: "O jogo sai só em maio de 2027. Golf With Your Friends 2 também foi adiado para 2027.",
        categoria: "anuncio",
        data: "2026-11-04",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "The Elder Scrolls VI ganha título: Sentinel",
        resumo: "O próximo Elder Scrolls foi confirmado com o nome Sentinel, segundo o resumo semanal do Playday.",
        categoria: "anuncio",
        data: "2026-11-03",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "Ubisoft quer comprar a Arkane Lyon?",
        resumo: "Um relatório diz que a Ubisoft está entre as interessadas no estúdio. É informação de bastidor, não um anúncio oficial.",
        categoria: "rumor",
        data: "2026-11-03",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "Game Pass perde 14 jogos, inclusive GoldenEye 007",
        resumo: "A saída em massa do catálogo inclui o clássico de tiro GoldenEye 007.",
        categoria: "mercado",
        data: "2026-11-02",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    },
    {
        titulo: "Walmart vai indenizar quem teve pré-venda do Switch 2 cancelada",
        resumo: "A rede oferece US$ 519 aos clientes que tiveram cancelada a pré-venda de uma edição temática de Zelda do Switch 2.",
        categoria: "mercado",
        data: "2026-11-02",
        fonte: "Playday",
        url: "https://playday.one/2026/11/08/weekly-roundup-november-2-8/"
    }
];

// ===== DAQUI PARA BAIXO NÃO PRECISA MEXER =====

const ROTULOS = {
    lancamento: "Lançamento",
    anuncio: "Anúncio",
    rumor: "Rumor",
    mercado: "Mercado"
};

function lerData(iso) {
    const [ano, mes, dia] = iso.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
}

function criarCard(n) {
    const card = document.createElement("article");
    card.className = "card";
    if (n.destaque) card.classList.add("n-destaque");
    if (n.categoria === "rumor") card.classList.add("n-rumor");
    card.dataset.categoria = n.categoria;

    const topo = document.createElement("div");
    topo.className = "n-topo";

    const tag = document.createElement("span");
    tag.className = "n-tag n-tag--" + n.categoria;
    tag.textContent = n.destaque ? "Destaque · " + ROTULOS[n.categoria] : ROTULOS[n.categoria];

    const data = document.createElement("time");
    data.dateTime = n.data;
    data.textContent = lerData(n.data).toLocaleDateString("pt-BR", { day: "numeric", month: "short" });

    topo.append(tag, data);

    const titulo = document.createElement("h3");
    titulo.textContent = n.titulo;

    const resumo = document.createElement("p");
    resumo.textContent = n.resumo;

    const link = document.createElement("a");
    link.className = "n-link";
    link.href = n.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ler em " + n.fonte + " →";

    card.append(topo, titulo, resumo, link);
    return card;
}

const lista = document.getElementById("lista-noticias");
const atualizado = document.getElementById("atualizado");

if (atualizado) {
    atualizado.textContent = "Atualizado em " + lerData(ATUALIZADO).toLocaleDateString("pt-BR") + ".";
}

if (lista) {
    NOTICIAS
        .slice()
        .sort((a, b) => (b.destaque === true) - (a.destaque === true) || b.data.localeCompare(a.data))
        .forEach(n => lista.appendChild(criarCard(n)));
}

// Filtros por tipo de notícia
const botoes = document.querySelectorAll(".filters button");
botoes.forEach(b => b.addEventListener("click", () => {
    botoes.forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    const filtro = b.dataset.filtro;
    document.querySelectorAll("#lista-noticias .card").forEach(c => {
        c.hidden = filtro !== "todos" && c.dataset.categoria !== filtro;
    });
}));