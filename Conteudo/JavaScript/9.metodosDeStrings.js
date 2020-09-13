// .length
// Exemplo 1
let digitos = "Sei usar o JavaScript";

console.log(digitos.length); // Retorna o total de caracteres.

// Exemplo 2
let total = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(total.length);

// .indexOf()
let pegar = "Olá mundo";

console.log(pegar.indexOf("mundo")); // Retorna a posição. Caso o que você procura não for encontrado, retornará -1.

// .slice()
let nomeCompleto = "Rodrigo Pegasano";

console.log(nomeCompleto.slice(8, 16)); // Imprime o que está entre a posição incial (8) e final (16) que determinamos a ele.

// .trim()
let frase = "  Meu nome é Rodrigo Pegasano  ";

console.log(frase.trim());

// .split()
let transformarEmArray = "Meu nome é Rodrigo Pegasano e tenho 22 anos";

console.log(transformarEmArray.split(""));

// .replace()
let substituir = "Meu nome é Rodrigo e tenho 22 anos";

console.log(substituir.replace(22, 23));