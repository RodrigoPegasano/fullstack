const express = require('express');

const app = express(); // Esse 'app' é para poder acessar tudo que está contido no express
//                        Se quiser conferir, escrever 'console.log(app);'

app.get('/', (req, res) => {
    res.send("Pagina inicial");
})
app.get('/Contatos', (req, res) => {
    res.send(["Telefone", "Fixo", "Localização"]);
})

app.get('/Identificacao', (req, res) => {
    res.send({nome: "Rodrigo", idade: 22, nacionalidade: "Argentina"});
})

app.get('/Historia', function (req, res) {
    res.send("Historia da empresa");
})

// Rota Parametrizada:
app.get('/Produto/:id?', (req, res) => { // O "?" diz que o id é opcional. Se não tiver nenhum, imprime 'undefined'
    let {id} = req.params;
    //console.log("Produto com o id: ", id); // Isso será impresso no terminal, não no google!
    res.send("Produto de id: " + id); // Se quisermos que apareça no Google! NOTA: TEMOS QUE USAR O + E NÃO A VIRGULA
})

app.listen(3000, () => {
    console.log("Senvidor funcionando");
})
