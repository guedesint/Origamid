// Adicione a classe ativo a todos os itens do menu
const listaMenu = document.querySelectorAll(".menu a");
listaMenu.forEach((element) => {
  element.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
listaMenu.forEach((element) => {
  element.classList.remove("ativo");
});

listaMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const listaImg = document.querySelectorAll("img");
listaImg.forEach((element) => {
  const verificaoImg = element.hasAttribute("alt");
  console.log(element, verificaoImg);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com");
console.log(link);
