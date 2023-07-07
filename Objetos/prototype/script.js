 function Pessoa(nome,idade) {
  this.nome = nome;
  this.idade = idade;
 }

 var obj = { 
  nome: 'Andre',
  idade : 33, 
 }

 Pessoa.prototype.andar = function () {
  return this.nome + 'Pessoa andou';
 }

 Pessoa.prototype.nadar = function () {
  return this.nome + 'Pessoa nadou';
 }

 const andre =  new Pessoa ('Andre', 25)

//  console.log(Pessoa.prototype);
//  console.log(andre.nadar());

