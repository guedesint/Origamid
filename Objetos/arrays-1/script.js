const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiraComida = comidas.shift();
console.log(primeiraComida); //Pizza
const ultimaComida = comidas.pop();
console.log(ultimaComida); //Macarrao
comidas.push('Arroz'); //['Frango', 'Carne', 'Arroz']
comidas.unshift('Peixe'); //['Peixe', 'Frango', 'Carne', 'Arroz']


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort() // ['Brenda', 'Joana', 'Julia', 'Kleber', 'Marcio']
estudantes.reverse()// ['Marcio', 'Kleber', 'Julia', 'Joana', 'Brenda']
console.log(estudantes.includes('Joana'));//true
console.log(estudantes.includes('Juliana'));//false

console.log(estudantes);


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section')//retira a section
html = html.join('ul') //adiciona  no lugar da section ul
html = html.split('div')
html = html.join('li')
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];


const cloneCarros = carros.slice()
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
carros.pop()
console.log(carros);
console.log(cloneCarros);

