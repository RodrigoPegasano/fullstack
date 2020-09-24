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