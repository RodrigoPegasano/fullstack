// Sistema de módulos

// TUDO QU VIER A SEGUIR, FOI CRIADO EM 'Criações' -> 'Criando Módulo Node'
// NESSA PASTA ESTÁ TODO O RESULTADO DO QUE MOSTRAREMOS AQUI NO PASSO A PASSO

// Módulo:
// Um bloco de código reutilizável, uma unidade de funcionalidade cuja existência não altera incidentalmente o comportamento de outros blocos
// de código
// Módulos nativos do node: https://nodejs.org/api/


// Dentro da pasta criada, no nosso caso "Node" temos a pasta 'node_modules'
// Dentro da pasta vamos criar um projeto chamado 'app.js'


// Criar meu proprio módulo: (Vamos criar uma lista de superherois com varios dados)
// 1. Criar uma pasta geral, neste caso 'Criando Modulo Node'
// 1. Na pasta geral devemos criar uma pasta. Ex: Superherois
// 2. Dentro da pasta 'Superherois' criar um arquivo 'index.js'
// 3. Dentro de index.js criamos uma variavel com array onde colocamos dados de nome, força e o que quisermos adicionar
// 4. Precisamos chamar esse index.js, para isso colocamos dentro de index.js:
//    module.exports = nomeVariavelCriada;
// 5. Na pasta geral criada (Criando Modulo Node) criamos um arquivo app.js
// 6. No app.js colocamos:
//    const nomeVariaveldoIndex = require('./nomeDaPastaQueTemArray')
//    console.log(nomeVariavelDoIndex);
// Isso dará como resultado a array criada no arquivo index.js