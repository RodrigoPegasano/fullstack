// Servidor utilizando express
const express = require("express")

// Criando aplicacao express
const app = express()

// Importando rotas da aplicacao
const routes = require("./routes")

app.use(routes)

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})