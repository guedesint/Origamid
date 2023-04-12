const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;


const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();


if (h2rect.top < 0 ) {
  console.log('Passou do elemento');
}

console.log(
  window.innerHeight,
  window.innerWidth,
  window.outerHeight,
  window.outerWidth,
  window.pageXOffset,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)');

console.log(small);
if (small.matches) {
  console.log('Tela menor que 600px');  
}else {
  console.log('Tela maior que 600px');
}