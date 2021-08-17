const valorCotacaoDolar = 5.3;
let valorEmDolarTexto = prompt("Quantos dólares você tem para converter?");

let valorEmDolarNumero = parseFloat (valorEmDolarTexto);

let valorEmReal = valorEmDolarNumero * valorCotacaoDolar;

let valorEmRealFixado = valorEmReal.toFixed(2);

alert("O valor que você tem em dólares convertido para real é: R$" + valorEmRealFixado);