const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 10,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 10,
        assistido: true
    },
    {
        id: 3,
        titulo: "Marty Supreme",
        tipo: "filme",
        ano: 2025,
        generos: ["suspense", "drama"],
        nota: 10,
        assistido: true
    },
    {
        id: 4,
        titulo: "Duna",
        tipo: "filme",
        ano: 2021,
        generos: ["ficção científica", "aventura"],
        nota: 8,
        assistido: true
    },
    {
        id: 5,
        titulo: "Duna - Parte 2",
        tipo: "filme",
        ano: 2024,
        generos: ["ficção científica", "aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 6,
        titulo: "Clube da Luta",
        tipo: "filme",
        ano: 1999,
        generos: ["drama"],
        nota: 10,
        assistido: true
    },
    {
        id: 7,
        titulo: "The Office",
        tipo: "série",
        ano: 2005,
        generos: ["comédia"],
        nota: 9,
        assistido: false
    },
    {
        id: 8,
        titulo: "Planeta dos Macacos: A origem",
        tipo: "filme",
        ano: 2024,
        generos: ["ficção científica", "suspense"],
        nota: 8,
        assistido: true
    },
    {
        id: 9,
        titulo: "Thuderbolts*",
        tipo: "filme",
        ano: 2025,
        generos: ["ficção científica", "ação"],
        nota: 7.5,
        assistido: true
    },
    {
        id: 10,
        titulo: "Orgulho e Preconceito",
        tipo: "filme",
        ano: 2005,
        generos: ["drama", "romance"],
        nota: 8.1,
        assistido: false
    }
];

console.log("Catálogo completo:");
console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log(
    "Ano do último item:",
    catalogo[catalogo.length - 1].ano
);

if (catalogo[2].generos.length > 1) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

console.log("LISTAGEM DE TÍTULOS");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item =>
    item.titulo.toUpperCase()
);

console.log("TÍTULOS EM MAIÚSCULO");
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item =>
    item.assistido === false
);

console.log(
    "Quantidade de não assistidos:",
    naoAssistidos.length
);

const notaAlta = catalogo.find(item =>
    item.nota >= 9
);

if (notaAlta) {
    console.log(
        `Primeiro item com nota >= 9: ${notaAlta.titulo} (${notaAlta.nota})`
    );
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

const existeAntigo = catalogo.some(item =>
    item.ano < 2000
);

const todosTemGenero = catalogo.every(item =>
    item.generos.length > 0
);

console.log("Existe item anterior a 2000?", existeAntigo);
console.log("Todos possuem pelo menos 1 gênero?", todosTemGenero);

const quantidadeFilmes = catalogo.filter(item =>
    item.tipo === "filme"
).length;

const quantidadeSeries = catalogo.filter(item =>
    item.tipo === "serie"
).length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Notas</h3>

    <ol>
        ${ranking.map(item =>
            `<li>${item.titulo} - Nota ${item.nota}</li>`
        ).join("")}
    </ol>
`;