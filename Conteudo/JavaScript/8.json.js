// JSON (Stringify e Parse)
let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Pegasano",
    idade: 22,
    altura: 1.72
}

let json = JSON.stringify(pessoa); // Recebe uma array ou objeto e devolve uma string. Devolve os valores entre aspas.
let deNovo = JSON.parse(json); // Recebe uma string e devolve uma array ou objeto.

console.log(deNovo);