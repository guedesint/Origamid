// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(perimetro) {
  var soma = perimetro * 4;
  return console.log(`Seu perimetro tem ${soma} metros`);
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function identidade(primeiroNome, segundoNome) {
  return console.log(`Seu nome completo é ${primeiroNome} ${segundoNome}`);
}

// Crie uma função que verifica se um número é par
function numeroPar(valor) {
  var valorTotal = valor % 2;

  if (valorTotal == 0) {
    console.log("par");
  } else {
    console.log("impar");
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado) {
  return typeof dado;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function mostraConsole() {
  console.log('Gabriel Guedes');
}

addEventListener('click', mostraConsole)


// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
}


