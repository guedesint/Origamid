const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNode);

gridSectionNode.forEach((item,index) => {
  console.log(item,index);
})

primeiraUl.classList.add('grid-section')

const arrayGrid = Array.from(gridSectionHtml);
console.log(arrayGrid);

arrayGrid.forEach((item) => {
  console.log(item);
})