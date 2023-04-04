var numero = 10;
var numero2 = 30;

numero += numero2;
//Exemplos abaixo
// var x = 5;
// var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)
console.log(numero);// igual a 40

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Nao pode beber';

console.log(podeBeber);

var possuiFaculdade = true;

if (possuiFaculdade) {
  console.log('Possui sim');
}else {
  console.log('Nao Possui');
}