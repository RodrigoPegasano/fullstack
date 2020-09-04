// Exercicio 1
let dogs = ["Luna", "Mike"];

for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}

// Exercicio 2
let pets = [{nome: "Luna", tipo: "Cachorro", idade: 3}, {nome: "Mike", tipo: "Cachorro", idade: 7}];

for(let i = 0; i < pets.length; i++){
    console.log("Nome: " + pets[i].nome);
    console.log("Tipo: " + pets[i].tipo);
    console.log("Idade: " + pets[i].idade);
}