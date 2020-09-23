// Criando routes para o arquivo 'indexRoute.js'
// O DESSA PASTA ESTÁ TRABALHANDO COM O ARQUIVO 'indexRoute.js'
const express = require("express");
const routes = express.Router();

routes.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', (req, res) => {
    let { nome, preco, quantidade, codigo } = req.params;
    
    let produto = {Nome: nome,
        Preço: preco,
        Quantidade: quantidade,
        Código: codigo
      }
    
    res.send(produto);
})

module.exports = routes;