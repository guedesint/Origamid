// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    element.classList.toggle("ativo");
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const elementoSite = document.body;

// elementoSite.addEventListener('click', (event) => {
//   console.log(event.target);
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const elementoSite = document.body;

elementoSite.addEventListener("click", (event) => {
  const elemento = event.target;
  elemento.remove();
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function fonteAlta(event) {
  if (event.key === "t") {
    const body = document.body;

    // body.classList.toggle('fonte-alta')
  }
}
window.addEventListener("keydown", fonteAlta);
