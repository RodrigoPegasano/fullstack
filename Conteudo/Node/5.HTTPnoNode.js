// Criando nosso primeiro servidor

// Tudo que for falado aqui será feito na pasta 'Criações' -> 'Criando Servidor'

// 1. Criar uma pasta
// 2. Dentro da pasta criar arquivo 'app.js'
// 3. Instalar a biblioteca moment
// 4. Colocar essa sequencia no arquivo 'app.js'
//    const http = require('http');
//    http.createServer((req, res) => {
//         console.log("Servidor está rodando...")
//    }).listen(2112, localhost);
// Essa sequencia cria uma http que trabalha com req: request e res: response
// No listen tem uma sequencia de 4 digitos e tambem criamos um nome para o localhost (ou deixamos localhost)
// 5. No terminal rodamos o arquivo app.js, ou seja, 'node app.js' e:
// 6. Se no google chrome colocamos na parte de links 'localhost:2112' ficará carregando e no terminal mostrará "Servidor está rodando", 
//    por enquanto, pois reconheceu o nosso hots criado
//    porem ainda não tem nada para mostrar
// Até aqui o unico que fizemos foi a parte da solicitação do cliente

// Para criar a parte que será a resposta para o cliente:
// 7. Na sequencia criada acima, deletamos a parte do 'console.log()' e colocamos:
//    res.writeHead(200, {"Content-Type":"text/plain"});
//    res.end("Meu primeiro servidor!");

// Resultado geral:
//                  const http = require('http');
//                  http.createServer((req, res) => {
//                       res.writeHead(200, {"Content-Type":"text/plain"});
//                       res.end("Meu primeiro servidor!");
//                  }).listen(2112);
// 8. Se rodarmos 'node app.js' no terminal e
// 9. Colocamos no google 'localhost:2112', imprimirá "Meu primeiro servidor"