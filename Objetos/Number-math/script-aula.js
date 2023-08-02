console.log(Number.isNaN('uisas'));
console.log(Number.isInteger(99.19273182));

console.log(Number.parseFloat('33300.333')); // nao pode ser passado nenhum caracter antes do numero somente depois 
console.log(Number.parseFloat('100.27 Reais')); // como aqui de exemplo
console.log(Number.parseInt('100.27 Reais')); // parseInt ele vai retornar um numero inteiro 
console.log(Number.parseInt('100.49'));


// lembrando que o toFixed sempre vai retornar o valor como uma string 
// e se eu usar o toFixed sem nenhum paremetro ele vai aredondar o numero e me retornar um numero inteiro

const preco = 10.95453;

//toFixed vai retornar sempre o numero com as casas decimais que eu por dentro do parametro
console.log(preco.toFixed(2)); 
// vai retornar o valor 10.95

console.log(preco.toFixed(4));
// vai retornar o valor 10.9545

// O toString sempre vai transformar o numero em uma string
console.log(preco.toString(10.95453));


// O toLocaleString vai formatar o numero de acordo com a lingua e opçoes passadas

let valor = 59.49;
console.log(valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $59.49
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 59,49

// const aleatorio = Math.floor(Math.random() * (50 - 10 + 1)) + 10; // vai retornar o numero aleatorio entre 50 e 10 
// const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

const aleatorio = Math.random() * 100; // vai me retornar um numero de 1 a 100.  tipos de metodos do math //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 

console.log(aleatorio); 



