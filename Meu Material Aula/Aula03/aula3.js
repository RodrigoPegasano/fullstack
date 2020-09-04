// Exercicio 1
function servicos(pet,servico){
    servico(pet);
  }

  function banho(pet){
      console.log("O pet: " + pet + " esta no banho!");
  }

  function tosa(pet){
    console.log("O pet: " + pet + " esta na tosa!");
}
servicos("Mike", tosa);
servicos("Luna", banho);
