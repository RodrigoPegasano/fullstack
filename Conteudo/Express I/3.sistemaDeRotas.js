// É importante estabelecer e manter uma ordem estrutural quando desenvolvemos

// Organização de arquivo:
// Na pasta de rotas para cada recurso, armazenaremos um arquivo que lhe permitirá solicitar as rotasrelacionadas com esse recurso.
// Cada arquivo js será um módulo que iremos exportar, e então partiremos dentro do ponto de entrada da aplicação: app.js

// SISTEMA DE ROTAS:
// const express = require('express')
// const router = express.Router();/

// EXPORTAÇÃO DE ROUTER:
// const express = require('express');
// const router = express.Router();
// router.get('/', (req,res) => {
   // Código
// });
// router.get('/:genero', (req,res) => {
   // Código
// });
// router.get('/criar', (req,res) => {
   // Código
// });
// module.exports = router;

//SOLICITANDO ARQUIVO NO SISTEMA DE ROTAS:
// const express = require('express');
// const app = express();
// const rotasSeries = require("./routes/series")
// app.use('/series', rotasSeries);