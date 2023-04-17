// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq-lista");
const primeiroDT = faq.querySelector("dt");
const proximoDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
