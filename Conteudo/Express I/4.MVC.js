// Design Patterns - MVC = Model-View-Control
// Organizando o nosso projeto

// Recomendação do Vini:
// TODO O PROCESSO ESTÁ EM CRIAÇÕES' -> 'CRIANDO ROTESCONTROLLERS

// 1. Criar uma pasta chama 'Routes' que conterá varios arquivos .js em que dependendo de qual for pedir no servidor,
//    mostrará algo determinado.

// 2. Dentro de 'Routes' podemos colocar pastas como:
//    - produtos.js

// 3. Na pasta 'routes' teremos os modelos do que acontece no servidor quando colocamos algo especifico, exemplo:
      const express = require('express');
      const router = express.Router();

      router.get('/criar', (req, res) => {
        res.send("Criando produto");
      });

      router.get('/excluindo', (req, res) => {
          res.send("Excluindo produto");
      });

      module.exports = router;

// 4. Na pasta 'app.js' criamos o portão onde será impresso no servidor tudo que está na pasta 'routes', exemplo:
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

// 5. No google colocamos 'localhost:2112' e te direcionará onde quiser ir