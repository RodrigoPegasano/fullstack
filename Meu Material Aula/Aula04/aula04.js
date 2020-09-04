function trocarPalavraDaFrase(frase, busca, substituicao){
    return frase.replace(busca, substituicao)
  }
  
  const trocarPalavraDaFraseArrowFunction = (frase, busca, substituicao) =>
    frase.replace(busca, substituicao)
  
  const trocarTodasPalavrasDaFrase = (frase, busca, substituicao) => 
    frase.split(busca).join(substituicao)
  
  // resolvendo de forma que altere apenas a primeira ocorrencia - com function normal sem seguir padrao ES6 e utilizando arrow function
  // console.log(trocarPalavraDaFrase('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))
  
  // resolvendo de forma que altere apenas a primeira ocorrencia - com padrao ES6 e utilizando arrow function
  // console.log(trocarPalavraDaFraseArrowFunction('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))
  
  // resolvendo de forma que altere todas ocorrencias - com padrao ES6 e utilizando arrow function
  console.log(trocarTodasPalavrasDaFrase('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))

  // Exercicio forEach
let pets = [{
  nome: "Mike",
  tipo: "Cachorro",
  idade: 7,
  servicos: []
}, {
  nome: "Luna",
  tipo: "Cachorra",
  idade: 3,
  servicos: []
}, {
  nome: "Toni",
  tipo: "Cachorro",
  idade: 15,
  servicos: []
}, {
  nome: "Luke",
  tipo: "Cachorro",
  idade: 5,
  servicos: []
}];

  const listarPets = () => {
    pets.forEach(function (listarPets){
      console.log("Nome: " + listarPets.nome);
      console.log("Tipo: " + listarPets.tipo);
    })
  }

// listarPets()
// Retorna os parametros seleccionado acima.

const servicosPrestados = (pets, servico) => {
  servico(pets)
}

const darBanhoNoPet = (pets) => {
  let dataAtual = new Date()
pets.servicos.push("O pet " + pets.nome + " tomou banho" + " em " + (dataAtual.getDate()) + "/" + (dataAtual.getMonth()+1) + "/" + dataAtual.getFullYear());
//console.log(pets);
}

const tosarPet = (pets) => {
  let dataAtual = new Date()
pets.servicos.push("O pet " + pets.nome + " foi tosado" + " em " + (dataAtual.getDate()) + "/" + (dataAtual.getMonth()+1) + "/" + dataAtual.getFullYear());
//console.log(pets)
}

servicosPrestados(pets[1], darBanhoNoPet)
servicosPrestados(pets[3], tosarPet)
// Retorna o serviço que está recebendo o pet e a data (dia/mes/ano).

const filtrarPetsNome = (nome) => {
  let petsFiltrados = pets.filter((pet) => {
    return pet.nome == nome
  })
if (petsFiltrados.length == 0){
  return "Nenhum pet encontrado com nome " + nome;
} else {
  return petsFiltrados;
}
}

console.log(filtrarPetsNome("Luke"));