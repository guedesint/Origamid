// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  const somaPassos = idade * 11000;

  this.andou = () => {
    return this.nome + ` Andou ${somaPassos} Passos`;
  }
}

// const pessoa1 = new Pessoa('Gabriel', 25);
// const pessoa2 = new Pessoa('Paola', 26);
// console.log(pessoa1.andou());
// console.log(pessoa2.andou());

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function CriaPessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const individo1 = new CriaPessoa('João', 20);
const individo2 = new CriaPessoa('Maria', 25);
const individo3 = new CriaPessoa('Bruno', 15);



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;

  this.adicionaClasse = (classe) => {
    this.element.forEach((e) => {
      e.classList.add(classe)
    });
  }

  this.removeClasse = (classe) => {
    this.element.forEach((e) => {
      e.classList.remove(classe)
    });
  }
}

const listaLi = new Dom('li');

listaLi.adicionaClasse('teste');
//listaLi.removeClasse('teste');
