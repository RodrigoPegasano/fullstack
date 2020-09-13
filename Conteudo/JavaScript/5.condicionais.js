// Condicional if e else
let dia = "Sabado";
if (dia == "Sabado") {
    console.log("Vamos pra praia!!");
} else if (dia == "Sexta") {
    console.log("Hoje tem jogo!!");
} else if (dia == "Quarta") {
    console.log("Hoje tem Corinthians!!");
} else {
    console.log("Hoje não tem nada");
}

// If ternário (exemplo 1)
let oMaior = 4 >= 17 ? "O 4 é maior" :
"O 17 é maior";
console.log(oMaior);

//If ternário (exemplo 2)
let OQueTemHoje = "Sabado";
let resultado = OQueTemHoje == "Sabado" || OQueTemHoje == "Sexta" ? "Hoje tem festa" : "Nada especial";
console.log(resultado);

// Switch (exemplo 1)
let diaSemana = "Terça";
switch (diaSemana) {
    case "Segunda" :
        console.log("Hoje se trabalha");
    break;
    case "Sabado" :
        console.log("Hoje tem festa!!");
    break;
    case "Domingo" :
        console.log("Churras!!");
    break;
    default:
        console.log("Hoje é dia merda");
    break;
}

// Switch (exemplo 2)
let diaMensagem = 'segunda-feira';
function fimDeSemana(diaMensagem) {
    switch (diaMensagem) {
    case 'sexta-feira' :
    console.log('Bom fim de semana!');
    break;
    case 'segunda-feira' :
    console.log('Boa semana!');
    break;
    default :
    console.log('Bom dia!');
  }
}
fimDeSemana(diaMensagem);