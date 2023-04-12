const img = document.querySelector("img");
img.addEventListener("click", () => {
  console.log("clicou");
});

// Mas a boa pratica é declarar a callback fora
// para facilitar na hora de debbugar.
// Exemplo de Boa pratica Abaixo;

// const img = document.querySelector('img');

function callback() {
  console.log('Clicou');
}
img.addEventListener('click', callback)


const animaisLista = document.querySelector('.animais-lista');
function callbackAnimais(event) {
  console.log(event.target);
}
animaisLista.addEventListener('click' , callbackAnimais);

const linkExterno = document.querySelector('a[href^="http"]');
console.log(linkExterno);

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this);
  // this  ou event.currentTarget é a mesma coisa  
  console.log(event.currentTarget);
}
// linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('scroll' , handleEvent);
// window.addEventListener('resize' , handleEvent);
// window.addEventListener('keydown' , handleEvent);
function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('fullscream');
  }else if (event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown' , handleKeyboard)

const todasImagens = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
}

todasImagens.forEach((element) => {
  element.addEventListener('click',handleImg) 
});