// Vamos fazer funcionar um modulo node 'file system' (fs)

// MÓDULO NATIVO

// require()
// O require chama uma pasta que você quer acessar no seu computador, uma file system
const fs = require('fs');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

console.log(dados);
// O readFileSync vai ler o as pastas que você mandar ele pesquisar
// No () colocamos __dirname que analiza todas as pastas no seu computador e depois colocamos como complemento '/dados.txt' pois é o nosso
// destino final
// O 'utf8' para ele saber as cadeias de caracteres


// MÓDULO INSTALADO
const moment = require('moment');

let data = moment().format('MMM-YYYY');

console.log(data);
// moment é a biblioteca instalada
// format para formatar e a gente esta pedindo o mês e ano separados por um traço


// CHAMANDO O MEU MÓDULO CRIADO
const herois = require('./Superherois');

console.log(herois);