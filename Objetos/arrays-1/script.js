
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul


// const carros =  new Array('Ford', 'Fiat', 'Honda', );

// carros[2] = 'Ferrari';
// carros[3] =  'Kia';
// carros[20] = 'Kia2';


// console.log(carros.length);

// const li = document.querySelectorAll('li');

// console.log(li);

// const arrayLi = Array.from(li);

// console.log(arrayLi);

// const obj = {
//   0:'Andre',
//   1:'Rafael',
//   2:'Teste',

//   length:4,
// }

// console.log(obj);

// const objArray = Array.from(obj);

// console.log(objArray);

// const frutas  = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length); // aqui to acessando a array dentro da array pegando o index 2 e vendo qual o tamanho do index 0 do index 2 acessando array dentro de array 


// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();
// instrumentos; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]


// console.log(instrumentos);
// console.log(idades);


const carros2 = ['Ford', 'Fiat', 'VW'];

carros2.unshift('Honda', 'Kia'); // 5 // unshift adiciona um item no inicio da array e retorna quantos itens tem na array 
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6 //push adiciona um item no final da array e retorna quantos itens tem na array
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
