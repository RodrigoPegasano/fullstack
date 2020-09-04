// Date()
let dataAtual = new Date();

console.log(dataAtual); // Retorna ano, mês, dia & hora atual.

// getDay()
console.log(dataAtual.getDay()); // Retorna o número do dia (indice), considerando que a semana começa no Domingo (0), segunda (1), terça (2).

// getDate()
console.log(dataAtual.getDate()); // Retorna o dia do mês atual.

// getMonth()
console.log(dataAtual.getMonth()); // Retorna o numero do mês atual. LEMBRAR: Os meses também começam no numero 0. Sendo Janeiro (0) e Dezembro (11).

// getFullYear()
console.log(dataAtual.getFullYear()); // Retorna o ano atual.

// Exemplo 1
let meuNiver = new Date(1998, 03, 14);

console.log(meuNiver.getDay()); // 2
console.log(meuNiver.getDate()); // 14
console.log(meuNiver.getMonth()); // 3 (Abril)
console.log(meuNiver.getMonth() + 1); // Retorna 4, o mês certinho.
console.log(meuNiver.getFullYear()); // 1998

// Exemplo 2
let dataCriada = new Date('2020-05-23');

console.log(dataCriada); // Retorna a data que eu criei como parâmetro.

// Exemplo 3
let data = new Date();

data.setYear(2020);
data.setMonth(5);
data.setDate(14);

console.log(data); // Retornará a data criada nos .setYear / Month / Date