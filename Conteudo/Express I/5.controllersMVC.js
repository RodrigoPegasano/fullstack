// Controllers = Fornece escalabilidade e maior controle sobre o código
// Controllers são responsaveis pela comunicação entre modelos e visualizações

// TUDO QUE FOR FEITO AQUI ESTÁ EM 'CRIAÇÕES' -> 'CRIANDO ROUTESCONTROLLERS'

// 1. Dentro da pasta 'Criando RoutesControllers' criar uma pasta chamada 'Controllers'

// 2. Dentro de 'Controllers' criar arquivo com nome (exemplo) 'ProdutoController.js'

// 3. Em produtos 'ProdutosControllers' colocamos, exemplo:
const produtoController = {
criarProduto: (req, res) => {
    res.send('Criando um produto')
},
excluirProduto: (req, res) => {
    let id = req.params.id
    res.send('Deletando o produto com id: ' + id);
 }
}

module.exports = produtoController;

// 4. Na pasta 'Routes' -> 'produtos.js' criamos, exemplo:
const express = require('express');
const produtoController = require('../Controllers/produtoController');
const router = express.Router();

router.get('/criar', produtoController.criarProduto);

router.get('/excluindo/:id?', produtoController.excluirProduto);

module.exports = router;

// É UM POUCO DIFERENTE DO QUE FIZEMOS ATÉ AGORA APENAS USANDO OS ROUTES, MAS ESSE MODO LIGA O CONTROLLERS (CONTEM O QUE SERÁ FEITO
// EM DETERMINADOS MOMENTOS QUANDO IMPRIMIR NO SERVIDOR) COM OS ROUTES QUE SERVE COMO CONEXÃO PARA O ARQUIVO 'APP.JS' QUE CONTEM O
// PORTÃO DO SERVIDOR ONDE TUDO SERÁ MOSTRADO