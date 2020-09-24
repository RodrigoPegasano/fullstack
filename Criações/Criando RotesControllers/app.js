const express = require('express');
const produtos = require('./Routes/produtos');
const app = express();

app.use('/produtos', produtos);

app.get('/', (req, res) => {
    res.send("Pagina inicial");
})

app.listen(2112, () => {
    console.log("Servidor rodando")
});