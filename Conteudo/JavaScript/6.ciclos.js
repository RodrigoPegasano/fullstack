// for (exemplo numbers)
for (var i = 1; i <= 10; i++) {
    console.log(i * 2);
}

// for (exemplo string)
for (var i = 0; i <= 22; i++) {
    console.log("Oi");
}

// while
let numero = 0;
while (numero < 10){
    console.log("Estou dentro de um while");
    numero++; // Se não colocar esse contador, o valor 0 sempre será menor, ou seja, imprimirá infinitas vezes
}

// do while
let contador = 0;
do {
    console.log("Estou no do while");
    contador++;
} while (contador < 5);