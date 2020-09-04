// Spread Operators ideia: Juntar arrays em uma única array
let frutasBoas = ["Banana", "Pera", "Maçã", "Melancia"];
let frutasRuins = ["Ameixa", "Pessego", "Uva", "Laranja"];

let todasAsFrutas = [...frutasBoas, ...frutasRuins];
console.log(todasAsFrutas);

// Spread em Objetos
let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Pegasano",
    idade: 22
}

let infoPessoal = {
    altura: 1.72,
    tel: 986486009,
    rg: 658222,
    ...pessoa
}

let maisInfo = {
    endereco: "Av. Universitario",
    numero: 585,
    ...infoPessoal
}

console.log(maisInfo);

// Spread em Funções. Devolve os valores em uma array
function letras(...parametros) {
    console.log(parametros)
    // Se a gente coloca "console.log(parametros[x])" algum número no lugar de "x", devolverá o elemento dessa posição.
}

letras("a", "b", "c", "d");