// Closures
// São funções que vivem dentro de outras funções
function saudacao (nome){
    let parteUmMensagem = "Olá";
    let parteDoisMensagem = ", seja bem vindo!";

    function juntar(){
        return parteUmMensagem + " " + nome + parteDoisMensagem;
    }
    return juntar();
}

console.log(saudacao("Rodrigo"));