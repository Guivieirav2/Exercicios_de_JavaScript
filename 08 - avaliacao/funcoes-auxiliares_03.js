const entradas = [2000, 250];
let i = 0;

function gets() {
  return entradas[i++];
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
