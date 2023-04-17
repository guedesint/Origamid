// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');
// // console.log(h1.innerHTML);
// // console.log(h1.innerText);
// // console.log(h1.outerHTML);


// // h1.outerHTML ='<p> Novo Titulo </p>';
// // console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');
// // pegando o ultimo li de animais-lista
// //console.log(lista.children[--lista.children.length]);
// //ou
// //console.log(lista.querySelector('li:last-child'));


// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// //contato.insertBefore(mapa, titulo)//dois parametros qual elemento eu quero inserir e o segundo parametro quero que ele fique antes do titulo
// // contato.appendChild(lista); // move lista para o final de contato
// // contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// // contato.removeChild(titulo); // remove titulo de contato
// // contato.replaceChild(lista, titulo); // substitui titulo por lista


// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Titulo ';
// novoH1.classList.add('titulo');

// mapa.appendChild(novoH1)//aplicando o novoh1 dentro e abaixo do ultimo filho do mapa


const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);