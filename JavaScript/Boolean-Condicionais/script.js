// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeGabriel = 25;
var idadeManoela = 45
var idadeGilmar = 48

if (idadeGabriel > idadeManoela && idadeGilmar) {
  console.log("Sua idade é maior");
}else if (idadeGabriel === idadeGilmar || idadeGabriel === idadeManoela) {
  console.log("Sua idade é igual");
}else{
  console.log("Sua idade é menor");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta,!!empregoFuturo,!!possuiDoutorado,!!idade,!!nome);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}