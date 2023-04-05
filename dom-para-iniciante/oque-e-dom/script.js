// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;
console.log(url);
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const h1Selecionado = document.querySelector("h1");
const classes = h1Selecionado.classList;

console.log(h1Selecionado);
console.log(classes);
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela

const larguraTela = window.innerWidth;
console.log(larguraTela);
