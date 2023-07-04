function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("honda", 1000);
const fiat = new Carro("fiat", 2000);

function Carro2(marca, precoInical) {
  const taxa = 1.2;
  const precoFinal = precoInical * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("mazda", 5000);



function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  }
  this.ativar = (classe) => {
    this.element().classList.add(classe)
  }
}

const li = new Dom('li:last-Child');
li.ativar('classeAtivada')