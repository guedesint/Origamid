// const img = document.querySelectorAll('img');
// //console.log(img);

// img.forEach((item,index,array) => {
//   //console.log(item,index,array);
// });

const titulos = document.getElementsByClassName("titulo");
const arrayTitulos = Array.from(titulos);

// console.log(titulos);
// console.log(arrayTitulos);

arrayTitulos.forEach((item) => {
  //console.log(item);
});

const img = document.querySelectorAll("img");

let i = 0;
img.forEach(() => {
  console.log(i++);
});

//ou simplificado abaixo

img.forEach(() => console.log(i++));
