function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

var obj = {
  nome: 'Andre',
  idade: 33,
}

Pessoa.prototype.andar = function () {
  return this.nome + 'Pessoa andou';
}

Pessoa.prototype.nadar = function () {
  return this.nome + 'Pessoa nadou';
}

//const andre =  new Pessoa ('Andre', 25)

//  console.log(Pessoa.prototype);
//  console.log(andre.nadar());

const andre = new Pessoa('André', 28);

andre.nome;
andre.idade;
andre.andar();
andre.nadar();

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
andre.andar();
andre.__proto__.andar();


Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();


const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;


//const lista = document.querySelectorAll('li');

// Transforma em uma array
//const listaArray = Array.prototype.slice.call(lista);


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);



Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);


[1, 2, 3].slice(); // existe
//[1,2,3].from(); // não existe


const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa


function Person(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade
}
Person.prototype.getNomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

const meuNome = new Person('Gabriel', 'Guedes')



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //'HTMLLIElement'
li.click;//'Function'
li.innerText;//'String'
li.value;//'Number'
li.hidden;//'Boolean'
li.offsetLeft;//'Number'
li.click();//undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // 'String'
