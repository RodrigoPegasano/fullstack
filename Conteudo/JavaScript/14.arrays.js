// Array ou Matriz
// Arrays nos permitem gerar uma coleção de dados ordenados.
// Em uma única array podemos armazenar inúmeros dados.
// Cada dado dentro do array está determinado por uma posição (0, 1, 2, 3..).
// Dentro de uma array pode também haver outra array.

// Exemplo 1
let melhoresSeries = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function mostrarSerie(melhoresSeries){
    console.log(melhoresSeries);
}

mostrarSerie(melhoresSeries.length); // Retorna o total de elementos que contem a array.
mostrarSerie(melhoresSeries[0]); // Retorna o dado que está nessa posição.

// Exemplo 2
let pessoa = ["Rodrigo", "Pegasano", 22, 1.72, false, ["Tenis", "Futebol", "Rugby", "Música", "Café"]];
function mostrarPessoa(pessoa){
    console.log(pessoa);
}

mostrarPessoa(pessoa.length); // Retorna o total de elementos que contem a array.
mostrarPessoa(pessoa[5]); // Retorna o dado que está nessa posição.

// Método de array 1 - .push()
let series = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function adicionarSeries(series){
    console.log(series);
}

adicionarSeries(series.push("Modern Family", "SoA", "Mindhunter")); // Adiciona um novo elemento á array. SEMPRe no final dela.
adicionarSeries(series[7]);
adicionarSeries(series); // Imprime como ficou a array.

// Método de array 1 = .pop
let series2 = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function tirarSeries(series2){
    console.log(series2);
}

tirarSeries(series2.pop()); // Tirar um elemento da array. SEMPRE tira o último elemento dela.
tirarSeries(series2.length);
tirarSeries(series2); // Imprime como ficou a array.

// Método de array 1 - .shift()
let series3 = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function tirarSeriesComecoArray(series3){
    console.log(series3);
}

tirarSeriesComecoArray(series3.shift()); // Tirar um elemento da array. SEMPRE tira o primeiro elemento dela, o da posição 0.
tirarSeriesComecoArray(series3.length);
tirarSeriesComecoArray(series3); // Imprime como ficou a array.

// Método de array 1 - .unshift()
let series4 = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function colocarSeriesComecoArray(series4){
    console.log(series4);
}

colocarSeriesComecoArray(series4.unshift("Modern Family", "SoA", "Mindhunter")); // Coloca um elemento na array. SEMPRE na posição 0 dela.
colocarSeriesComecoArray(series4[3]);
colocarSeriesComecoArray(series4); // Imprime como ficou a array.

// Método de array 1 - .indexOf() e .lastIndexOf()
let series5 = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function posicaoSerie(series5){
    console.log(series5);
}

posicaoSerie(series5.lastIndexOf("Flash")); // Mostra a posição onde se encontra esse elemento no array. Começa contando do útltimo elemento.
posicaoSerie(series5.indexOf("Dark")); // Mostra a posição onde se encontra esse elemento no array. Começa a contar do elemento 0.

// Método de array 1 - .jois()
let series6 = ["Friends", "Breaking Bad", "GOT", "Dark", "How I Met Your Mother", "Sense 8"];
function stringSerie(series6){
    console.log(series6);
}

stringSerie(series6.join()); // Retorna os valores da array em formato de string separados por virgula.
stringSerie(series6.join(", ")) // Retorna o mesmo porém com virgula e espaço entre cada elemento.

// Método de array 2 - map()
let numeros = [2, 8, 16];

let dobroNumeros = numeros.map(function(umNumero){
    return umNumero * 2;
});

console.log(dobroNumeros); // Retorna uma array com os valores da outra array dobrados.

// Método de array 2 - filter()
let idades = [10, 87, 93, 16, 3, 7, 19, 18];

let maiores = idades.filter(function(idadesMaiores){
    return idadesMaiores >= 18;
});

console.log(maiores); // Retorna em uma array os elementos que concordam com a condição colocada.

// Método de array 2 - reduce()
let numerosSoma = [10, 87, 93, 16, 3, 7, 19, 18];

let somaTotal = numerosSoma.reduce(function(acumulador, numerosSoma){
    return acumulador + numerosSoma;
});

console.log(somaTotal); // Recebe dois parâmetros ('acumulador' com valor inicial 0) e a array com os valores, e retorna a soma de todos eles.

// Método de array 2 - forEach() (exemplo 1)
let paises = ["Argentina", "Brasil", "Colombia", "Chile"];

paises.forEach(function (listaPaises){
    console.log(listaPaises); // Apenas mostra os elementos da array.
});

// forEach() (exemplo 2)
let numerosRetornados = [10, 87, 93, 16, 3, 7, 19, 18];

numerosRetornados.forEach(function(oNumero, indice){
    console.log("Indice " + indice + ": " + oNumero); // Retorna "Indice x: y"
})

