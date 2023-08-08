
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


// const carros2 = ['Ford', 'Fiat', 'VW'];

// carros2.unshift('Honda', 'Kia'); // 5 // unshift adiciona um item no inicio da array e retorna quantos itens tem na array 
// carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros2.push('Ferrari'); // 6 //push adiciona um item no final da array e retorna quantos itens tem na array
// carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


// carros2.pop(); // pop remove o ultimo item do array e retorna o item removido
// carros2.shift(); // pop remove o primeiro item do array e retorna o item removido


// const carros = ['Ford', 'Fiat', 'VW', 'Honda']; 
// carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford']; //inverte os itens da array e retorna a nova array.

// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// carros.splice(1, 0, 'Kia', 'Mustang'); // []
// carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']


// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']


// todos os metodos acima modificam a array.
// Os metodos abaixo nao modificam a array,  apenas retornam uma array modificada.
//[].concat() ira concatenar a array com o valor passado.


// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2); //aqui transportes esta concatenando as duas arrays e retornando uma array so 
// // ['Barco', 'Aviao', 'Carro', 'Moto'];

// const maisTransportes = [].concat(transporte1, transporte2, 'Van'); // e aqui esta concateando as duas arrays e a ainda adicionando mais um atributo e o retorno vai ser uma array so retornando uma arrays com todos os valores somados e sempre que concatenar começar com uma array 
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// linguagens.includes('css'); // true //includes retorna um valor blueano 
// linguagens.includes('ruby'); // false
// linguagens.indexOf('python'); // 4
// linguagens.indexOf('js'); // 2 // indexOf sempre retorna o primeiro item que ele encontra 
// linguagens.lastIndexOf('js'); // 5 // o lastIndexOf sempre retorna o ultimo item que ele encontra


//[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.


// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.slice(3); // ['php', 'python']
// linguagens.slice(1, 4); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens.slice();


