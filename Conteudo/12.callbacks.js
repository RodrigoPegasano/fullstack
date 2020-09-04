// Callbacks
// É uma função que passa como parâmetro outra função.

// Exemplo 1
let somando = (num1, num2) => num1 + num2;

let resultado = (num1, num2, operacao1) => operacao1(num1, num2);

console.log(resultado(10, 20, somando));

// Exemplo 2
let somatoria = (num3, num4) => num3 + num4;

let calculando = (num3, num4, operacao1) => operacao1(num3, num4);

console.log(resultado(10, 20, (num3, num4) => num3 * num4));

// Exemplo 3
function calcular (numero1, numero2, operacao) {
    operacao(numero1, numero2)
    console.log("A operação deu certo");
}

function soma (numero1, numero2) {
    console.log(numero1 + numero2)
}

calcular(10, 5, soma);

// Exemplo 4
function dobro (numeroFuncao){
    console.log(numeroFuncao * 2);
}

function triplo (numeroFuncao){
    console.log(numeroFuncao * 3);
}

function aplicar (numeroFuncao, operacao){
    operacao(numeroFuncao);
}

aplicar(9, triplo);

// Outro metodo exemplo 4
let dobroDoNum = numFun => numFun * 2;

let triploDoNum = numFun => numFun * 3;

let aplicando = (numFun, operacao1) => operacao1(numFun);

console.log(aplicando(9, triploDoNum));