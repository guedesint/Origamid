// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilGanhou = [1959, 1962, 1970, 1994, 2002]

console.log(brasilGanhou);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < brasilGanhou.length; i++) {
  let anos = brasilGanhou[i]
  console.log(`O Brasil ganhou a copa em ${anos}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let index = 0; index <= frutas.length; index++) {
  const fruta = frutas[index];

  console.log(fruta);

  if (fruta === 'Pera') {
    break;
  }
  
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta =  frutas[frutas.length-1];
console.log(ultimaFruta);



