// Arrow Function
// Exemplo 1
let soma = (num1, num2) => {
    console.log(num1 + num2)
    return num1 + num2
}
console.log(soma(2, 5));

// Exemplo 2
let texto = total => console.log(total);

console.log(texto = "Meu nome é Rodrigo");

// Exemplo 3
let par = (numero) => {
    if (numero % 2 == 0) {
        return true;
     } else {
         return false;
     }
}
let numero = 4;
console.log(par(numero));