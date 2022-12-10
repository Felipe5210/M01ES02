var calculadora = prompt('calculadora (+,-,*,/)');
var num1 = parseFloat(prompt('Num1'));
var num2 = parseFloat(prompt('Num2'));

switch (calculadora) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  default:
    alert('Cálculo inválido');
}
