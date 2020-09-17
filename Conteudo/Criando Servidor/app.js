const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});

        switch(req.url){
            case "/":
                res.end("Pagina inicial");
                break;
            case "/contato":
                res.end("Pagina de contato");
                break;
            case "/casos-de-sucesso":
                res.end("Pagina de historias de sucesso dos clientes");
                break;
            default:
                res.end("Como voce chegou aqui?");
                break;
        }
}).listen(2112);