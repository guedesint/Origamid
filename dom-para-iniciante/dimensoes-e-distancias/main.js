// Verifique a distância da primeira imagem
// em relação ao topo da página

const imgHeight = document.querySelector("img");
console.log(imgHeight.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImg() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((element) => {
    //soma = soma + element.offsetWidth;
    soma += element.offsetWidth; //essa forma é a mais simplificada porem e o mesmo codigo da linha de cima
  });
  console.log(soma);
}

window.onload = () => {
  somaImg();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((element) => {
  const alturaLink = element.offsetHeight;
  const larguraLink = element.offsetWidth;

  if (alturaLink >= 48 && larguraLink >= 48) {
    console.log("Site Possui Acessibilidade");
  } else {
    console.log("Site Não Possui Acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const tamanhoSite = window.innerWidth;

if (tamanhoSite <= 720) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
  console.log();
}

// ou a forma da aula abaixo

// const browserSmall = window.matchMedia('(max-width:720px)').matches;
// if (browserSmall) {
//   const menu = document.querySelector('.menu');
//   menu.classList.add('menu-mobile')
// }
