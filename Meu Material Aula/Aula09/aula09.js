// Servidor utilizando Express
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('testando')
})

// criar rota home, onde quando acessada terá que retornar Olá, você está na rota home
app.get('/home', (req, res) => {
  res.send('Olá, você está na página home')
})

// criar rota users, onde quando acessada terá que retornar Olá, você está na lista de usuários
app.get('/users', (req, res) => {
  res.send('Olá, você está na lista de usuários')
})

// Imprimindo Array:
app.get('/array', (req, res) => {
    let array = ['Rodrigo', 22, "Argentina"];
    res.send(array);
})

// Imprimindo objeto:
app.get('/objeto', (req, res) => {
    let objeto = {Nome: 'Rodrigo', Idade: 22, Nacionalidade: 'Argentina'}
    res.send(objeto);
})

// Rota parametrizada - Modo 1
app.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', (req, res) => {
    let nome = req.params.nome;
    let preco = req.params.preco;
    let quantidade = req.params.quantidade;
    let codigo = req.params.codigo;
  
    res.send({Nome: nome,
              Preço: preco,
              Quantidade: quantidade,
              Código: codigo
            });
})

// Rota parametrizada - Modo 2
app.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', (req, res) => {
    let { nome, preco, quantidade, codigo } = req.params;
    
    let produto = {Nome: nome,
        Preço: preco,
        Quantidade: quantidade,
        Código: codigo
      }
    
    res.send(produto);
})

app.listen(3000, () => {
  console.log('servidor rodando')
})