var numero = parseInt(prompt('Digite o número'));
var raiz = parseInt(prompt('Digite a raiz'));

var soma = numero;
var resultado = numero.toString();

for (var i = 0; i < 9; i++) {
  soma += raiz;
  resultado += ', ' + soma;
}

alert('A PA é: ' + resultado);
