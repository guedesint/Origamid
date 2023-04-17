
//var ultimoItem = videoGames.pop();

// for (let numero = 0; numero <= 10; numero++) {
//   console.log(videoGames);
// }

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (let item = 0; item < videoGames.length; item++) {
  
  console.log(videoGames[item]);

  if (videoGames === 'PS4') {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach((fruta, index, array) => {
  console.log(fruta, index, array);
})
