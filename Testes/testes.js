// Exemplo funções
function exemplo(string){
    console.log(string);
}
let string = "Meu nome é Rodrigo Pegasano";
console.log(string);

// Exemplo funçoes com if
function soma(numA, numB){
    if (numA > numB){
        console.log("Numero A é maior que Numero B");
    } else if (numA == numB){
        console.log("Os numeros são iguais");        
    } else if (numA < numB){
        console.log("Numero A é menor que Numero B");
    } else {
        console.log("Não tem como comparar, um ou mais parâmetros não é um número");
    }
}
let numA = "Oi";
let numB = 2;

soma(numA, numB);

// Exemplo com switch
function comparar(numero){
switch (numero) {
    case 10 :
        console.log("Positivo");
        break;
    case 0 :
        console.log("Neutro");
        break;
    case -10 :
        console.log("Negativo");
        break;
    default:
        console.log("Não tem como comparar");
        break;
 }
}
let numero = 10;

comparar(numero);

// Método de string (exercicio 3 do playground)
function substituicaoRapida(textoTotal, palavraTrocar, palavraNova){
    return textoTotal.replace(palavraTrocar, palavraNova);
}
let textoTotal = "Meu nome é Rodrigo";
let palavraTrocar = "Rodrigo";
let palavraNova = "Matias";

console.log(substituicaoRapida(textoTotal, palavraTrocar, palavraNova));

// Método de string (exercicio 4 do playground)
let frase = "Meu nome é Rodrigo";
let palavraDoTexto = "oi";
function menciona(frase, palavraDoTexto){
     if (frase.indexOf(palavraDoTexto) >= 0){
        return true
     } else {
        return false
   }
}

console.log(menciona(frase, palavraDoTexto));

//Método de string (exercicio 5 do playground)
let texto = "Oi, meu nome é Rodrigo";
let nomeUsuario = texto.slice(15, 23);

console.log(nomeUsuario);

// Exemplo mais complexo
let texto2 = "Oi, meu nome é Rodrigo";
console.log(texto2.indexOf("meu"));

let nomeUsuario2 = texto2.slice(texto2.indexOf("m"), texto2.indexOf(" ", 7));

console.log(nomeUsuario2);

// Arrow function
let somatoria = (nume1, nume2) => {
    return (nume1 + (nume2 * 2)) / 2;
}

console.log(somatoria(2, 5));

// Callback
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

// Outro metodo callback
let dobroDoNum = numFun => numFun * 2;

let triploDoNum = numFun => numFun * 3;

let aplicando = (numFun, operacao1) => operacao1(numFun);

console.log(aplicando(9, triploDoNum));

// Exercicio 1 - Métodos de array 1 - Opção 1
let alunos = ["João", "Pedro", "Jorge", "Francisco"];
function indiceJoao(alunos){
    console.log(alunos)
}
function indiceFrancisco(alunos){
    console.log(alunos)
}

indiceJoao(alunos.indexOf("João"));
indiceFrancisco(alunos.indexOf("Francisco"));

// Exercicio 1 - Métodos de array 1 - Opção 2
let alunos2 = ["João", "Pedro", "Jorge", "Francisco"];

let indiceJoao2 = alunos2.indexOf("João");
let indiceFrancisco2 = alunos2.indexOf("Francisco");

console.log(indiceJoao2);
console.log(indiceFrancisco2);

// Exercicio 2 - Métodos de array 1
let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);

// Exercicio 3 - Métodos de array 1
let estudantes = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

  let alunoFormado = estudantes.pop()
  console.log(alunoFormado);

  // Exercicio 4 - Métodos de array 1
  let estudantes1 = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
  ]

  console.log(estudantes1.push({nome: "João", media: 5, curso: "iOS"}, {nome: "Miguel", media: 2, curso: "Android"}));
  console.log(estudantes1);

  // Exercicio 5 - Método de array 1
  let estudantes2 = [
    {
       nome: 'Álvaro',
       media : 9,
       curso : 'Android',
     },
      {
        nome: 'Daniel',
        media : 6,
        curso : 'Full Stack',
      },
      {
        nome: 'Alexis',
        media : 3,
        curso : 'iOS',
      },
    ]
let alunoDesistente = estudantes2.shift();
console.log(alunoDesistente);
console.log(estudantes2);

// Exercicio 6 - Método de array 1
let estudantes3 = [
  {
    nome: 'Alvaro',
    media : 9,
    curso : 'Android',
  },
  {
    nome: 'Daniel',
    media : 6,
    curso : 'Full Stack',
  },
  {
    nome: 'Alexis',
    media : 3,
    curso : 'iOS',
  }
]
console.log(estudantes3.unshift({nome: "Mariana", media: 9, curso: "Full Stack"},{}))
console.log(estudantes3);

// Método de array 2 - Exercicio 1
let numeros1 = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros1.filter(function(osNumeros){
    return osNumeros > 18;
});

console.log(maiores);

// Exercicio for in / for of
let fraseVertical = "Essa semana vou no colearning";

for(let naVertical of fraseVertical){
    console.log(naVertical[0]);
}

// Exercicio objeto date
let data = new Date();

console.log(data.setYear(2020));
console.log(data.setMonth(5));
console.log(data.setDate(14));

console.log(data);

// Date();
let dataAtual = Date();
console.log(dataAtual);