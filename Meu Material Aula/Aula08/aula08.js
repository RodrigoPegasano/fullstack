// Criando servidor com http do VScode:
//const http = require('http');

//http.createServer((req, res) => {
//    res.writeHead(200, {"Content-Type":"text/plain"});
//    switch(req.url){
//        case "/":
//            res.end("Servidor rolando");
//            break;
//    }
//}).listen(3000);

//console.log("O servidor esta sendo executado no portao 3000"); 

// Criando servidor usando a biblioteca EXPRESS:
const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Testando...') // Tambem podemos usar res.end
});

app.listen(3000, () => {
    console.log('Servidor rodando')
});