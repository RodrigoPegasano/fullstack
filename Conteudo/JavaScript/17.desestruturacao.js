// Desestruturação ou Alocação por desestruturação
// Extrai dados de uma array ou objetos literais
// Este método NÃO modifica e nem altera o array ou objeto literal

// Em arrays
let cores = ["Azul", "Branco", "Amarelo", "Vermelho", "Roxo", "Rosa"];

let [cor1, cor2, cor3, cor4, cor5, cor6] = cores;

console.log(cor4); // Retorna a cor do parâmetro que corresponde aos criados. Lembrando que deve estar SEMPRE na ordem.

// Em objetos literais
let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Pegasano",
    idade: 22,
    altura: 1.72,
    seriesFavoritas: ["Friends", "Dark", "Sense 8", "AHS"]
}

let {sobrenome, seriesFavoritas} = pessoa;

console.log(seriesFavoritas); // Me permite pegar das caracteristicas que desestruturei.
console.log(seriesFavoritas[1]); // Neste caso, escolhi pegar de um parâmetro que é uma array, o elemento do indice 1.

// Exemplo 1
let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [item1, item2, item3, item4, item5] = destinosIncriveis;

console.log(item2, item4);