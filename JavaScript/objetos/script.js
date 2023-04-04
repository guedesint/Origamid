// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: "Gabriel",
  sobrenome: "Guedes",
};
// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = () => {
  return `${pessoa.nome} ${pessoa.sobrenome}`;
};

// function nomeCompleto(pessoa) {
//     return console.log(pessoa.nome + " " + pessoa.sobrenome);
//   }

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  idade: 10,
  cor: 'preto',
  latir(pessoa) {
    if (pessoa === 'homem') {
      return "latir"
    }else {
      return "Nao latir"
    }
  }
}
