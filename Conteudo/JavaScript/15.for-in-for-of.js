// for in
// So itera sobre objetos literais
let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Pegasano",
    idade: 22
}

for(let propiedades in pessoa){
    console.log(propiedades); // Retorna as propiedades que já existem na variavel pessoa.
    console.log(pessoa[propiedades]); // Retorna os elementos de cada propiedade da variavel pessoa.
}

// for of
let series = ["Friends", "Dark", "Sense 8", "SoA", "AHS"];

for(let umaSerie of series){
    console.log(umaSerie); // Retorna os elementos da array series.
    console.log(umaSerie[0]); // Retorna os elementos da array series na vertical (neste caso, a primeira letra de cada um).
}