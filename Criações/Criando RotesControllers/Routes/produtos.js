const express = require('express');
const produtoController = require('../Controllers/produtoController');
const router = express.Router();

router.get('/criar', produtoController.criarProduto);

router.get('/excluindo/:id?', produtoController.excluirProduto);

module.exports = router;